const Product = require('../iv_models/Product');

const addProduct = async (req, res) => {
    //let newProduct = new Product(req.body)

    let newProduct = new Product({
        id: req.body.id,
        description: req.body.description,
        priceCost: req.body.priceCost,
        profitPercentage: req.body.profitPercentage,
        salePrice: req.body.salePrice,
        profitValue: req.body.profitValue,
        unitMeasurement: req.body.unitMeasurement,
        brand: req.body.brand,
        type: req.body.type,
        supplier: req.body.supplier,
        minimumStock: req.body.minimumStock,
        note: req.body.note,

    })
    try {
        let doc = await newProduct.save()
        res.redirect("/search/product")

        // res.redirect("/search/product")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Produto adicionado com sucesso!");

    } catch (error) {
        res.send(error);
    }
}

const allProducts = async (req, res) => {

    try {
        let products = await Product.find({});

        res.json(JSON.stringify(products));
        //res.send(products);
        //res.render('SearchScreen', { products })
    } catch (error) {
        res.send(error);
    }
}

const selectProduct = async (req, res) => {

    let idProduct = req.params.id;
    try {
        let doc = await Product.findOne({ _id: idProduct })
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

    Product.newProduct(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Product.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addProduct, allProducts, selectProduct }