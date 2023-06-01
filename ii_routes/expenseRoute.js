const express = require('express');
const router = express.Router();
const expenseController = require('../iii_controllers/expenseController')

//rota para adicionar um novo custo
router.post("/new", express.urlencoded({ extended: true }), expenseController.addExpense);

//rota para selecionar todos os custos
router.get("/selectAll", expenseController.allExpenses);

//rota pra selecionar e alterar um custo 
router.get("/selectExpense/:id", expenseController.selectExpense);

module.exports = router;
