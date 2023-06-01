const mongoose = require('mongoose');

//criando o esquema da coleção
const userSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    status: String,
    userName: String,
    user: String,
    password: String,    
    accessLevel: String,
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('User', userSchema)