const Customer = require('../iv_models/Customer');

const addCustomer = async (req, res) => {
    //let newCustomer = new Customer(req.body)

    let newCustomer = new Customer({
        id: req.body.id,
        status: req.body.status,
        name: req.body.name,
        phone: req.body.phone,
        cell: req.body.cell,
        email: req.body.email,
        //Address
        place: req.body.place,
        number: req.body.number,
        completion: req.body.completion,
        district: req.body.district,
        cep: req.body.cep,
        country: req.body.country,
        state: req.body.state,

        typeClient: req.body.radioTypeClient,        

        //Data PF
        rg: req.body.rg,
        cpf: req.body.cpf,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        profession: req.body.profession,
        //Data Pj
        representative: req.body.representative,
        cnpj: req.body.cnpj,
        ie: req.body.ie
    })
    try {
        let doc = await newCustomer.save()
         res.redirect("/search/customer")
        
        // res.redirect("/search/customer")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Cliente adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allCustomers = async (req, res) => {

    try {
        let customers = await Customer.find({});

        res.json(JSON.stringify(customers));
        //res.send(customers);
        //res.render('SearchScreen', { customers })
    } catch (error) {
        res.send(error);
    }
}

const selectCustomer = async (req, res) => {

          let idCustomer = req.params.id;
        try {      
            let doc = await Customer.findOne({ _id: idCustomer })
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

    Customer.newCustomer(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Customer.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addCustomer, allCustomers, selectCustomer }