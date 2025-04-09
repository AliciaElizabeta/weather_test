# Mapa Interactivo de España con Predicción Meteorológica

Este proyecto es una aplicación web interactiva que muestra un mapa de España y permite seleccionar diferentes provincias o municipios para obtener la predicción meteorológica de hoy. Utiliza la API de AEMET (Agencia Española de Meteorología) para obtener los datos climáticos.

## Características

- **Mapa interactivo**: Se utiliza la librería `react-simple-maps` para mostrar un mapa de España interactivo con la posibilidad de hacer clic en diferentes provincias para obtener la predicción meteorológica.
- **Predicción diaria**: Al hacer clic en una provincia, la aplicación obtiene la predicción meteorológica de hoy para ese municipio utilizando la API de AEMET.
- **Información meteorológica**: La predicción incluye detalles como el estado del cielo, temperatura máxima y mínima para el día actual.

## Tecnologías

- **React**: La librería de JavaScript utilizada para crear la interfaz de usuario.
- **Axios**: Para hacer las solicitudes HTTP a la API de AEMET.
- **React Simple Maps**: Utilizado para crear el mapa interactivo.
- **AEMET API**: API pública de la Agencia Española de Meteorología para obtener datos meteorológicos.

## Requisitos

1. **API Key de AEMET**: Necesitas obtener una clave de API para acceder a los datos de la Agencia Española de Meteorología. Regístrate [aquí](https://opendata.aemet.es/centrodedescargas/inicio) para obtenerla.
   
2. **Node.js y npm**: Necesitas tener Node.js y npm instalados en tu máquina para poder ejecutar la aplicación.

