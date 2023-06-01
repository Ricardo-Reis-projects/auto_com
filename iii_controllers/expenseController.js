const Expense = require('../iv_models/Expense');

const addExpense = async (req, res) => {
    //let newExpense = new Expense(req.body)

    let newExpense = new Expense({
        id: req.body.id,
        issuanceDate: req.body.issuanceDate,
        description: req.body.description,
        type: req.body.type,
        value: req.body.value,
        note: req.body.note,
        
    })
    try {
        let doc = await newExpense.save()
         res.redirect("/search/expense")
        
        // res.redirect("/search/expense")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("Expense adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allExpenses = async (req, res) => {

    try {
        let expenses = await Expense.find({});

        res.json(JSON.stringify(expenses));
        //res.send(expenses);
        //res.render('SearchScreen', { expenses })
    } catch (error) {
        res.send(error);
    }
}

const selectExpense = async (req, res) => {

          let idExpense = req.params.id;
        try {      
            let doc = await Expense.findOne({ _id: idExpense })
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

    Expense.newExpense(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Expense.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addExpense, allExpenses, selectExpense}