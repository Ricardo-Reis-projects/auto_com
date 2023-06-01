const mongoose = require('mongoose');

//criando o esquema da coleção
const inventorySchema = new mongoose.Schema({
    //General
    id: { type: Number, required: true }, //campo obrigatório
    movementCode: String,
    movementDate: Date,
    movementType: String,
    productCode: Number,
    productDescription: String,
    family: String,
    brand: String,
    unitMeasurement: String,
    unitPrice: String,
    profitPercentage: String,
    minimumStock: String,
    note: String,
    movementUser: String,
    status: String,//(Estoque confortavel, estoque moderado,estoque baixo, Sem estoque)
    //Data of movement
    movementQuantity: Number,
    movementTotalValue: String,
    movementTotalSaleValue: String,
    movementTotalProfit: String,
    //Data of updated inventory
    updatedInventoryQuantity: Number,
    updatedInventoryTotalValue: String,
    updatedInventoryTotalSalesValue: String,
    updatedInventoryTotalProfit: String,
})

//Referenciando/definindo o esquema a coleção
module.exports = mongoose.model('Inventory', inventorySchema)