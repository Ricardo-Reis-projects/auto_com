const Employee = require('../iv_models/Employee');

const addEmployee= async (req, res) => {
    //let newEmployee = new Employee(req.body)

    let newEmployee = new Employee({
        
        //General
        id: req.body.id,
        status: req.body.status,
        name: req.body.name,
        phone: req.body.phone,
        cell: req.body.cell,
        email: req.body.email,    

        birthDate: req.body.birthDate,
        maritalStatus: req.body.maritalStatus,
        gender: req.body.gender,   
        rg: req.body.rg,
        cpf: req.body.cpf,

        //Address
        place: req.body.place,
        number: req.body.number,
        completion: req.body.completion,
        district: req.body.district,
        cep: req.body.cep,
        country: req.body.country,
        state: req.body.state,

        //Data profisional
        profession: req.body.profession,
        hiringDate: req.body.hiringDate,
        numberWorkPortfolio: req.body.numberWorkPortfolio,     
        numberWorkPortfolioSeries: req.body.numberWorkPortfolioSeries,   
        pis: req.body.pis,
        wage: req.body.wage,
        resignationDate: req.body.resignationDate,

        //Additional Information
        //driver license
        driverLicenseCategory: req.body.driverLicenseCategory,
        driverLicenseRegistration: req.body.driverLicenseRegistration,
        driverLicenseExpirationDate: req.body.driverLicenseExpirationDate,

        //data bank account
        numberBankAccount: req.body.numberBankAccount,
        nameBankAccount: req.body.nameBankAccount,
        agency: req.body.agency,
        account: req.body.account,
        typeAccount: req.body.typeAccount
        
    })
    try {
        let doc = await newEmployee.save()
         res.redirect("/search/employee")
        
        // res.redirect("/search/employee")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Empregado adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allEmployee = async (req, res) => {

    try {
        let employees = await Employee.find({});

        res.json(JSON.stringify(employees));
        //res.send(employees);
        //res.render('SearchScreen', { employees })
    } catch (error) {
        res.send(error);
    }
}

const selectEmployee = async (req, res) => {

          let idEmployee = req.params.id;
        try {      
            let doc = await Employee.findOne({ _id: idEmployee })
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

    Employee.newEmployee(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Employee.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addEmployee, allEmployee, selectEmployee }