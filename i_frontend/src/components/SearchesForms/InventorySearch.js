import React, { useEffect } from "react";
import { Link } from "react-router-dom"

import Menu from '../../components/Menu'
import HeaderSearch from '../../components/HeaderSearch';

/*
document.addEventListener('DOMContentLoaded', () => {
    UpdateGridInventory();
})
*/

//Acessando os dados do banco para atualizar o GRID sumarizado
function UpdateGridInventory() {
    fetch('/apiinventory/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let inventoryElements = '';
            //transformando a instring vinda do inventoryController em objeto
            let inventorys = JSON.parse(data);

            inventorys.forEach((inventory) => {
                let inventoryElement = `<tr id='${inventory._id}' onclick="{()=>{console.log('${inventory._id}')}} "> 
                                        <td >${inventory.movementDate}</td>
                                        <td>${inventory.productCode}</td>
                                        <td>${inventory.productDescription}</td>
                                        <td>${inventory.family}</td>
                                        <td>${inventory.brand}</td>
                                        <td>${inventory.unitMeasurement}</td>
                                        <td>${inventory.minimumStock}</td>
                                        <td>${inventory.updatedInventoryQuantity}</td>
                                        <td>${inventory.note}</td>
                                        <td>${inventory.status}</td>
                                    </tr>`
                inventoryElements += inventoryElement
            });

            document.getElementById("inventoryGrid").innerHTML = inventoryElements;
        })
}

//Acessando os dados do banco para atualizar o GRID de movimentacao de estoque
function UpdateGridInventoryMovement() {
    fetch('/apiinventory/selectAll')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let inventoryMovementElements = '';
            //transformando a instring vinda do inventoryController em objeto
            let inventoryMovements = JSON.parse(data);

            inventoryMovements.forEach((inventoryMovement) => {
                let inventoryMovementElement = `<tr id='${inventoryMovement._id}' onclick="{()=>{console.log('${inventoryMovement._id}')}} "> 
                                        <td >${inventoryMovement.movementCode}</td>
                                        <td>${inventoryMovement.movementDate}</td>
                                        <td>${inventoryMovement.movementType}</td>
                                        <td>${inventoryMovement.productCode}</td>
                                        <td>${inventoryMovement.productDescription}</td>
                                        <td>${inventoryMovement.family}</td>
                                        <td>${inventoryMovement.brand}</td>
                                        <td>${inventoryMovement.unitMeasurement}</td>
                                        <td>${inventoryMovement.unitPrice}</td>
                                        <td>${inventoryMovement.profitPercentage}</td>
                                        <td>${inventoryMovement.note}</td>
                                        <td>${inventoryMovement.status}</td>
                                        <td>${inventoryMovement.movementUser}</td>
                                        <td>${inventoryMovement.movementQuantity}</td>
                                        <td>${inventoryMovement.movementTotalValue}</td>
                                        <td>${inventoryMovement.profitPercentage}</td>
                                        <td>${inventoryMovement.movementTotalSaleValue}</td>
                                        <td>${inventoryMovement.movementTotalProfit}</td>
                                        <td>${inventoryMovement.updatedInventoryQuantity}</td>
                                        <td>${inventoryMovement.updatedInventoryTotalValue}</td>
                                        <td>${inventoryMovement.updatedInventoryTotalSalesValue}</td>
                                        <td>${inventoryMovement.updatedInventoryTotalProfit}</td>
                                    </tr>`
                inventoryMovementElements += inventoryMovementElement
            });

            document.getElementById("inventoryMovementGrid").innerHTML = inventoryMovementElements;
        })
}

//Componente inicio
function InventorySearch() {

    useEffect(() => {
        UpdateGridInventory();
        UpdateGridInventoryMovement();
    }, []);

    return (
        <div>
            <Menu />
            <HeaderSearch title='Inventory' />

            <div className='container'>

                {/* Botões*/}
                <div className='my-4'>
                    <Link className='btn btn-primary' to="/register/inventory">New</Link>
                    <button className='btn btn-outline-secondary ms-2'>Delete</button>
                    <button className='btn btn-outline-secondary ms-2'>Print</button>
                </div>

                {/* Inicio grid*/}
                <table className=" table table-striped my-4 ">
                    <thead>
                        <tr>
                            <th scope="col">Movement Date</th>
                            <th scope="col">Product Code</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">Family</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Unit Measurement</th>
                            <th scope="col">Minimum Stock</th>
                            <th scope="col">Available Stock</th>
                            <th scope="col">Note</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {/* Dados Grid*/}
                    <tbody id="inventoryGrid"></tbody>
                </table>
            </div>

            <HeaderSearch title='Inventory Movement' />

            {/* Inicio grid*/}
            <table className=" table table-striped ">
                <thead>
                    <tr>
                        <th scope="col">Movement Code</th>
                        <th scope="col">Movement Date</th>
                        <th scope="col">Movement Type</th>
                        <th scope="col">Product Code</th>
                        <th scope="col">Product Description</th>
                        <th scope="col">Family</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Unit Measurement</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Profit Percentage</th>
                        <th scope="col">Note</th>
                        <th scope="col">Status</th>
                        <th scope="col">Movement User</th>
                        <th scope="col">Movement Quantity</th>
                        <th scope="col">Movement Total Value</th>
                        <th scope="col">Profit Percentage</th>
                        <th scope="col">Movement Total Sale Value</th>
                        <th scope="col">Movement Total Profit</th>
                        <th scope="col">updated Inventory Quantity</th>
                        <th scope="col">Updated Inventory Total Value</th>
                        <th scope="col">Updated Inventory Total Sales Value</th>
                        <th scope="col">Updated Inventory Total Profit</th>
                    </tr>
                </thead>
                {/* Dados Grid*/}
                <tbody id="inventoryMovementGrid"></tbody>
            </table>
        </div>

    )
}

export default InventorySearch;