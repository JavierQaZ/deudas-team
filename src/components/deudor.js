import React from 'react';
import './deudor.css';

const Deudor = ({nombre, pagado, cuotas, num_cuotas, num_cuotas_pagadas, deuda, plazo}) => {
  // Calcular los días restantes
  const calcularDiasRestantes = () => {
    if (!plazo) return null;
    
    const hoy = new Date();
    const fechaPlazo = new Date(plazo);
    const diferencia = fechaPlazo - hoy;
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    
    return dias;
  };

  const diasRestantes = calcularDiasRestantes();

  return (
      <div className='deu-container'>
        {/* Recuadro diagonal en la esquina superior derecha */}
        {!pagado && diasRestantes !== null && (
          <div className='deu-plazo-diagonal'>
            <div className='deu-plazo-contenido'>
              {diasRestantes === 1 ? 'QUEDA' : "QUEDAN"} {diasRestantes} {diasRestantes === 1 ? 'DÍA' : 'DÍAS'}
            </div>
          </div>
        )}

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