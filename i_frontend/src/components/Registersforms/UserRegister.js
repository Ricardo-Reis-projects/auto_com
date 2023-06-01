import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import HeaderRegister from '../../components/HeaderRegister';


function UserRegister() {

    const [status, setStatus] = useState("ativo");

    //Função executada ao mudar o status do usuario 
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
            <HeaderRegister title="User's data"></HeaderRegister>

            <form action='/apiuser/new' method="POST" className="container mt-3">
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

                    <div className="form-group mb-2">
                        <label>User Name</label>
                        <input className='form-control form-control-sm' type='text' id='userName' name="userName" placeholder="User Name" ></input>
                    </div>

                    <div className="form-group mb-2">
                        <label>User</label>
                        <input className='form-control form-control-sm' type='text' id='user' name="user" placeholder="User" ></input>
                    </div>

                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input className='form-control form-control-sm' type='text' id='password' name="password" placeholder="Password" ></input>
                    </div>

                    <div className="form-group mb-2">
                        <label>Access Level</label>
                        <input className='form-control form-control-sm' type='text' id='accessLevel' name="accessLevel" placeholder="Access Level" ></input>
                    </div>
                </div>

                {/*Div Botões */}
                <div className='row justify-content-end'>
                    <button className="btn btn-primary col-1 mx-2" type='submit' >Submit</button>
                    <Link className="btn btn-secondary col-1 mx-2" type='button' to="/search/user">Return</Link>
                </div>

            </form>
        </div>
    );
}

export default UserRegister;