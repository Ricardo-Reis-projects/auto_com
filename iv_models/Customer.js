const mongoose = require('mongoose');

//criando o esquema da coleção
const customerSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    status: String,
    name: String,
    phone: String,
    cell: String,
    email: String,
    //Address
    place: String,
    number:Number,
    completion: String,
    district: String,
    cep: String,
    country: String,
    state: String,

    typeClient: String,
    //Data PF
    rg: String,
    cpf: String,
    gender: String,
    birthDate: Date,
    profession: String,
    //Data Pj
    representative: String,
    cnpj: String,
    ie: String,
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Customer', customerSchema)