import React from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function ProductRegister() {

    return (
        <div>
            <HeaderRegister title="Products's data"></HeaderRegister>

            <form action='/apiproduct/new' method="POST" className="container mt-3">
                <div className="row mb-3  ">
                    <div className="form-group col-3 ml-4">
                        <label>Id</label>
                        {/* plaintext => para bloquear preenchimento no id*/}
                        <input className="form-control form-control-sm bg-light text-danger fw-bold fs-6 " type="number" id="id" name="id" placeholder="Id" ></input>
                    </div>
                </div>


                {/*Conteudos*/}
                <div className="bg-light p-4 mb-2" >

                    <div className='form-group mb-2 '>
                        <label>Description</label>
                        <input className="form-control form-control-sm" type="text" id="description" name="description" placeholder="Description"></input>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Price Cost</label>
                            <input className="form-control form-control-sm" type="text" id="priceCost" name="priceCost" placeholder="Price Cost"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Profit Percentage</label>
                            <input className="form-control form-control-sm" type="text" id="profitPercentage" name="profitPercentage" placeholder="Profit Percentage"></input>
                        </div>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Sale Price</label>
                            <input className="form-control form-control-sm" type="text" id="salePrice" name="salePrice" placeholder="Sale Price"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Profit Value</label>
                            <input className="form-control form-control-sm" type="text" id="profitValue" name="profitValue" placeholder="Profit Value"></input>
                        </div>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Brand</label>
                            <input className="form-control form-control-sm" type="text" id="brand" name="brand" placeholder="Brand"></input>
                        </div>
                    
                        <div className='form-group col-6 '>
                            <label>Type</label>
                            <input className="form-control form-control-sm" type="text" id="type" name="type" placeholder="Type"></input>
                        </div>
                    </div>

                    <div className="form-group mb-2">
                        <label>Supplier</label>
                        <input className='form-control form-control-sm' type='text' id='supplier' name="supplier" placeholder="Supplier" ></input>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Unit of Measurement</label>
                            <input className="form-control form-control-sm" type="text" id="unitMeasurement" name="unitMeasurement" placeholder="Unit of Measurement"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Minimum Stock</label>
                            <input className="form-control form-control-sm" type="text" id="minimumStock" name="minimumStock" placeholder="Minimum Stock"></input>
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
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/product">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default ProductRegister;