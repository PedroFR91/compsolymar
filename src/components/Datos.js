import React from 'react';
import general from '../constants/data';
import Row from './Row';

function Datos() {
  return (
    <>
      <div className='basededatos'>
        <div className='cabeceradatos'>
          <p>Comercializadora:</p>
          <p>Nombre de Tarifa:</p>
          <p>Tarifa</p>
          <p>Comisión Principal</p>
        </div>

        <div className='datamap'>
          {general.map((row, index) => (
            <Row
              key={index}
              tipologia={row.tipologia}
              concepto={row.concepto}
              tarifa={row.tarifa}
              principal={row.principal}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Datos;
