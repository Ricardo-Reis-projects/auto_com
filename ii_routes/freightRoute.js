const express = require('express');
const router = express.Router();
const freightController = require('../iii_controllers/freightController')

//rota para adicionar um novo frete
router.post("/new", express.urlencoded({ extended: true }), freightController.addFreight);

//rota para selecionar todos os fretes
router.get("/selectAll", freightController.allFreights);

//rota pra selecionar e alterar um frete 
router.get("/selectFreight/:id", freightController.selectFreight);

module.exports = router;
