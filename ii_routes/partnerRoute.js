const express = require('express');
const router = express.Router();
const partnerController = require('../iii_controllers/partnerController')

//rota para adicionar um novo parceiro
router.post("/new", express.urlencoded({ extended: true }), partnerController.addPartner);

//rota para selecionar todos os parceiros
router.get("/selectAll", partnerController.allPartners);

//rota pra selecionar e alterar um parceiro 
router.get("/selectPartner/:id", partnerController.selectPartner);

module.exports = router;
