import React, { useState, useEffect } from 'react'
import './WeatherDataCard.css'

function WeatherDataCard({ data }){
    const [dayIndex, setDayIndex] = useState(0);

    if (!data) return (
      <div className='WeatherDataCard'>        
        <div className='WeatherDataCard-Header '>
            <button className="WeatherDataCard-ButtonDate">
            ⮜ 
            </button>
            <div>
                <h4> Su provincia </h4>
            </div>
            <button className="WeatherDataCard-ButtonDate">
            ⮞
            </button>
        </div>
    
        <div className='WeatherDataCard-Description'>
            <p><strong>Seleccione su provincia en el mapa</strong></p>
        </div>
      </div>
    )

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
                    <h6>{dia.fecha.split('T')[0]}</h6>
                </div>
                <button onClick={handleNext} className="WeatherDataCard-ButtonDate">
                ⮞
                </button>
            </div>
        
            <div className='WeatherDataCard-Description'>
                <p><strong>Temperaturas:</strong> {dia.temperatura.maxima}°C - {dia.temperatura.minima}°C</p>
                <p><strong>Cielo (mañana):</strong> {dia.estadoCielo[0]?.descripcion || 'N/A'}</p>
                <p><strong>Cielo (tarde):</strong> {dia.estadoCielo[1]?.descripcion || 'N/A'}</p>
                <p><strong>Cielo (noche):</strong> {dia.estadoCielo[2]?.descripcion || 'N/A'}</p>
                <p><strong>Humedad:</strong> {dia.humedadRelativa?.maxima}% - {dia.humedadRelativa?.minima}%</p>
            </div>
          </div>
      );
}




export default WeatherDataCard;