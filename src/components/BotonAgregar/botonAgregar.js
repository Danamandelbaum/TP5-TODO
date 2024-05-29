import React, { useState } from 'react';
import './botonAgregar.css';

const BotonAgregar = ({lista, setLista}) => {
  const [nuevaActividad, setNuevaActividad] = useState('');
  const loguear = (e) =>{
    setNuevaActividad(e.target.value);
  }
  const agregar = () => {
    setLista(
      [
      ...lista,
      {
        actividad: nuevaActividad,
        tachado: false,
        timestamp: new Date(),
      }
      ]
    )
    setNuevaActividad('');
  }

  return (
    <div>
      <input 
        type="text" 
        onChange={loguear}
      />
      <button onClick={agregar}>Agregar</button>
    </div>
  );
}
export default BotonAgregar;