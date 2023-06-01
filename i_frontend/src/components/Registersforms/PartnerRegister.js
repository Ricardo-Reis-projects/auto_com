import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function PartnerRegister() {

    const [status, setStatus] = useState("ativo");

    //Função executada ao mudar o status do parceiro 
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
            <HeaderRegister title="Partner's data"></HeaderRegister>

            <form action='/apipartner/new' method="POST" className="container mt-3">
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
                                <label>Site</label>
                                <input className="form-control form-control-sm" type="text" id="site" name="site" placeholder="Site"></input>
                            </div>
                        </div>

                    </div>

                    {/*Div endereço */}
                    <div id="tabAddress" className="tab-pane fade" role="tabpanel" aria-labelledby="linkAddress">

                        <div className='row mb-2'>

                            <div className="form-group col-10">
                                <label>Place</label>
                                <input className='form-control form-control-sm' type='text' id='place' name="place" placeholder="Logradouro" ></input>
                            </div>

                            <div className="form-group col-2">
                                <label>Number</label>
                                <input className='form-control form-control-sm' type='number' id='number' name="number" placeholder="Número" ></input>
                            </div>
                        </div>

                        <div className="form-group mb-2">
                            <label>Completion</label>
                            <input className='form-control form-control-sm' type='text' id='completion' name="completion" placeholder="Complemento" ></input>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>District</label>
                                <input className='form-control form-control-sm' type='text' id='district' name='district' placeholder='Bairro'></input>
                            </div>

                            <div className='form-group col-6'>
                                <label>Zip Code</label>
                                <input className='form-control form-control-sm' type='text' id='cep' name='cep' placeholder='Cep'></input>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='form-group col-6'>
                                <label>Country</label>
                                <input className='form-control form-control-sm' type='text' id='country' name='country' placeholder='Municipio'></input>
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
                </div>

                {/*Div Botões */}
                <div className='row justify-content-end'>
                    <button className="btn btn-primary col-1 mx-2" type='submit' >Submit</button>
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/partner">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default PartnerRegister;