import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../HeaderRegister';


function SupplierRegister() {

    const [status, setStatus] = useState("ativo");


    //Função executada ao mudar o status do cliente 
    function ChangeColorStatus() {
        let textStatus = document.getElementById("status")
        setStatus(textStatus.value)
    }

    //criação dos hooks effect(useEffect)
    //Mudança de cor com comboboxe status - INATIVO =>VERMERLHO E ATIVO => VERDE
    useEffect(() => {
        let textStatus = document.getElementById("status")
        if (status === "ativo") {
            textStatus.className = "form-select form-select-sm text-success fw-bold fs-6"
        } else if (status === "inativo") {
            textStatus.className = "form-select form-select-sm text-danger fw-bold fs-6"
        }
    }, [status])


    return (
        <div>
            <HeaderRegister title="Supplier's data"></HeaderRegister>
            
            <form action='/apisupplier/new' method="POST" className="container mt-3">
                <div className="row mb-3  ">
                    <div className="form-group col-3 ml-4">
                        <label>Id</label>
                        {/* plaintext => para bloquear preenchimento no id*/}
                        <input className="form-control form-control-sm bg-light text-danger fw-bold fs-6 " type="number" id="id" name="id" placeholder="Id" ></input>
                    </div>

                    <div className="form-group col-3 ">
                        <label>Status</label>
                        <select className="form-select form-select-sm " id="status" name="status" onChange={ChangeColorStatus}>
                            <option className="text-success fw-bold fs-6" value="ativo" >ATIVO</option>
                            <option className="text-danger fw-bold fs-6" value="inativo" >INATIVO</option>
                        </select>
                    </div>
                </div>

                {/*criando NAV TAB */}
                <ul className="nav nav-pills nav-justified bg-light  mb-1  " role="tablist">
                    <li className="nav-item  " role="presentation">
                        <a href="#tabGeneral" className="nav-link active" id="linkGeneral" data-bs-toggle="tab" role="tab" aria-controls="tabGeneral">General</a>
                    </li>
                    <li className="nav-item " role="presentation">
                        <a href="#tabAddress" className="nav-link" id="linkAddress" data-bs-toggle="tab" role="tab" aria-controls="tabAddress">Address</a>
                    </li>
                    <li className="nav-item " role="presentation">
                        <a href="#tabBank" className="nav-link" id="linkBank" data-bs-toggle="tab" role="tab" aria-controls="tabBank">Bank Account</a>
                    </li>
                </ul>
                {/*Conteudos TAB*/}
                <div className="tab-content bg-light p-4 mb-2" >

                    {/*Div dados Gerais */}
                    <div id="tabGeneral" className="tab-pane fade show active" role="tabpanel" aria-labelledby="linkGeneral">

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>Fantasia Name</label>
                                <input className="form-control form-control-sm" type="text" id="fantasiaName" name="fantasiaName" placeholder="Fantasia Name"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>Corporate Name</label>
                                <input className="form-control form-control-sm" type="text" id="corporateName" name="corporateName" placeholder="Corporate Name"></input>
                            </div>
                        </div>

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>Agent Name</label>
                                <input className="form-control form-control-sm" type="text" id="agentName" name="agentName" placeholder="Agent Name"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>Type Supplier</label>
                                <input className="form-control form-control-sm" type="text" id="typeSupplier" name="typeSupplier" placeholder="Type Supplier"></input>
                            </div>
                        </div>

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>Phone</label>
                                <input className="form-control form-control-sm" type="number" id="phone" name="phone" placeholder="Telefone"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>Cell</label>
                                <input className="form-control form-control-sm" type="number" id="cell" name="cell" placeholder="Celular"></input>
                            </div>
                        </div>

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>Email</label>
                                <input className="form-control form-control-sm" type="email" id="email" name="email" placeholder="Email"></input>
                            </div>
                            <div className='form-group col-6 '>
                                <label>Site</label>
                                <input className='form-control form-control-sm' type='text' id='site' name='site' placeholder='Site'></input>
                            </div>
                        </div>

                        <div className='form-group col-6 '>
                            <label>CNPJ</label>
                            <input className="form-control form-control-sm" type="text" id="cnpj" name='cnpj' placeholder="CNPJ"></input>
                        </div>
                    </div>



                    {/*Div endereço */}
                    <div id="tabAddress" className="tab-pane fade" role="tabpanel" aria-labelledby="linkAddress">

                        <div className='row mb-2'>

                            <div className="form-group col-10">
                                <label>Place</label>
                                <input className='form-control form-control-sm' type='text' id='place' name="place" placeholder="Place" ></input>
                            </div>

                            <div className="form-group col-2">
                                <label>Number</label>
                                <input className='form-control form-control-sm' type='number' id='number' name="number" placeholder="Number" ></input>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label>Completion</label>
                            <input className='form-control form-control-sm' type='text' id='completion' name="completion" placeholder="Completion" ></input>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>District</label>
                                <input className='form-control form-control-sm' type='text' id='district' name='district' placeholder='District'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Zip code</label>
                                <input className='form-control form-control-sm' type='number' id='cep' name='cep' placeholder='Cep'></input>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>Country</label>
                                <input className='form-control form-control-sm' type='text' id='country' name='country' placeholder='Country'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>State</label>
                                <select className="form-select form-select-sm" id="state" name='state'>
                                    <option value="" >Selecione...</option>
                                    <option value="sp">SP</option>
                                    <option value="rj">RJ</option>
                                    <option value="es">ES</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/*Div Bank Account */}
                    <div id="tabBank" className="tab-pane fade" role="tabpanel" aria-labelledby="linkBank">

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>Bank Account</label>
                                <input className='form-control form-control-sm' type='text' id='numberBankAccount' name='numberBankAccount' placeholder='Number Bank Account'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Name Bank </label>
                                <input className='form-control form-control-sm' type='text' id='nameBankAccount' name='nameBankAccount' placeholder='Name Bank Account'></input>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>Agency</label>
                                <input className='form-control form-control-sm' type='text' id='agency' name='agency' placeholder='Number Agency'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Account</label>
                                <input className='form-control form-control-sm' type='text' id='account' name='account' placeholder='Number Account'></input>
                            </div>
                        </div>

                        <div className='form-group  col-6 mb-2 '>
                            <label>Type Account</label>
                            <input className="form-control form-control-sm" type="text" id="typeAccount" name='typeAccount' placeholder="Type Account"></input>
                        </div>

                    </div>

                </div>

                {/*Div Botões */}
                <div className='row justify-content-end'>
                    <button className="btn btn-primary col-1 mx-2" type='submit' >Submit</button>
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/supplier">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default SupplierRegister;