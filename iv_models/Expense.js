const mongoose = require('mongoose');

//criando o esquema da coleção
const expenseSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    issuanceDate: Date,
    description: String,
    type: String,
    value: String,
    note: String,
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Expense', expenseSchema)