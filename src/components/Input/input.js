import React, { useState } from 'react';

function Input() {
  
  const [tarea, setTarea] = useState({});
  const [lista, setLista] = useState([]);
  const loguear = (e) => {
    setTarea(e.target.value);
    }
    const agregarTarea = (e) => {
          
          e.actividad = tarea;
          e.tachado = false;
          e.timestamp = new Date();
          e.timestampTachado = null;
        
      setLista(
        [
            ...lista,
          e.actividad
        ]
    )
      }
      lista.forEach(l => {
        let tachado = "";
        let fechaCreacion = new Date(l.timestamp).toString();
        if (l.tachado) {
            tachado = "text-decoration: line-through";
        }
        /* ALGO*/ += `<li onClick="tachar('${l.actividad}')" style="${tachado}">${l.actividad} - Creado: ${fechaCreacion}</li>`;
    });

    const tachar = (actividad) => {
      const tarea = lista.find(l => l.actividad === actividad);
      if (tarea) {
          tarea.tachado = !tarea.tachado;
          tarea.timestampTachado = new Date();
      }
  }

    const calcularTareaMasRapida = () => {
      let tareaMasRapida = lista.filter(t => t.tachado && t.timestampTachado !== null).sort((a, b) => a.timestampTachado - b.timestampTachado)[0];
    if (tareaMasRapida) {
        alert(`La tarea más rápida fue: ${tareaMasRapida.actividad}`);
    } else {
        alert("No hay tareas resueltas para mostrar.");
    }
    
        }

  return (
    <div>
    <input type="text" onChange={loguear} placeholder="Agregar un TO DO"/>
    
    <button onClick={agregarTarea}>Agregar</button>
    <ul>
        {lista.map(t => <li>{t}</li> ) }
    </ul>
    <button onClick={calcularTareaMasRapida}>Tarea más rapida</button>
    </div>
  );
}

export default Input;