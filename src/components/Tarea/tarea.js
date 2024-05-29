import React from 'react';
import './tarea.css';

const Tarea = ({actividad, tachado, fechaCreacion, lista, setLista}) => {
  const estiloTachado = tachado ? 'tachado' : '';
  const tachar = () => {
    setLista(
      lista.map(t => 
        t.actividad === actividad ? 
        {
          ...t,
          tachado: !t.tachado
        } : t
    )
    );
  }
  
  return (
    <li onClick={tachar} className={estiloTachado}>
      {actividad} - Creado: {fechaCreacion}
    </li>
  );
}
export default Tarea;