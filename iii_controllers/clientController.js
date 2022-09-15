const Client = require('../iv_models/Client');

const addClient = async (req, res) => {
    //let newClient = new Client(req.body)

    let newClient = new Client({
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
        county: req.body.county,
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
        let doc = await newClient.save()
         res.redirect("/search/client")
        
        // res.redirect("/search/client")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Cliente adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allClients = async (req, res) => {

    try {
        let clients = await Client.find({});

        res.json(JSON.stringify(clients));
        //res.send(clients);
        //res.render('SearchScreen', { clients })
    } catch (error) {
        res.send(error);
    }
}

const selectClient = async (req, res) => {

          let idClient = req.params.id;
        try {      
            let doc = await Client.findOne({ _id: idClient })
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

    Client.newClient(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Client.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addClient, allClients, selectClient }