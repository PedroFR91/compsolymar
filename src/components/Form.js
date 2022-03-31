import React from 'react';

function Form() {
  return (
    <form className='inputForm'>
      <div>
        <label>Fecha de oferta:</label>
        <input type='date' name='' id='' />
      </div>
      <div>
        <label>Tipo de Tarifa:</label>
        <select name='tarifa' id=''>
          <option value='2.0'>2.0</option>
          <option value='3.0'>3.0</option>
        </select>
      </div>
      <div>
        <label>Nombre:</label>

        <input type='text' name='nt' id='' />
      </div>
      <div className='cliente'>
        <label>Nombre Cliente:</label>
        <input type='text' name='cliente' id='cliente' />
      </div>
      <div>
        <label>Potencia Contratada: </label>
        <input type='text' name='pt' id='' />
      </div>
      <div>
        <label>Días de Factura:</label>

        <input type='number' name='df' id='df' />
      </div>
      <div>
        <label>Consumo:</label>
        <div className='consumos'>
          <div>
            <label>P1:</label>
            <input type='text' name='consumo' id='' />
          </div>
          <div>
            <label>P2:</label>
            <input type='text' name='consumo' id='' />
          </div>
          <div>
            <label>P3:</label>
            <input type='text' name='consumo' id='' />
          </div>
        </div>
      </div>
      <div>
        <label>Comercializadora:</label>

        <select name='comercializadora' id=''>
          <option value='endesa'>ENDESA</option>
          <option value='iberdrola'>IBERDROLA</option>
          <option value='naturgy'>NATURGY</option>
          <option value='plenitude'>PLENITUDE</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
