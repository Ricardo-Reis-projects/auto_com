const express = require('express');
const router = express.Router();
const supplierController = require('../iii_controllers/supplierController')

//rota para adicionar um novo cliente
router.post("/new", express.urlencoded({ extended: true }), supplierController.addSupplier);

//rota para selecionar todos os clientes
router.get("/selectAll", supplierController.allSupplier);

//rota pra selecionar e alterar um cliente 
router.get("/selectSupplier/:id", supplierController.selectSupplier);

module.exports = router;