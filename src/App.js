import React, { useState } from 'react';
import Listado from './components/Listado/listado.js';
import BotonAgregar from './components/BotonAgregar/botonAgregar.js';
import BotonCalcular from './components/BotonCalcular/botonCalcular.js';
import './App.css';

const App = () => {
  const [lista, setLista] = useState([]);
  return (
    <div className="App">
      <BotonAgregar lista={lista} setLista={setLista}/>
      <Listado lista={lista}  setLista={setLista}/>
      <BotonCalcular lista={lista}/>
    </div>
  );
};

export default App;
