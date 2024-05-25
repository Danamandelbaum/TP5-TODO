import React from 'react';
import './listado.css';
import Tarea from '../Tarea/tarea.js';

const Listado = ({lista}) => {
  return (
    <ul>
      {lista.map(t => (
        <Tarea
          actividad = {t.actividad}
          tachado = {t.tachado}
          fechaCreacion = {new Date(t.timestamp).toString()}
        />
      ))}
    </ul>

  );
}
export default Listado;