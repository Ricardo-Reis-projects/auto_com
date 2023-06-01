const express = require('express');
const router = express.Router();
const employeeController = require('../iii_controllers/employeeController')

//rota para adicionar um novo cliente
router.post("/new", express.urlencoded({ extended: true }), employeeController.addEmployee);

//rota para selecionar todos os clientes
router.get("/selectAll", employeeController.allEmployee);

//rota pra selecionar e alterar um cliente 
router.get("/selectEmployee/:id", employeeController.selectEmployee);

module.exports = router;


