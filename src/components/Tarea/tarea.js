import React from 'react';
import './tarea.css';
import App from './App.js';

const Tarea = ({actividad, tachado, fechaCreacion, lista, setLista}) => {
  const estiloTachado = tachado ? 'tachado' : '';
  const tachar = (actividad) => {
    setLista(lista.map(t => 
      t.actividad === actividad ? {tachado: !t.tachado} : t
    ));
  }
  
  return (
    <li onClick={tachar} className={estiloTachado}>
      {actividad} - Creado: {fechaCreacion}
    </li>
  );
}
export default Tarea;