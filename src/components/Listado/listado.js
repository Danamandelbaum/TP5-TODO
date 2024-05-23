import './listado.css';
import React from 'react';
import Tarea from '../Tarea/tarea.js';

export const Listado = ({ setLista, lista }) => {
  return (
    <div>
        {lista.map((t, index) => (
          <Tarea
            index={index}
            tareaIngresada={t.texto}
          />
        ))}
    </div>
  );
}

export default Listado;