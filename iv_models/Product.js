const mongoose = require('mongoose');

//criando o esquema da coleção
const productSchema = new mongoose.Schema({
    //General
    id: {type:Number, required:true}, //campo obrigatório
    description: String,
    priceCost: String,
    profitPercentage: String,
    salePrice: String,
    profitValue: String,    
    unitMeasurement: String,
    brand: String,
    type: String,
    supplier: String,
    minimumStock: String,
    note: String
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Product', productSchema)


