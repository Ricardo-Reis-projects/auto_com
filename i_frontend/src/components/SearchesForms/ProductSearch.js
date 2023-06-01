import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridProduct();
})
*/                         


//Acessando os dados do banco para atualizar o GRID
function UpdateGridProduct() {
    fetch('/apiproduct/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let productElements = '';
            //transformando a instring vinda do productController em objeto
            let products = JSON.parse(data);

            products.forEach((product) => {
                let productElement = `<tr id='${product._id}' onclick="{()=>{console.log('${product._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${product.id}</td>
                                        <td>${product.description}</td>
                                        <td>${product.salePrice}</td>
                                        <td>${product.unitMeasurement}</td>
                                        <td>${product.brand}</td>
                                        <td>${product.type}</td>
                                        <td>${product.supplier}</td>
                                    </tr>`
                productElements += productElement
            });

            document.getElementById("productGrid").innerHTML = productElements;
        })
}
//Componente inicio
function ProductSearch() {

    useEffect(() => {
        UpdateGridProduct();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Products' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/product">New</Link>
                    <button className='btn btn-outline-secondary ms-2'>Delete</button>
                    <button className='btn btn-outline-secondary ms-2'>Print</button>
                </div>

                {/* Inicio grid*/}
                <table className=" table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox"></input></th>
                            <th scope="col">Id</th>
                            <th scope="col">Description</th>
                            <th scope="col">Sale Price</th>
                            <th scope="col">Unit Measurement</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Type</th>
                            <th scope="col">Supplier</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="productGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductSearch;
