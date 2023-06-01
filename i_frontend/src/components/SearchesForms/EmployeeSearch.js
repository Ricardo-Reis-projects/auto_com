import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

//Acessando os dados do banco para atualizar o GRID
function UpdateGridEmployee() {
    fetch('/apiemployee/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let employeeElements = '';
            //transformando a instring vinda do clientController em objeto
            let Employees = JSON.parse(data);

            Employees.forEach((employee) => {       
                let employeeElement = `<tr id='${employee._id}' onclick="{()=>{console.log('${employee._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${employee.id}</td>
                                        <td>${employee.status}</td>
                                        <td>${employee.name}</td>
                                        <td>${employee.phone}</td>
                                        <td>${employee.cell}</td>
                                        <td>${employee.email}</td>
                                        <td>${employee.profession}</td>
                                    </tr>`
                employeeElements += employeeElement
            });

            document.getElementById("employeeGrid").innerHTML = employeeElements;
        })
}
//Componente inicio
function EmployeeSearch() {

    useEffect(() => {
        UpdateGridEmployee();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Employees' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>

                    <Link className='btn btn-primary' to="/register/employee">New</Link>
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
                            <th scope="col">Profession</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="employeeGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeSearch;