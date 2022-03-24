import React, { useState } from 'react';
import general from '../constants/data';
import Row from './Row';
function Datos() {
  // the value of the search field
  const [tipologia, setTipologia] = useState('');

  // the search result
  const [found, setFound] = useState(general);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = general.filter((row) => {
        return row.tipologia.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFound(results);
    } else {
      setFound(general);
      // If the text field is empty, show all users
    }

    setTipologia(keyword);
  };
  return (
    <div className='basededatos'>
      <div className='cabeceradatos'>
        <p>Tipología</p>
        <p>Concepto</p>
        <p>Tarifa</p>
        <p>Principal</p>
      </div>
      <div className='buscaryfiltrar'>
        <input
          type='search'
          value={tipologia}
          onChange={filter}
          className='input'
          placeholder='Introduzca Comercializadora'
        />
      </div>
      <div className='datamap'>
        {found && found.length > 0 ? (
          general.map((row) => (
            <Row
              key={row.tipologia}
              tipologia={row.tipologia}
              concepto={row.concepto}
              tarifa={row.tarifa}
              principal={row.principal}
            />
          ))
        ) : (
          <h1>No existen resultados</h1>
        )}
      </div>
    </div>
  );
}

export default Datos;
