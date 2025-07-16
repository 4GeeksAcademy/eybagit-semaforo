import React, { useState } from 'react'

const TrafficLight = () => {
  const 
      [activo, setActivo] = useState(''),
      variantes = ['danger', 'warning', 'success'];

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="bg-dark w-13px h-50px  " />
      <div className="d-flex flex-column p-2 bg-dark rounded rounded-3 align-items-center">
        {variantes.map((variante) => (
          <div key={variante} className={`semaforo-luz bg-${variante} rounded-circle w-50px h-50px
              ${activo === variante ? 'activo' : ''}
            `}
            onClick={() => setActivo(variante)}
          />
        ))}
      </div>
    </div>
  )
}

export default TrafficLight
