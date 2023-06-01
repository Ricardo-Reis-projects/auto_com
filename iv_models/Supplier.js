const mongoose = require('mongoose');

//criando o esquema da coleção
const supplierSchema = new mongoose.Schema({
    //General
    id: {type:Number, require:true}, //campo obrigatorio
    status: String,
    fantasiaName: String,
    corporateName: String,
    agentName: String,
    typeSupplier: String,
    phone: String,
    cell: String,
    email: String,
    site: String,
    cnpj: String,

    //Address
    place: String,
    number: Number,
    completion: String,
    district: String,
    cep: String,
    country: String,
    state: String,

    //data bank account
    numberBankAccount: String,
    nameBankAccount: String,
    agency: String,
    account: String,
    typeAccount: String

})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Supplier', supplierSchema)