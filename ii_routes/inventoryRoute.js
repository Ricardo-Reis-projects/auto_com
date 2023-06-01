const express = require('express');
const router = express.Router();
const inventoryController = require('../iii_controllers/inventoryController')

//rota para adicionar um novo Inventory Movement
router.post("/new", express.urlencoded({ extended: true }), inventoryController.addInventoryMovement);

//rota para selecionar todos os Inventory Movements
router.get("/selectAll", inventoryController.allInventoryMovements);

//rota pra selecionar e alterar um Inventory Movement
router.get("/selectInventory/:id", inventoryController.selectInventoryMovement);

module.exports = router;


