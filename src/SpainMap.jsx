import { useState, useEffect } from 'react'
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import axios from "axios";
import WeatherDataCard from './WeatherDataCard';

const AEMET_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGljaWFtYXJyZXJvcmF2ZWxvQGdtYWlsLmNvbSIsImp0aSI6ImFjYzU3YWViLWQ2YjEtNGFlYS05YWU4LWEwZWY4ZDViNzY2ZCIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzQ0MTk1NDAwLCJ1c2VySWQiOiJhY2M1N2FlYi1kNmIxLTRhZWEtOWFlOC1hMGVmOGQ1Yjc2NmQiLCJyb2xlIjoiIn0.wlmF5CMu9RjJJRwr9uSI1HKR1ibNtj4DfjvPFZ6cYrI"; 
const geoUrl ="https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/spain-provinces.geojson"
const provinceToMunicipality = {
    "01": "01059", // Álava - Vitoria-Gasteiz
    "02": "02003", // Albacete
    "03": "03014", // Alicante
    "04": "04013", // Almería
    "05": "05019", // Ávila
    "06": "06015", // Badajoz
    "07": "07040", // Palma (Illes Balears)
    "08": "08019", // Barcelona
    "09": "09059", // Burgos
    "10": "10148", // Cáceres
    "11": "11020", // Cádiz
    "12": "12040", // Castellón de la Plana
    "13": "13034", // Ciudad Real
    "14": "14021", // Córdoba
    "15": "15030", // A Coruña
    "16": "16078", // Cuenca
    "17": "17079", // Girona
    "18": "18087", // Granada
    "19": "19130", // Guadalajara
    "20": "20069", // Donostia/San Sebastián (Gipuzkoa)
    "21": "21041", // Huelva
    "22": "22125", // Huesca
    "23": "23050", // Jaén
    "24": "24115", // León
    "25": "25120", // Lleida
    "26": "26089", // Logroño (La Rioja)
    "27": "27028", // Lugo
    "28": "28079", // Madrid
    "29": "29067", // Málaga
    "30": "30030", // Murcia
    "31": "31201", // Pamplona (Navarra)
    "32": "32054", // Ourense
    "33": "33044", // Oviedo (Asturias)
    "34": "34120", // Palencia
    "35": "35016", // Las Palmas de Gran Canaria
    "36": "36038", // Pontevedra
    "37": "37274", // Salamanca
    "38": "38038", // Santa Cruz de Tenerife
    "39": "39075", // Santander (Cantabria)
    "40": "40194", // Segovia
    "41": "41091", // Sevilla
    "42": "42173", // Soria
    "43": "43148", // Tarragona
    "44": "44216", // Teruel
    "45": "45168", // Toledo
    "46": "46250", // Valencia
    "47": "47186", // Valladolid
    "48": "48020", // Bilbao (Bizkaia)
    "49": "49275", // Zamora
    "50": "50297", // Zaragoza
    "51": "51001", // Ceuta
    "52": "52001", // Melilla
  };

function SpainMap() {

    const [postalCode, setpostalCode] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      if (!postalCode) return;
    
      const fetchWeather = async () => {
        try {
          const initialRes = await axios.get(
            `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${postalCode}`,
            {
              headers: {
                "cache-control": "no-cache",
              },
              params: {
                api_key: AEMET_API_KEY,
              },
            }
          );
    
          const dataUrl = initialRes.data.datos;
          const dataRes = await axios.get(dataUrl);
          setWeatherData(dataRes.data[0]);
    
        } catch (err) {
          console.error(err);
        }
      };
    
      fetchWeather();
    }, [postalCode]);


    return (
        <>
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{
                scale: 2000, // Aumentar la escala para acercar más el mapa
                center: [-7, 36], // Ajusta el centro para un buen equilibrio
            }}
            height={720} // Altura ajustada
            style={{ width:500 }} 
        >


          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    const codProv = geo.properties.cod_prov.padStart(2, '0'); // Asegura dos dígitos
                    const muniId = provinceToMunicipality[codProv];
                    if (muniId) {
                      setpostalCode(muniId);
                    } else {
                      console.warn("Municipio no encontrado para", codProv);
                    }
                  }}
                  style={{
                    default: {
                      fill: "#E0E0E0",
                      stroke: "#FFF",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#007BFF",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#0056b3",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        {(weatherData != null) && (
            <WeatherDataCard data={weatherData}></WeatherDataCard>
        )}
        
        </>
    );
}

export default SpainMap;