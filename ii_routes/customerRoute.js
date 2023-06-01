const express = require('express');
const router = express.Router();
const customerController = require('../iii_controllers/customerController')

//rota para adicionar um novo cliente
router.post("/new", express.urlencoded({ extended: true }), customerController.addCustomer);

//rota para selecionar todos os clientes
router.get("/selectAll", customerController.allCustomers);

//rota pra selecionar e alterar um cliente 
router.get("/selectCustomer/:id", customerController.selectCustomer);

module.exports = router;


