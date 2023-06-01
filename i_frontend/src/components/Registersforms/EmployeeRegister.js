import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function EmployeeRegister() {

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
            <HeaderRegister title="Employee's data"></HeaderRegister>

            <form action='/apiemployee/new' method="POST" className="container mt-3">
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
                        <a href="#tabDataProfisional" className="nav-link" id="linkDataProfisional" data-bs-toggle="tab" role="tab" aria-controls="tabDataProfisional">Data profisional</a>
                    </li>
                    <li className="nav-item " role="presentation">
                        <a href="#tabAdditional" className="nav-link" id="linkAdditional" data-bs-toggle="tab" role="tab" aria-controls="tabAdditional">Additional Information</a>
                    </li>
                    <li className="nav-item " role="presentation">
                        <a href="#tabBank" className="nav-link" id="linkBank" data-bs-toggle="tab" role="tab" aria-controls="tabBank">Bank Account</a>
                    </li>
                </ul>
                {/*Conteudos TAB*/}
                <div className="tab-content bg-light p-4 mb-2" >

                    {/*Div dados Gerais */}
                    <div id="tabGeneral" className="tab-pane fade show active" role="tabpanel" aria-labelledby="linkGeneral">
                        <div className='form-group  mb-2 '>
                            <label>Name</label>
                            <input className="form-control form-control-sm" type="text" id="name" name="name" placeholder="Nome"></input>
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
                                <label>Birth Date</label>
                                <input className='form-control form-control-sm' type='date' id='birthDate' name='birthDate' placeholder='Birth Date'></input>
                            </div>
                        </div>

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>Marital Status</label>
                                <input className="form-control form-control-sm" type="text" id="maritalStatus" name="maritalStatus" placeholder="Marital Status"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>Gender</label>
                                <input className='form-control form-control-sm' type='text' id='gender' name='gender' placeholder='Gender'></input>
                            </div>
                        </div>


                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>RG</label>
                                <input className="form-control form-control-sm" type="number" id="rg" name='rg' placeholder="RG"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>CPF</label>
                                <input className="form-control form-control-sm" type="number" id="cpf" name='cpf' placeholder="CPF"></input>
                            </div>
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

                    {/*Div Data profisional */}
                    <div id="tabDataProfisional" className="tab-pane fade" role="tabpanel" aria-labelledby="linkDataProfisional">

                        <div className='row mb-2'>
                            <div className="form-group col-6">
                                <label>Profession</label>
                                <input className='form-control form-control-sm' type='text' id='profession' name="profession" placeholder="Profession" ></input>
                            </div>

                            <div className="form-group col-6">
                                <label>Hiring date</label>
                                <input className='form-control form-control-sm' type='date' id='hiringDate' name="hiringDate" placeholder="Hiring Date" ></input>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>Work Portfolio</label>
                                <input className='form-control form-control-sm' type='text' id='numberWorkPortfolio' name='numberWorkPortfolio' placeholder='Number Work Portfolio'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Work Portfolio Series</label>
                                <input className='form-control form-control-sm' type='text' id='numberWorkPortfolioSeries' name='numberWorkPortfolioSeries' placeholder='Number Work Portfolio Series'></input>
                            </div>
                        </div>

                        <div className="form-group col-6 mb-2">
                            <label>PIS</label>
                            <input className='form-control form-control-sm' type='text' id='pis' name="pis" placeholder="PIS Number" ></input>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>Wage</label>
                                <input className='form-control form-control-sm' type='text' id='wage' name='wage' placeholder='Wage'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Resignation Date</label>
                                <input className='form-control form-control-sm' type='date' id='resignationDate' name='resignationDate' placeholder='Resignation Date'></input>
                            </div>
                        </div>

                    </div>

                    {/*Div Informações adicionais */}
                    <div id="tabAdditional" className="tab-pane fade" role="tabpanel" aria-labelledby="linkAdditional">

                        <div className='form-group  col-6 mb-2 '>
                            <label>Driver License Category</label>
                            <input className="form-control form-control-sm" type="text" id="driverLicenseCategory" name='driverLicenseCategory' placeholder="Driver License Category"></input>
                        </div>

                        <div className='row mb-4'>
                            <div className='form-group col-6'>
                                <label>Driver License Registration</label>
                                <input className='form-control form-control-sm' type='text' id='driverLicenseRegistration' name='driverLicenseRegistration' placeholder='Driver License Registration'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Expiration Date</label>
                                <input className='form-control form-control-sm' type='date' id='driverLicenseExpirationDate' name='driverLicenseExpirationDate' placeholder='Driver License Expiration Date'></input>
                            </div>
                        </div>

                    </div>

                    {/*Div Bank Account */}
                    <div  id="tabBank"  className="tab-pane fade"role="tabpanel" aria-labelledby="linkBank">

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
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/employee">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default EmployeeRegister;