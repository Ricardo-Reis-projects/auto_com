const mongoose = require('mongoose');

//criando o esquema da coleção
const freightSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    status: String,
    city: String,
    state: String,
    country: String,
    unitaryValue: String
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Freight', freightSchema)