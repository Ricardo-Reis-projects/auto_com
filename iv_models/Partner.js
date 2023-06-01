const mongoose = require('mongoose');

//criando o esquema da coleção
const partnerSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    status: String,
    name: String,
    phone: String,
    cell: String,
    email: String,
    site: String,
    //Address
    place: String,
    number:Number,
    completion: String,
    district: String,
    cep: String,
    country: String,
    state: String  
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Partner', partnerSchema)