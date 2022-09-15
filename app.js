const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const mongoose = require('mongoose'); //Importanto pacote do MONGODB

/*
//nao esta funcionando
const cors = require('cors');

const options = {
    origin:["http://localhost:3000", "http://localhost:5000", "http://www.rcodesolutionsteste.com.br"]
}

app.use(cors(options));
*/

//conectando com o banco de dados
mongoose.connect('mongodb://localhost/db_autocom').then(db => {
    console.log("Banco carregado!");
    // console.log(db);
}).catch(error => {
    console.log(error);
})


//importando API's
const clientRoute = require('./ii_routes/clientRoute');

//utilizando API's
app.use('/apiclient', clientRoute);


//Comando só ira funcionar em produção para não haver necessidade de fazer build a toda nova atualização
//__dirname - Diretório do projeto
if (process.env.NODE_ENV != 'development') {
    //enviando arquivo estático pro react
    app.use('/', express.static(path.join(__dirname, 'frontend/build')))

    //enviando arquivo estático para qualquer rota que não dar match
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend/build/index.html', function (error) {
            if (error) {
                res.status(500).send(error)
            }
        }))
    })
}

app.listen(PORT, () => {
    console.log(`Server Running on Port:${PORT}`)
})