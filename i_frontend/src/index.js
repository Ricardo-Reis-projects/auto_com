import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../src/styles/styleScreen.css';

//componentes
import Home from './components/Home';
import ClientSearch from '../../i_frontend/src/components/SearchesForms/ClientSearch'
import ClientRegister from '../../i_frontend/src/components/Registersforms/ClientRegister';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route exact path="/" element={<Home />} />

        <Route  path="/search/client" element={<ClientSearch />} />

        <Route  path="/register/client" element={<ClientRegister />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
