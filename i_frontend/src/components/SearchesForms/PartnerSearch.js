import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridPartner();
})
*/

//Acessando os dados do banco para atualizar o GRID
function UpdateGridPartner() {
    fetch('/apipartner/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let partnerElements = '';
            //transformando a instring vinda do partnerController em objeto
            let partners = JSON.parse(data);

            partners.forEach((partner) => {
                let partnerElement = `<tr id='${partner._id}' onclick="{()=>{console.log('${partner._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${partner.id}</td>
                                        <td>${partner.status}</td>
                                        <td>${partner.name}</td>
                                        <td>${partner.phone}</td>
                                        <td>${partner.cell}</td>
                                        <td>${partner.email}</td>
                                        <td>${partner.site}</td>
                                    </tr>`
                partnerElements += partnerElement
            });

            document.getElementById("partnerGrid").innerHTML = partnerElements;
        })
}
//Componente inicio
function PartnerSearch() {

    useEffect(() => {
        UpdateGridPartner();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Partners' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/partner">New</Link>
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
                            <th scope="col">Site</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="partnerGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default PartnerSearch;