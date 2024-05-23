import './App.css';
import React, { useState } from 'react';
import Input from './components/Input/input.js';
import Listado from './components/Listado/listado.js';

function App() {
  const [lista, setLista] = useState([]);
  return (
    <div>
    <Input setLista = {setLista} lista = {lista} />
    <Listado setLista = {setLista} lista = {lista} />
    </div>
  );
}

export default App;
