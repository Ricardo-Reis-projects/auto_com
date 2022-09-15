import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridClient();
})
*/


//função botão alterar
function UpdateClient() {

    console.log("Deu certo!");

    //  fetch('/selectClient/' + id, { method: "GET" }).then( res => {


    //})
}




//Acessando os dados do banco para atualizar o GRID
function UpdateGridClient() {
    fetch('/apiclient/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let clientElements = '';
            //transformando a instring vinda do clientController em objeto
            let clients = JSON.parse(data);

            clients.forEach((client) => {       
                let clientElement = `<tr id='${client._id}' onclick="{()=>{console.log('${client._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${client.id}</td>
                                        <td>${client.status}</td>
                                        <td>${client.name}</td>
                                        <td>${client.phone}</td>
                                        <td>${client.cell}</td>
                                        <td>${client.email}</td>
                                        <td>${client.typeClient}</td>
                                    </tr>`
                clientElements += clientElement
            });

            document.getElementById("clientGrid").innerHTML = clientElements;
        })
}
//Componente inicio
function ClientSearch() {

    useEffect(() => {
        UpdateGridClient();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Clientes' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/client">Novo</Link>
                    <button className='btn btn-outline-secondary ms-2'>Excluir</button>
                    <button className='btn btn-outline-secondary ms-2'>Imprimir</button>
                </div>

                {/* Inicio grid*/}
                <table className=" table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox"></input></th>
                            <th scope="col">Id</th>
                            <th scope="col">Status</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Email</th>
                            <th scope="col">Tipo</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="clientGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default ClientSearch;