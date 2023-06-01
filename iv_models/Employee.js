const mongoose = require('mongoose');

//criando o esquema da coleção
const employeeSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    status: String,
    name: String,
    phone: String,
    cell: String,
    email: String,

    birthDate: Date,
    maritalStatus: String,
    gender: String,
    rg: String,
    cpf: String,

     //Address
    place: String,
    number: Number,
    completion: String,
    district: String,
    cep: String,
    country: String,
    state: String,

     //Data profisional
    profession: String,
    hiringDate: Date,
    numberWorkPortfolio: String,
    numberWorkPortfolioSeries: String,	
    pis: String,
    wage: String,
    resignationDate: Date,

    //Additional Information
    //driver license
    driverLicenseCategory: String,
    driverLicenseRegistration: String,
    driverLicenseExpirationDate: Date,

    //data bank account
    numberBankAccount: String,
    nameBankAccount: String,
    agency: String,
    account: String,
    typeAccount: String
   
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Employee', employeeSchema)