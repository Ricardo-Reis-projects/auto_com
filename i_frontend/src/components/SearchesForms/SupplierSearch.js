import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

//Acessando os dados do banco para atualizar o GRID
function UpdateGridSupplier() {
    fetch('/apisupplier/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let supplierElements = '';
            //transformando a instring vinda do clientController em objeto
            let Suppliers = JSON.parse(data);

            Suppliers.forEach((supplier) => {
                let supplierElement = `<tr id='${supplier._id}' onclick="{()=>{console.log('${supplier._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${supplier.id}</td>
                                        <td>${supplier.status}</td>
                                        <td>${supplier.corporateName}</td>
                                        <td>${supplier.agentName}</td>
                                        <td>${supplier.typeSupplier}</td>
                                        <td>${supplier.phone}</td>
                                        <td>${supplier.cell}</td>
                                    </tr>`
                supplierElements += supplierElement
            });

            document.getElementById("supplierGrid").innerHTML = supplierElements;
        })
}
//Componente inicio
function SupplierSearch() {

    useEffect(() => {
        UpdateGridSupplier();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Suppliers' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/supplier">New</Link>
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
                            <th scope="col">Corporate Name</th>
                            <th scope="col">Agent Name</th>
                            <th scope="col">Type Supplier</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Cell</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="supplierGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default SupplierSearch;