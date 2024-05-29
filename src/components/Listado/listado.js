import React from 'react';
import './listado.css';
import Tarea from '../Tarea/tarea.js';

const Listado = ({lista, setLista}) => {
  return (
    <ul>
      {lista.map(t => (
        <Tarea
          actividad = {t.actividad}
          tachado = {t.tachado}
          fechaCreacion = {new Date(t.timestamp).toString()}
          lista = {lista}
          setLista={setLista}
        />
      ))}
    </ul>

  );
}
export default Listado;