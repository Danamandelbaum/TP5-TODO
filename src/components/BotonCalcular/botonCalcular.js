import React, { useState } from 'react';
import './botonCalcular.css';

const BotonCalcular = ({lista}) => {
    const calcular = () => {
        const tareaMasRapida = lista.filter(t => t.tachado && t.timestampTachado)
        .sort((a, b) => new Date(a.timestampTachado) - new Date(b.timestampTachado))[0];
        if (tareaMasRapida) {
            alert(`La tarea más rápida fue: ${tareaMasRapida.actividad}`);
          } else {
            alert('No hay tareas resueltas para mostrar.');
          }
      }
    return (
    <button onClick = {calcular}>Calcular tarea más rápida</button>
    );
}
export default BotonCalcular;