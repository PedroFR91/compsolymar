import React from 'react';
import Logo from './Logo';
import LogoCom from './LogoCom';
import logo from '../assets/endesa.png';

function Comparativa() {
  const getInput = (e) => {};
  return (
    <div className='comparativa'>
      <div className='dina4'>
        <div className='cabecera'>
          <div className='logocabecera'>
            <Logo />
          </div>
          <div class='logocomer'>
            <img src={logo} alt='' />
          </div>
          <div class='detalles'>
            <div className='left'>
              <div>
                Fecha de oferta: <input type='date' name='' id='' />
              </div>
              <div>
                Tipo de Tarifa:{' '}
                <select name='tarifa' id=''>
                  <option value='2.0'>2.0</option>
                  <option value='3.0'>3.0</option>
                </select>
              </div>
              <div>
                Nombre de Tarifa:
                <input type='text' name='nt' id='' />
              </div>
              <div className='cliente'>
                Cliente: <input type='text' name='cliente' id='cliente' />
              </div>
            </div>
            <div className='right'>
              <div>
                Potencia Contratada: <input type='text' name='pt' id='' />
              </div>
              <div>
                Días de Factura:
                <input type='number' name='df' id='df' onChange={getInput} />
              </div>
              <div>
                Consumo:
                <input type='text' name='consumo' id='' />
              </div>
            </div>
          </div>
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
        <div className='oferta'>
          <div>Actualmente paga: </div>
          <div>Nueva oferta:</div>
          <div>Ahorro mensual:</div>
          <div>Ahorro anual:</div>
        </div>
      </div>
    </div>
  );
}

export default Comparativa;
