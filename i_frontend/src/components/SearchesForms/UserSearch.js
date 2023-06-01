import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridUser();
})
*/

//Acessando os dados do banco para atualizar o GRID
function UpdateGridUser() {
    fetch('/apiuser/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let userElements = '';
            //transformando a instring vinda do userController em objeto
            let users = JSON.parse(data);

            users.forEach((user) => {
                let userElement = `<tr id='${user._id}' onclick="{()=>{console.log('${user._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${user.id}</td>
                                        <td>${user.status}</td>
                                        <td>${user.userName}</td>
                                        <td>${user.user}</td>
                                        <td>${user.password}</td>
                                        <td>${user.accessLevel}</td>
                                    </tr>`
                userElements += userElement
            });

            document.getElementById("userGrid").innerHTML = userElements;
        })
}
//Componente inicio
function UserSearch() {

    useEffect(() => {
        UpdateGridUser();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Users' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/user">New</Link>
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
                            <th scope="col">User Name</th>
                            <th scope="col">User</th>
                            <th scope="col">Password</th>
                            <th scope="col">Access Level</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="userGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default UserSearch;