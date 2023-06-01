import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridFreight();
})
*/

//Acessando os dados do banco para atualizar o GRID
function UpdateGridFreight() {
    fetch('/apifreight/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let freightElements = '';
            //transformando a instring vinda do freightController em objeto
            let freights = JSON.parse(data);

            freights.forEach((freight) => {
                let freightElement = `<tr id='${freight._id}' onclick="{()=>{console.log('${freight._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${freight.id}</td>
                                        <td>${freight.status}</td>
                                        <td>${freight.city}</td>
                                        <td>${freight.state}</td>
                                        <td>${freight.country}</td>
                                        <td>${freight.unitaryValue}</td>
                                    </tr>`
                freightElements += freightElement
            });

            document.getElementById("freightGrid").innerHTML = freightElements;
        })
}
//Componente inicio
function FreightSearch() {

    useEffect(() => {
        UpdateGridFreight();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Freights' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/freight">New</Link>
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
                            <th scope="col">City</th>
                            <th scope="col">State</th>
                            <th scope="col">Country</th>
                            <th scope="col">Unitary Value</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="freightGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default FreightSearch;