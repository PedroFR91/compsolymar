import React, { useRef, useState } from 'react';
import Logo from './Logo';
import logo from '../assets/iberdrola.png';
import jsPDF from 'jspdf';
function Comparativa() {
  const [cliente, setCliente] = useState('');
  const [tarifa, setTarifa] = useState('');
  const [tipotarifa, setTipotarifa] = useState('');
  const [dias, setDias] = useState('');
  const [fecha, setFecha] = useState('');
  const [potencia1, setPotencia1] = useState('');
  const [potencia2, setPotencia2] = useState('');
  const [potencia3, setPotencia3] = useState('');
  const [potencia4, setPotencia4] = useState('');
  const [potencia5, setPotencia5] = useState('');
  const [potencia6, setPotencia6] = useState('');
  const [terpot, setTerpot] = useState('');
  const [con, setCon] = useState('');
  const [potcon1, setPotcon1] = useState('');
  const [potcon2, setPotcon2] = useState('');
  const [potcon3, setPotcon3] = useState('');
  const [actual, setActual] = useState('');
  const alq = 1;
  const pdfRef = useRef(null);

  const handleDownload = () => {
    const content = pdfRef.current;

    const doc = new jsPDF();
    doc.html(content, {
      callback: function (doc) {
        doc.save('oferta.pdf');
      },
      html2canvas: { scale: 0.25 },
    });
  };
  return (
    <>
      <div className='comparativa'>
        <form className='inputForm'>
          <div>
            <label>Fecha de oferta:</label>
            <input type='date' onChange={(e) => setFecha(e.target.value)} />
          </div>
          <div>
            <label>Tipo de Tarifa:</label>
            <select
              name='tarifa'
              className='tarifa'
              id=''
              onChange={(e) => setTipotarifa(e.target.value)}
            >
              <option value='2.0'>2.0</option>
              <option value='3.0'>3.0</option>
              <option value='6.0'>6.0</option>
            </select>
          </div>
          <div>
            <label>Nombre Tarifa:</label>
            <input
              type='text'
              name='nt'
              onChange={(e) => setTarifa(e.target.value)}
            />
          </div>
          <div className='cliente'>
            <label>Nombre Cliente:</label>
            <input
              type='text'
              name='cliente'
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
          <div className='potenciacon'>
            <label>Potencia Contratada: </label>
            <div>
              <label>P1:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon1(e.target.value)}
              />
            </div>
            <div>
              <label>P2:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon2(e.target.value)}
              />
            </div>
            <div>
              <label>P2:</label>
              <input
                type='text'
                name='pt'
                id=''
                onChange={(e) => setPotcon3(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label>Días de Factura:</label>
            <input type='number' onChange={(e) => setDias(e.target.value)} />
          </div>
          <div>
            <label>Consumo:</label>
            <div className='consumos'>
              <div>
                <label>P1:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia1(e.target.value)}
                />
              </div>
              <div>
                <label>P2:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia2(e.target.value)}
                />
              </div>
              <div>
                <label>P3:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia3(e.target.value)}
                />
              </div>
              <div>
                <label>P4:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia4(e.target.value)}
                />
              </div>
              <div>
                <label>P5:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia5(e.target.value)}
                />
              </div>
              <div>
                <label>P6:</label>
                <input
                  type='text'
                  name='consumo'
                  id=''
                  onChange={(e) => setPotencia6(e.target.value)}
                />
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
          <div>
            <label>Precio término de potencia:</label>
            <input type='text' onChange={(e) => setTerpot(e.target.value)} />
          </div>
          <div>
            <label>Precio consumo:</label>
            <input type='text' onChange={(e) => setCon(e.target.value)} />
          </div>
          <div>
            <label>Paga actualmente::</label>
            <input type='text' onChange={(e) => setActual(e.target.value)} />
          </div>
        </form>
        <div className='dina4' ref={pdfRef}>
          <div className='cabecera'>
            <div className='logocabecera'>
              <Logo />
            </div>
            <div class='logocomer'>
              <img src={logo} alt='' />
            </div>
            <div class='detalles'>
              <div className='left'>
                <div>Fecha de oferta:{fecha}</div>
                <div>Tipo de Tarifa:{' ' + tipotarifa}</div>
                <div>Nombre de Tarifa: {' ' + tarifa}</div>
                <div>Nombre Cliente:{' ' + cliente} </div>
              </div>
              <div className='right'>
                <div>Potencia Contratada:</div>
                <div>Días de Factura:{dias}</div>
                <div>Consumo:</div>
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
              <p>{potencia1}</p>
              <p>{dias}</p>
              <p>{terpot}</p>
              <p>{potencia1 * dias * terpot}</p>
            </div>
            <div className='potencias'>
              <p>P2</p>
              <p>{potencia2} </p>
              <p>{dias}</p>
              <p>{terpot}</p>
              <p>{potencia2 * dias * terpot}</p>
            </div>
            <div className='potencias'>
              <p>P3</p>
              <p>{potencia3} </p>
              <p>{dias}</p>
              <p>{terpot}</p>
              <p>{potencia3 * dias * terpot}</p>
            </div>
            <div className='potencias'>
              <p>P4</p>
              <p>{potencia4} </p>
              <p>{dias}</p>
              <p>{terpot}</p>
              <p>{potencia4 * dias * terpot}</p>
            </div>
            <div className='potencias'>
              <p>P5</p>
              <p>{potencia5} </p>
              <p>{dias}</p>
              <p>{terpot}</p>
              <p>{potencia5 * dias * terpot}</p>
            </div>
            <div className='potencias'>
              <p>P6</p>
              <p>{potencia6} </p>
              <p>{dias}</p>
              <p>{terpot}</p>
              <p>{potencia6 * dias * terpot}</p>
            </div>
            <div className='potencias'>
              <p></p>
              <p> </p>
              <p></p>
              <p>TOTAL</p>
              <p>
                {potencia1 * dias * terpot +
                  potencia2 * dias * terpot +
                  potencia3 * dias * terpot +
                  potencia4 * dias * terpot +
                  potencia5 * dias * terpot +
                  potencia6 * dias * terpot}
              </p>
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
              <p>{potcon1} </p>
              <p>{dias}</p>
              <p>{con}</p>
              <p>{potcon1 * dias * con}</p>
            </div>
            <div className='energias'>
              <p>P2</p>
              <p>{potcon2}</p>
              <p>{dias}</p>
              <p>{con}</p>
              <p>{potcon2 * dias * con}</p>
            </div>
            <div className='energias'>
              <p>P3</p>
              <p>{potcon3}</p>
              <p>{dias}</p>
              <p>{con}</p>
              <p>{potcon3 * dias * con}</p>
            </div>
            <div className='energias'>
              <p></p>
              <p></p>
              <p></p>
              <p>TOTAL</p>
              <p>
                {potcon1 * dias * con +
                  potcon2 * dias * con +
                  potcon3 * dias * con}
              </p>
            </div>
            <div className='separador'></div>
            <div className='energias'>
              <p>Otros Gastos</p>

              <p></p>
              <p></p>
              <p></p>
              <p>0</p>
            </div>
            <div className='energias'>
              <p>Impuesto Eléctrico</p>
              <p></p>
              <p>
                0,005 X{' '}
                {' ' +
                  (potcon1 * dias * con +
                    potcon2 * dias * con +
                    potcon3 * dias * con)}{' '}
              </p>
              <p></p>
              <p>
                {' '}
                {0.005 *
                  (potcon1 * dias * con +
                    potcon2 * dias * con +
                    potcon3 * dias * con)}
              </p>
            </div>
            <div className='energias'>
              <p>Alquiler Equipos</p>
              <p></p>
              <p></p>
              <p></p>
              <p>{alq}</p>
            </div>
            <div className='energias'>
              <p></p>
              <p></p>
              <p></p>
              <p>TOTAL SIN IVA</p>
              <p>
                {alq +
                  0.005 *
                    (potcon1 * dias * con +
                      potcon2 * dias * con +
                      potcon3 * dias * con)}
              </p>
            </div>
            <div className='energias'>
              <p>IVA (10%)</p>
              <p></p>
              <p></p>
              <p></p>
              <p>
                {0.1 *
                  (alq +
                    0.005 *
                      (potcon1 * dias * con +
                        potcon2 * dias * con +
                        potcon3 * dias * con))}
              </p>
            </div>
          </div>
          <div className='oferta'>
            <div>
              Nueva Oferta:{' '}
              {potcon1 * dias * con +
                potcon2 * dias * con +
                potcon3 * dias * con +
                0.1 *
                  (alq +
                    0.005 *
                      (potcon1 * dias * con +
                        potcon2 * dias * con +
                        potcon3 * dias * con))}{' '}
            </div>
            <div>Paga actualmente:{actual}</div>
            <div>
              Ahorro:{' '}
              {potcon1 * dias * con +
                potcon2 * dias * con +
                potcon3 * dias * con +
                0.1 *
                  (alq +
                    0.005 *
                      (potcon1 * dias * con +
                        potcon2 * dias * con +
                        potcon3 * dias * con)) -
                actual}
            </div>
            <div>
              Ahorro anual:
              {(potcon1 * dias * con +
                potcon2 * dias * con +
                potcon3 * dias * con +
                0.1 *
                  (alq +
                    0.005 *
                      (potcon1 * dias * con +
                        potcon2 * dias * con +
                        potcon3 * dias * con)) -
                actual) *
                12}
            </div>
          </div>
        </div>
        <button onClick={handleDownload}>Descargar</button>
      </div>
    </>
  );
}

export default Comparativa;
