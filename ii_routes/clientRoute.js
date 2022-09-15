const express = require('express');
const router = express.Router();
const clientController = require('../iii_controllers/clientController')

//rota para adicionar um novo cliente
router.post("/new", express.urlencoded({ extended: true }), clientController.addClient);

//rota para selecionar todos os clientes
router.get("/selectAll", clientController.allClients);

//rota pra selecionar e alterar um cliente 
router.get("/selectClient/:id", clientController.selectClient);

module.exports = router;


