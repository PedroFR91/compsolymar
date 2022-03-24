import React from 'react';
import Datos from '../components/Datos';
import Fondo from '../components/Fondo';
import NavBar from '../components/NavBar';

function BaseDatos(props) {
  return (
    <div>
      <Fondo />
      <NavBar />
      <Datos />
    </div>
  );
}

export default BaseDatos;
