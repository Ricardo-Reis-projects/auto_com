const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/db_autocom').then(db => {
    console.log("Banco carregado!");
    // console.log(db);
}).catch(error => {
    console.log(error);
})


//criando o esquema da coleção
const linkSchema = new mongoose.Schema({
    title: {type:String, required:true}, //campo obrigatório
    description: String,
    url: String,
    click: {type:Number, default:0}
})

//Referenciando/definindo o esquema a coleção
const Link = mongoose.model('Link', linkSchema)

//criando o documento
let link = new Link({
    title: "Ricardo Reis",
    description: "Link do Instagram",
    url: "https://www.instagram.com/",
    click: 0
})







//Salvando o documento
link.save().then(doc => {
    console.log(doc)
}).catch(err => { console.log(err) })


app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`)
})