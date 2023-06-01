const Inventory = require('../iv_models/Inventory');

const addInventoryMovement = async (req, res) => {
    //let newInventoryMovement = new Inventory(req.body)

    let newInventoryMovement = new Inventory({
        id: req.body.id,
        movementCode: req.body.movementCode,
        movementDate: req.body.movementDate,
        movementType: req.body.movementType,
        productCode: req.body.productCode,
        productDescription: req.body.productDescription,
        family: req.body.family,
        brand: req.body.brand,
        unitMeasurement: req.body.unitMeasurement,
        unitPrice: req.body.unitPrice,
        profitPercentage: req.body.profitPercentage,
        minimumStock: req.body.minimumStock,
        note: req.body.note,
        movementUser: req.body.movementUser,
        status: req.body.status,//(Estoque confortavel, estoque moderado,estoque baixo, Sem estoque)
        //Data of movement
        movementQuantity: req.body.movementQuantity,
        movementTotalValue: req.body.movementTotalValue,
        movementTotalSaleValue: req.body.movementTotalSaleValue,
        movementTotalProfit: req.body.movementTotalProfit,
        //Data of updated inventory
        updatedInventoryQuantity: req.body.updatedInventoryQuantity,
        updatedInventoryTotalValue: req.body.updatedInventoryTotalValue,
        updatedInventoryTotalSalesValue: req.body.updatedInventoryTotalSalesValue,
        updatedInventoryTotalProfit: req.body.updatedInventoryTotalProfit,

    })
    try {
        let doc = await newInventoryMovement.save()
        res.redirect("/search/inventory")

        // res.redirect("/search/inventory")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Inventory Movement adicionado com sucesso!");

    } catch (error) {
        res.send(error);
    }
}

const allInventoryMovements = async (req, res) => {

    try {
        let inventoryMovements = await Inventory.find({});

        res.json(JSON.stringify(inventoryMovements));
        //res.send(inventoryMovements);
        //res.render('SearchScreen', { inventoryMovements })
    } catch (error) {
        res.send(error);
    }
}

const selectInventoryMovement = async (req, res) => {

    let idInventoryMovement = req.params.id;
    try {
        let doc = await Inventory.findOne({ _id: idInventoryMovement })
        console.log(doc);
        res.send(doc);
        //res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }
}



/*exemplo de salvar
c(req, res) => {

    let id = req.body.id;
    let status = req.body.status;
    let name = req.body.name;

    Inventory.newInventoryMovement(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Inventory.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addInventoryMovement, allInventoryMovements, selectInventoryMovement }