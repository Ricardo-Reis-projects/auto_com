const User = require('../iv_models/User');

const addUser = async (req, res) => {
    //let newUser = new User(req.body)

    let newUser = new User({
        id: req.body.id,
        status: req.body.status,
        userName: req.body.userName,
        user: req.body.user,
        password: req.body.password,
        accessLevel: req.body.accessLevel,    
    })
    try {
        let doc = await newUser.save()
         res.redirect("/search/user")
        
        // res.redirect("/search/user")
        // res.send("Link adicionado com sucesso!!!");
        //console.log("User adicionado com sucesso!");
 
    } catch (error) {
        res.send(error);
    }
}

const allUsers = async (req, res) => {

    try {
        let users = await User.find({});

        res.json(JSON.stringify(users));
        //res.send(users);
        //res.render('SearchScreen', { users })
    } catch (error) {
        res.send(error);
    }
}

const selectUser = async (req, res) => {

          let idUser = req.params.id;
        try {      
            let doc = await User.findOne({ _id: idUser })
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

    User.newUser(id, status, name);

    res.send("Aluno adicionado com sucesso! -----teste ricardo");
}
*/

/*exemplo de pesquisar
const redirect = async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await User.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send("Houve um Erro!");
    }
}
*/


module.exports = { addUser, allUsers, selectUser}