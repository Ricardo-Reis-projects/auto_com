import React from "react";

import {Link} from "react-router-dom"

function Menu() {
    return (
            <nav className="navbar navbar-light bg-white p-3 border-bottom border-2 border-secondary rounded-3 ">
                <div className="container-fluid">

                     {/*Barra Superior */}
                    <div className="d-flex">
                        <button className="btn btn-outline-light border-0 rounded-circle " type="button" data-bs-toggle="offcanvas" data-bs-target="#menuPrincipal" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <h3 className="mx-4  text-muted">AutoCOM</h3>
                    </div>

                     {/*Menu Principal */}
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="menuPrincipal" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Empresa de Mármores e Granitos</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item ">
                                    <Link className="nav-link active "  to="/">Home</Link>
                                   
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" >Orçamentos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"  >Compras</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"  to="/search/client">Clientes</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"  >Produtos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"  >Funcionarios</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" >Parceiros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"  >Fornecedores</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"  >Relatórios</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );
}
export default Menu;
