import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../Menu'
import HeaderSearch from '../HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridCustomer();
})
*/

/*
//função botão alterar
function UpdateCustomer() {

    console.log("Deu certo!");

    //  fetch('/selectCustomer/' + id, { method: "GET" }).then( res => {


    //})
}
*/



//Acessando os dados do banco para atualizar o GRID
function UpdateGridCustomer() {
    fetch('/apicustomer/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let customerElements = '';
            //transformando a instring vinda do customerController em objeto
            let customers = JSON.parse(data);

            customers.forEach((customer) => {
                let customerElement = `<tr id='${customer._id}' onclick="{()=>{console.log('${customer._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${customer.id}</td>
                                        <td>${customer.status}</td>
                                        <td>${customer.name}</td>
                                        <td>${customer.phone}</td>
                                        <td>${customer.cell}</td>
                                        <td>${customer.email}</td>
                                        <td>${customer.typeClient}</td>
                                    </tr>`
                customerElements += customerElement
            });

            document.getElementById("customerGrid").innerHTML = customerElements;
        })
}
//Componente inicio
function CustomerSearch() {

    useEffect(() => {
        UpdateGridCustomer();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Customers' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/customer">New</Link>
                    <button className='btn btn-outline-secondary ms-2'>Delete</button>
                    <button className='btn btn-outline-secondary ms-2'>Print</button>
                </div>

                {/* Inicio grid*/}
                <table className=" table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox"></input></th>
                            <th scope="col">Id</th>
                            <th scope="col">Status</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Cell</th>
                            <th scope="col">Email</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="customerGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerSearch;