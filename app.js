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
const customerRoute = require('./ii_routes/customerRoute');
const employeeRoute = require('./ii_routes/employeeRoute');
const supplierRoute = require('./ii_routes/supplierRoute');
const freightRoute = require('./ii_routes/freightRoute');
const expenseRoute = require('./ii_routes/expenseRoute');
const partnerRoute = require('./ii_routes/partnerRoute');
const productRoute = require('./ii_routes/productRoute');
const inventoryRoute = require('./ii_routes/inventoryRoute');
const userRoute = require('./ii_routes/userRoute');

//utilizando API's
app.use('/apicustomer', customerRoute);  
app.use('/apiemployee', employeeRoute);
app.use('/apisupplier', supplierRoute);
app.use('/apifreight', freightRoute);
app.use('/apiexpense', expenseRoute);
app.use('/apipartner', partnerRoute);
app.use('/apiproduct', productRoute);
app.use('/apiinventory', inventoryRoute);
app.use('/apiuser', userRoute);

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