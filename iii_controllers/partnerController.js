const Partner = require('../iv_models/Partner');

const addPartner = async (req, res) => {
    //let newPartner = new Partner(req.body)

    let newPartner = new Partner({
        id: req.body.id,
        status: req.body.status,
        name: req.body.name,
        phone: req.body.phone,
        cell: req.body.cell,
        email: req.body.email,
        site: req.body.site,
        //Address
        place: req.body.place,
        number: req.body.number,
        completion: req.body.completion,
        district: req.body.district,
        cep: req.body.cep,
        country: req.body.country,
        state: req.body.state
    })
    try {
        let doc = await newPartner.save()
         res.redirect("/search/partner")
        
        // res.redirect("/search/partner")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Partner adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allPartners = async (req, res) => {

    try {
        let partners = await Partner.find({});

        res.json(JSON.stringify(partners));
        //res.send(partners);
        //res.render('SearchScreen', { partners })
    } catch (error) {
        res.send(error);
    }
}

const selectPartner = async (req, res) => {

          let idPartner = req.params.id;
        try {      
            let doc = await Partner.findOne({ _id: idPartner })
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

    Partner.newPartner(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Partner.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addPartner, allPartners, selectPartner}