import React, { useState } from 'react';
import './botonAgregar.css';
import App from './App.js';

const BotonAgregar = ({lista, setLista}) => {
  const [nuevaActividad, setNuevaActividad] = useState('');
  const loguear = (e) =>{
    setNuevaActividad(e.target.value);
  }
  const agregar = (nuevaActividad) => {
    setLista(
      ...lista,
      {
        actividad,
        tachado: false,
        timestamp: new Date(),
      }
    )
    setNuevaActividad('');
  }

  return (
    <div>
      <input 
        type="text" 
        value={nuevaActividad}
        onChange={loguear}
      />
      <button onClick={agregar}>Agregar</button>
    </div>
  );
}
export default BotonAgregar;