const Freight = require('../iv_models/Freight');

const addFreight = async (req, res) => {
    //let newFreight = new Freight(req.body)

    let newFreight = new Freight({

        id: req.body.id,
        status: req.body.status,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        unitaryValue: req.body.unitaryValue
    })
    try {
        let doc = await newFreight.save()
         res.redirect("/search/freight")
        
        // res.redirect("/search/freight")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Freight adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allFreights = async (req, res) => {

    try {
        let freights = await Freight.find({});

        res.json(JSON.stringify(freights));
        //res.send(freights);
        //res.render('SearchScreen', { freights })
    } catch (error) {
        res.send(error);
    }
}

const selectFreight = async (req, res) => {

          let idFreight = req.params.id;
        try {      
            let doc = await Freight.findOne({ _id: idFreight })
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

    Freight.newFreight(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Freight.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addFreight, allFreights, selectFreight}