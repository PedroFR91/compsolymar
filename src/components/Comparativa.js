import React from 'react';

function Comparativa() {
  return (
    <div className='comparativa'>
      <div className='left'>
        <h1>Comparativa</h1>
        <div className='datoscomparativa'></div>
      </div>
      <div className='right'>
        <h1>Datos de la Factura</h1>
        <div className='datoscomparativa'>
          <div className='fecha containercomp'>
            <label for='fecha'>Fecha</label>
            <input type='text' name='fecha' id='fecha' />
          </div>
          <div className='nombrecliente containercomp'>
            <label for='nombre'>Nombre Cliente</label>
            <input type='text' name='nombre' id='nombre' />
          </div>
          <div className='tarifa containercomp'>
            <label for='tarifa'>Tarifa</label>
            <input type='text' name='tarifa' id='tarifa' />
          </div>
          <div className='potencia containercomp'>
            <label for='P1'>P1</label>
            <input type='text' name='p1' id='p1' className='potencias' />
            <label for='P2'>P2</label>
            <input type='text' name='p2' id='p2' className='potencias' />
            <label for='P3'>P3</label>
            <input type='text' name='p3' id='p3' className='potencias' />
          </div>
          <div className='dias containercomp'>
            <label for='dias'>Días facturados</label>
            <input type='text' name='dias' id='dias' className='diasf' />
          </div>
          <div className='consumo containercomp'>
            <label for='consumo'>Consumo</label>
            <input
              type='text'
              name='consumo'
              id='consumo'
              className='consumos'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comparativa;
