import React from 'react';

function Row(props) {
  function pickPrincipal() {
    const principal = props.principal;
  }
  return (
    <div className='datarow' onClick={pickPrincipal()}>
      <p className='tipologia'>{props.tipologia}</p>
      <p className='concepto'>{props.concepto}</p>
      <p className='tarifa'>{props.tarifa}</p>
      <p className='principal'>{props.principal}</p>
    </div>
  );
}

export default Row;
