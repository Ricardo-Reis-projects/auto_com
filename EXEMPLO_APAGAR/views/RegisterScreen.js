import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles/styleScreen.css';

//componentes
import Home from './Home';
import ClientRegister from '../components/Registersforms/ClientRegister';

function RegisterScreen() {
    return (
        <Router>
            <Routes>
                <Route exact path="/register/client" element={<ClientRegister />} />
                <Route exact path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default RegisterScreen;