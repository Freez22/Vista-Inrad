import React from 'react';
//import React, {useStates} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../Paginas/Login.js';
import '../css/App.css';



function Ruta() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />}/>
        </Routes>    
    </BrowserRouter>
  );
}


/*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          editar
        </p>
      </header>
    </div>
*/
export default Ruta;
