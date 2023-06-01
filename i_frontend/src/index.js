import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/styles/styleScreen.css';

//componentes
import Home from './components/Home';

import CustomerSearch from '../../i_frontend/src/components/SearchesForms/CustomerSearch';
import CustomerRegister from '../../i_frontend/src/components/Registersforms/CustomerRegister';

import EmployeeSearch from '../../i_frontend/src/components/SearchesForms/EmployeeSearch';
import EmployeeRegister from '../../i_frontend/src/components/Registersforms/EmployeeRegister';

import SupplierSearch from '../../i_frontend/src/components/SearchesForms/SupplierSearch';
import SupplierRegister from '../../i_frontend/src/components/Registersforms/SupplierRegister';

import FreightSearch from '../../i_frontend/src/components/SearchesForms/FreightSearch';
import FreightRegister from '../../i_frontend/src/components/Registersforms/FreightRegister';

import ExpenseSearch from '../../i_frontend/src/components/SearchesForms/ExpenseSearch';
import ExpenseRegister from '../../i_frontend/src/components/Registersforms/ExpenseRegister';

import PartnerSearch from '../../i_frontend/src/components/SearchesForms/PartnerSearch';
import PartnerRegister from '../../i_frontend/src/components/Registersforms/PartnerRegister';

import ProductSearch from '../../i_frontend/src/components/SearchesForms/ProductSearch';
import ProductRegister from '../../i_frontend/src/components/Registersforms/ProductRegister';

import InventorySearch from '../../i_frontend/src/components/SearchesForms/InventorySearch';
import InventoryRegister from '../../i_frontend/src/components/Registersforms/InventoryRegister';

import UserSearch from '../../i_frontend/src/components/SearchesForms/UserSearch';
import UserRegister from '../../i_frontend/src/components/Registersforms/UserRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />
        
        <Route  path="/search/customer" element={<CustomerSearch />} />
        <Route  path="/register/customer" element={<CustomerRegister />} />

        <Route path="/search/employee" element={<EmployeeSearch />} />
        <Route path="/register/employee" element={<EmployeeRegister />} />

        <Route path="/search/supplier" element={<SupplierSearch />} />
        <Route path="/register/supplier" element={<SupplierRegister />} />

        <Route path="/search/freight" element={<FreightSearch />} />
        <Route path="/register/freight" element={<FreightRegister />} />

        <Route path="/search/expense" element={<ExpenseSearch />} />
        <Route path="/register/expense" element={<ExpenseRegister />} />

        <Route path="/search/partner" element={<PartnerSearch />} />
        <Route path="/register/partner" element={<PartnerRegister />} />

        <Route path="/search/product" element={<ProductSearch />} />
        <Route path="/register/product" element={<ProductRegister />} />

        <Route path="/search/inventory" element={<InventorySearch />} />
        <Route path="/register/inventory" element={<InventoryRegister />} />

        <Route path="/search/user" element={<UserSearch />} />
        <Route path="/register/user" element={<UserRegister />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
