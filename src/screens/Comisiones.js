import React from 'react';
import ComComerciales from '../components/ComComerciales';
import Datos from '../components/Datos';
import Fondo from '../components/Fondo';
import NavBar from '../components/NavBar';

function Comisiones() {
  return (
    <div>
      <Fondo />
      <NavBar />
      <Datos />
      <ComComerciales />
    </div>
  );
}

export default Comisiones;
