import React, { useState, useEffect } from 'react'
import './WeatherDataCard.css'

function WeatherDataCard({ data }){
    const [dayIndex, setDayIndex] = useState(0);

    if (!data || !data.prediccion || !data.prediccion.dia) return null;

    const dias = data.prediccion.dia;
    const dia = dias[dayIndex];
  
    const handlePrev = () => {
      setDayIndex((prev) => (prev > 0 ? prev - 1 : dias.length - 1));
    };
  
    const handleNext = () => {
      setDayIndex((prev) => (prev < dias.length - 1 ? prev + 1 : 0));
    };

    
    return (
        <div className='WeatherDataCard'>        
            <div className='WeatherDataCard-Header '>
                <button onClick={handlePrev} className="WeatherDataCard-ButtonDate">
                ⮜ 
                </button>
                <div>
                    <h4>{data.nombre} </h4>
                    <h6>{dia.fecha}</h6>
                </div>
                <button onClick={handleNext} className="WeatherDataCard-ButtonDate">
                ⮞
                </button>
            </div>
        
            <div className='WeatherDataCard-Description'>
                <p><strong>Temperatura máxima:</strong> {dia.temperatura.maxima}°C</p>
                <p><strong>Temperatura mínima:</strong> {dia.temperatura.minima}°C</p>
                <p><strong>Estado del cielo (mañana):</strong> {dia.estadoCielo[0]?.descripcion || 'N/A'}</p>
                <p><strong>Estado del cielo (tarde):</strong> {dia.estadoCielo[1]?.descripcion || 'N/A'}</p>
                <p><strong>Estado del cielo (noche):</strong> {dia.estadoCielo[2]?.descripcion || 'N/A'}</p>
                <p><strong>Humedad relativa:</strong> {dia.humedadRelativa?.maxima}% / {dia.humedadRelativa?.minima}%</p>
            </div>
          </div>

      );
}




export default WeatherDataCard;