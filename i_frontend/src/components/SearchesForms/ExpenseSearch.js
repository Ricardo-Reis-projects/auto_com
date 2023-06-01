import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridExpense();
})
*/

//Acessando os dados do banco para atualizar o GRID
function UpdateGridExpense() {
    fetch('/apiexpense/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let expenseElements = '';
            //transformando a instring vinda do expenseController em objeto
            let expenses = JSON.parse(data);

            expenses.forEach((expense) => {
                let expenseElement = `<tr id='${expense._id}' onclick="{()=>{console.log('${expense._id}')}} "> 
                                        <td><input type="checkbox"></input></td>
                                        <td >${expense.id}</td>
                                        <td>${expense.issuanceDate}</td>
                                        <td>${expense.description}</td>
                                        <td>${expense.type}</td>
                                        <td>${expense.value}</td>
                                        <td>${expense.note}</td>
                                    </tr>`
                expenseElements += expenseElement
            });

            document.getElementById("expenseGrid").innerHTML = expenseElements;
        })
}
//Componente inicio
function ExpenseSearch() {

    useEffect(() => {
        UpdateGridExpense();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Expenses' />

            <div className='container'>
                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/expense">New</Link>
                    <button className='btn btn-outline-secondary ms-2'>Delete</button>
                    <button className='btn btn-outline-secondary ms-2'>Print</button>
                </div>

                {/* Inicio grid*/}
                <table className=" table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox"></input></th>
                            <th scope="col">Id</th>
                            <th scope="col">Issuance Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Type</th>
                            <th scope="col">Value</th>
                            <th scope="col">Note</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="expenseGrid"></tbody>
                </table>
            </div>
        </div>
    )
}

export default ExpenseSearch;