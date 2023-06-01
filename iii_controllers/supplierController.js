const Supplier = require('../iv_models/Supplier');

const addSupplier = async(req, res) => {
    //let newSupplier = new Supplier(req.body)

    let newSupplier = new Supplier({
        
        //General
        id: req.body.id,
        status: req.body.status,
        fantasiaName: req.body.fantasiaName, 
        corporateName: req.body.corporateName,
        agentName: req.body.agentName,
        typeSupplier: req.body.typeSupplier,
        phone: req.body.phone,
        cell: req.body.cell,
        email: req.body.email,
        site: req.body.site,
        cnpj: req.body.cnpj,

         //Address
         place: req.body.place,
         number: req.body.number,
         completion: req.body.completion,
         district: req.body.district,
         cep: req.body.cep,
         country: req.body.country,
         state: req.body.state,
       
        //data bank account
        numberBankAccount: req.body.numberBankAccount,
        nameBankAccount: req.body.nameBankAccount,
        agency: req.body.agency,
        account: req.body.account,
        typeAccount: req.body.typeAccount
          
      })
      try {
          let doc = await newSupplier.save()
           res.redirect("/search/supplier")
          
          // res.redirect("/search/supplier")
          // res.send("Link adicionado com sucesso!!!");
          //console.log("Empregado adicionado com sucesso!");
   
      } catch (error) {
          res.send(error);
      }
  }
  
  const allSupplier = async (req, res) => {
  
      try {
          let suppliers = await Supplier.find({});
  
          res.json(JSON.stringify(suppliers));
          //res.send(suppliers);
          //res.render('SearchScreen', { suppliers })
      } catch (error) {
          res.send(error);
      }
  }
  
  const selectSupplier = async (req, res) => {
  
            let idSupplier = req.params.id;
          try {      
              let doc = await Supplier.findOne({ _id: idSupplier })
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
  
      Supplier.newSupplier(id, status, name);
  
      res.send("Aluno adicionado com sucesso! -----teste ricardo");
  }
  */
  
  /*exemplo de pesquisar
  const redirect = async (req, res) => {
  
      let title = req.params.title;
      try {
          let doc = await Supplier.findOne({ title: title })
          console.log(doc);
          res.redirect(doc.url);
      } catch (error) {
          res.send("Houve um Erro!");
      }
  }
  */
  
    module.exports = { addSupplier, allSupplier, selectSupplier }
   