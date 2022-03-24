import React from 'react';
import ComComerciales from '../components/ComComerciales';
import Datos from '../components/Datos';
import Fondo from '../components/Fondo';
import NavBar from '../components/NavBar';

function Comisiones() {
  return (
    <div>
      <NavBar />
      <Fondo />
      <Datos />
      <ComComerciales />
    </div>
  );
}

export default Comisiones;
