const express = require('express');
const app = express();
const mongoose = require('mongoose');

//outro exemplo de conexão com  banco de dados utilizando listerners
mongoose.connect('mongodb://localhost/db_autocom')

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um error") });
db.once("open", () => { console.log("Banco carregado!") });


//criando o esquema da coleção
const linkSchema = new mongoose.Schema({
    title: { type: String, required: true }, //campo obrigatório
    description: String,
    url: String,
    click: { type: Number, default: 0 }
})

//Referenciando/definindo o esquema a coleção
const Link = mongoose.model('Link', linkSchema)

app.get("/:title", async (req, res) => {

    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title: title })
        console.log(doc);
        res.redirect(doc.url);
    } catch (error) {
        res.send(error);
    }

})


app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`)
})