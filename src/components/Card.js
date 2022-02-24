import React from 'react';
import foto from '../assets/man.png';
function Card() {
  return (
    <div className='comercial-card'>
      <div className='foto'>
        <img src={foto} alt='' width='100%' className='man' />
      </div>
      <div className='datos'>
        <div>
          <label>Nombre</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Apellidos</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Correo</label>
          <input type='text'></input>
        </div>
        <div>
          <label>Telefono</label>
          <input type='text'></input>
        </div>
      </div>
    </div>
  );
}

export default Card;
