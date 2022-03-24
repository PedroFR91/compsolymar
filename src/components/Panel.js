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
        <MiniCard img={BBDDImg} text='MARCO RETRIBUTIVO' />
      </Link>

      <Link to='/comparador'>
        <MiniCard img={ComparacionImg} text='COMPARADOR' />
      </Link>
      <Link to='/comercial'>
        <MiniCard img={ManImg} text='COMERCIALES' />
      </Link>
      <Link to='/contratos'>
        <MiniCard img={ContractImg} text='CONTRATOS' />
      </Link>

      <Link to='/comisiones'>
        <MiniCard img={ComisionesImg} text='COMISIONES' />
      </Link>
    </div>
  );
}

export default Panel;
