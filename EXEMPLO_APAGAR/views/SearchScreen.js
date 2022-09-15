import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import '../styles/styleScreen.css';

//componentes
import Home from './Home';
import ClientSearch from '../../i_frontend/src/components/SearchesForms/ClientSearch'
import ClientRegister from '../../i_frontend/src/components/Registersforms/ClientRegister';



function SearchScreen() {
  return (
    <Router>
   
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route exact path="/search/client" element={<ClientSearch />} />        

        <Route exact path="/register/client" element={<ClientRegister />} />

        <Route exact path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default SearchScreen;
