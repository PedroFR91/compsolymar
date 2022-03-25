import React from 'react';
import Logo from './Logo';
import LogoCom from './LogoCom';
function Comparativa() {
  return (
    <div className='comparativa'>
      <div className='dina4'>
        <div className='cabecera'>
          <div class='logocabecera'>
            <Logo />
          </div>
          <div class='logocomer'>
            <LogoCom />
          </div>
          <div class='detalles'>
            <div className='left'>
              <div>Fecha de oferta:</div>
              <div>Tipo de Tarifa:</div>
              <div>Nombre de Tarifa:</div>
            </div>
            <div className='right'>
              <div>Potencia Contratada:</div>
              <div>Días de Factura:</div>
              <div>Consumo:</div>
            </div>
          </div>
          <div className='cliente'>Cliente:</div>
        </div>

        <div className='potencia'>
          <div className='cabecerapotencias'>
            <p>Término de Potencia</p>
            <p>Potencia</p>
            <p>Días</p>
            <p>Precio</p>
            <p>Total</p>
          </div>
          <div className='potencias'>
            <p>P1</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='potencias'>
            <p>P2</p>
            <p>0 </p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='potencias'>
            <p>P3</p>
            <p>0 </p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='potencias'>
            <p>P4</p>
            <p>0 </p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='potencias'>
            <p>P5</p>
            <p>0 </p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='potencias'>
            <p>P6</p>
            <p>0 </p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
        </div>
        <div className='energia'>
          <div className='cabeceraenergias'>
            <p>Consumo:</p>
            <p>Potencia</p>
            <p>Días</p>
            <p>Precio</p>
            <p>Total</p>
          </div>
          <div className='energias'>
            <p>P1</p>
            <p>0 </p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='energias'>
            <p>P2</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='energias'>
            <p>P3</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='separador'></div>
          <div className='energias'>
            <p>Otros Gastos</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='energias'>
            <p>Impuesto Eléctrico</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='energias'>
            <p>Alquiler Equipos</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className='energias'>
            <p>IVA (10%)</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
        </div>
        <div className='oferta'></div>
      </div>
    </div>
  );
}

export default Comparativa;
