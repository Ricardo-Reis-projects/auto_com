const express = require('express');
const router = express.Router();
const userController = require('../iii_controllers/userController')

//rota para adicionar um novo usuario
router.post("/new", express.urlencoded({ extended: true }), userController.addUser);

//rota para selecionar todos os usuarios
router.get("/selectAll", userController.allUsers);

//rota pra selecionar e alterar um usuario 
router.get("/selectUser/:id", userController.selectUser);

module.exports = router;
