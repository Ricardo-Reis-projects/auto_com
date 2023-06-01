import React from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function ExpenseRegister() {

    return (
        <div>
            <HeaderRegister title="Expense's data"></HeaderRegister>

            <form action='/apiexpense/new' method="POST" className="container mt-3">

                <div className="form-group col-3 ml-4 mb-3">
                    <label>Id</label>
                    {/* plaintext => para bloquear preenchimento no id*/}
                    <input className="form-control form-control-sm bg-light text-danger fw-bold fs-6 " type="number" id="id" name="id" placeholder="Id" ></input>
                </div>


                {/*Conteudos*/}
                <div className="bg-light p-4 mb-2" >

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Issuance Date</label>
                            <input className="form-control form-control-sm" type="date" id="issuanceDate" name="issuanceDate" placeholder="Issuance Date"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>type</label>
                            <input className="form-control form-control-sm" type="text" id="type" name="type" placeholder="Type"></input>
                        </div>
                    </div>

                    <div className="row mb-2" >
                        <div className='form-group col-6 '>
                            <label>Description</label>
                            <input className="form-control form-control-sm" type="text" id="description" name="description" placeholder="Description"></input>
                        </div>

                        <div className='form-group col-6 '>
                            <label>Value</label>
                            <input className="form-control form-control-sm" type="text" id="value" name="value" placeholder="Value"></input>
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
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/expense">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default ExpenseRegister;