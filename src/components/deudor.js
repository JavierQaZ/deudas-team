import React from 'react';
import './deudor.css';

const Deudor = ({nombre, pagado, cuotas, num_cuotas, num_cuotas_pagadas, deuda}) => {
  return (
      <div className='deu-container'>
        <span className={`estado ${pagado ? 'pagado' : 'no-pagado'}`}>
          {pagado ? 'PAGADO' : 'NO PAGADO'}
        </span>
        <div className='deu-info'>
          <h3 className='deu-nombre'>
            {nombre}
          </h3>
          <div className='deu-detalles'>
            {cuotas && (
              <span className='deu-cuotas-info'>
                {num_cuotas_pagadas} / {num_cuotas} Cuotas
              </span>
            )}

            {!pagado && (
              <span className='deu-deuda'>
                Deuda: ${deuda}
              </span>
            )}
          </div>
        </div>
      </div>
    )
}

export default Deudor;