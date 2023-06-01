import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function FreightRegister() {

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
            <HeaderRegister title="Freight's data"></HeaderRegister>

            <form action='/apifreight/new' method="POST" className="container mt-3">
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


                {/*Conteudos*/}
                <div className="bg-light p-4 mb-2" >

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>City</label>
                                <input className="form-control form-control-sm" type="text" id="city" name="city" placeholder="City"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>State</label>
                                <input className="form-control form-control-sm" type="text" id="state" name="state" placeholder="State"></input>
                            </div>
                        </div>

                        <div className="row mb-2" >
                            <div className='form-group col-6 '>
                                <label>Country</label>
                                <input className="form-control form-control-sm" type="text" id="country" name="country" placeholder="Country"></input>
                            </div>

                            <div className='form-group col-6 '>
                                <label>Unitary Value</label>
                                <input className="form-control form-control-sm" type="text" id="unitaryValue" name="unitaryValue" placeholder="Unitary Value"></input>
                            </div>
                        </div>                    
                </div>

                {/*Div Botões */}
                <div className='row justify-content-end'>
                    <button className="btn btn-primary col-1 mx-2" type='submit' >Submit</button>
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/freight">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default FreightRegister;