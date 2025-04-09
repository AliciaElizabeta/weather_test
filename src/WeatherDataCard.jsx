import { useState, useEffect } from 'react'
import './WeatherDataCard.css'


function WeatherDataCard(weather){


    console.log(weather)
    return (
        <>
        <div className='WeatherDataCard-Header'>
            <span>{weather.data.nombre} : {weather.data.prediccion.dia[0].fecha}</span>
            
        </div>
        <div className='WeatherDataCard-Description'>
            <span>{weather.data.prediccion.dia[0].temperatura.maxima}º MAX</span>
            <span>{weather.data.prediccion.dia[0].temperatura.minima}º MIN</span>
        </div>
        </>
        
// {(weatherData != null) && (
//     <div className="mt-4 bg-blue-100 p-4 rounded-xl shadow">
//       <h2 className="text-xl font-bold mb-2">
//         Predicción para {weatherData.nombre}
//       </h2>
//       <span>{weatherData.nombre}</span>
//       {weatherData.prediccion.dia.map((dia, index) => (
//         <div key={index} className="mb-2">
//           <strong>{dia.fecha}</strong>
//           <p>
//             Estado cielo (mañana): {dia.estadoCielo[0]?.descripcion || "N/A"}
//           </p>
//           <p>Temperatura máxima: {dia.temperatura.maxima} °C</p>
//           <p>Temperatura mínima: {dia.temperatura.minima} °C</p>
//         </div>
//       ))}
//     </div>
//   )}
    )


}

export default WeatherDataCard;