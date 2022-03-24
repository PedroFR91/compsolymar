import React from 'react';

function ComComerciales() {
  var cg = 100;
  var cc = cg * 0.5;
  var cl = cg * 0.55;
  var cb = cg * 0.6;
  var cp = cg * 0.65;
  var co = cg * 0.7;
  var cpt = cg * 0.75;
  var ces = cg * 0.8;
  var cru = cg * 0.85;
  return (
    <div className='comisiones'>
      <div>
        <p>Elija Comercializadora</p>
        <input
          type='text'
          name='comercializadora'
          id='comercializadora'
          placeholder=''
        />
      </div>
      <div className='comisionescomerciales'>
        <div>Comisión general: {cg}</div>
        <div className='divcomisiones'>
          <p>Comercial: </p>
          <span>{cc}</span>
        </div>
        <div className='divcomisiones'>
          <p>Jefe Comercial 5%: </p>
          <span>{cc * 0.05}</span>
        </div>
        <div className='divcomisiones'>
          <p>Jefe Comercial 10%: </p>
          <span>{cc * 0.1}</span>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Latón: </p>
            <span>{cl.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Latón: </p>
            <span>{(cl * 0.05).toFixed(2)}</span>
          </div>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Bronce: </p>
            <span>{cb.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Bronce: </p>
            <span>{(cb * 0.05).toFixed(2)}</span>
          </div>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Plata: </p>
            <span>{cp.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Plata: </p>
            <span>{(cp * 0.05).toFixed(2)}</span>
          </div>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Oro: </p>
            <span>{co.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Oro: </p>
            <span>{(co * 0.05).toFixed(2)}</span>
          </div>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Platino: </p>
            <span>{cpt.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Platino: </p>
            <span>{(cpt * 0.05).toFixed(2)}</span>
          </div>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Esmeralda: </p>
            <span>{ces.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Esmeralda: </p>
            <span>{(ces * 0.05).toFixed(2)}</span>
          </div>
        </div>
        <div className='divcomisiones'>
          <div>
            <p>Rubí: </p>
            <span>{cru.toFixed(2)}</span>
          </div>
          <div>
            <p>Jefe Rubí: </p>
            <span>{(cru * 0.05).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComComerciales;
