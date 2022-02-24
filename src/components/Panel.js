import React from 'react';

import { Link } from 'react-router-dom';

import MiniCard from './MiniCard';
import BBDDImg from '../assets/bbdd.png';
import ManImg from '../assets/man.png';
import ContractImg from '../assets/contract.png';
import ComisionesImg from '../assets/comisiones.png';
import ComparacionImg from '../assets/comparacion.png';

function Panel() {
  return (
    <div className='panel'>
      <Link to='/basededatos'>
        <MiniCard img={BBDDImg} text='Actualizar BBDD' />
      </Link>

      <Link to='/comparador'>
        <MiniCard img={ComparacionImg} text='Generar Comparativa' />
      </Link>
      <Link to='/comercial'>
        <MiniCard img={ManImg} text='Alta Comercial' />
      </Link>
      <Link to='/contratos'>
        <MiniCard img={ContractImg} text='Ver Contratos' />
      </Link>

      <Link to='/comisiones'>
        <MiniCard img={ComisionesImg} text='Comisiones' />
      </Link>
    </div>
  );
}

export default Panel;
