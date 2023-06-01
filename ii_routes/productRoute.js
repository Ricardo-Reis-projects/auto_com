const express = require('express');
const router = express.Router();
const productController = require('../iii_controllers/productController')

//rota para adicionar um novo produto
router.post("/new", express.urlencoded({ extended: true }), productController.addProduct);

//rota para selecionar todos os produtos
router.get("/selectAll", productController.allProducts);

//rota pra selecionar e alterar um produto 
router.get("/selectProduct/:id", productController.selectProduct);

module.exports = router;


