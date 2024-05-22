import React, { useState } from 'react';

function Input({ setLista, lista }) {
  
  

  return (
    <div>
    <input type="text" placeholder="Agregar un TO DO"/>
    <button type="submit">Agregar</button>
    <button>Tarea más rapida</button>
    </div>
  );
}

export default Input;