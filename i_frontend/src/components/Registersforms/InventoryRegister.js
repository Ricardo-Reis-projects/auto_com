import React from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function InventoryRegister() {

    return (
        <div>
            <HeaderRegister title="Inventory's data"></HeaderRegister>

            <form action='/apiinventory/new' method="POST" className="container mt-3">

                <div className="row mb-3  ">
                    <div className="form-group col-3 ml-4">
                        <label>Id</label>
                        {/* plaintext => para bloquear preenchimento no id*/}
                        <input className="form-control form-control-sm bg-light text-danger fw-bold fs-6 " type="number" id="id" name="id" placeholder="Id" ></input>
                    </div>
                </div>

                {/*Conteudos */}
                <div className="bg-light p-4 mb-2" >

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Movement Date</label>
                            <input className="form-control form-control-sm" type="date" id="movementDate" name="movementDate" placeholder="Movement Date"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Movement Type</label>
                            <input className="form-control form-control-sm" type="text" id="movementType" name="movementType" placeholder="Movement Type"></input>
                        </div>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-4 '>
                            <label>Product Code</label>
                            <input className="form-control form-control-sm" type="text" id="productCode" name="productCode" placeholder="Product Code"></input>
                        </div>

                        <div className='form-group col-8 '>
                            <label>Product Description</label>
                            <input className="form-control form-control-sm" type="text" id="productDescription" name="productDescription" placeholder="Product Description"></input>
                        </div>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Family</label>
                            <input className="form-control form-control-sm" type="text" id="family" name="family" placeholder="Family"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Brand</label>
                            <input className="form-control form-control-sm" type="text" id="brand" name="brand" placeholder="Brand"></input>
                        </div>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Unit Measurement</label>
                            <input className="form-control form-control-sm" type="text" id="unitMeasurement" name="unitMeasurement" placeholder="Unit Measurement"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Movement Quantity</label>
                            <input className="form-control form-control-sm" type="text" id="movementQuantity" name="movementQuantity" placeholder="Movement Quantity"></input>
                        </div>
                    </div>

                    <div className="form-group mb-2">
                        <label>Note</label>
                        <input className='form-control form-control-sm' type='text' id='note' name="note" placeholder="Note" ></input>
                    </div>

                </div>

                {/*Div Botões */}
                <div className='row justify-content-end'>
                    <button className="btn btn-primary col-1 mx-2" type='submit' >Submit</button>
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/inventory">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default InventoryRegister;