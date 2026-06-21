export default function initWeather() {
  const weatherContainer = document.getElementById('weather-widget');
  if (!weatherContainer) return;

  // clave de WeatherAPI
  const apiKey = "0ccf125894844a5291e135927260805"; 

  // Ubicación 
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(`${latitude},${longitude}`);
      },
      () => {
        // Ciudad por defecto si el usuario rechaza los permisos
        fetchWeatherData("Madrid");
      }
    );
  } else {
    fetchWeatherData("Madrid");
  }

  async function fetchWeatherData(query) {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&lang=es`);
      if (!response.ok) throw new Error("Error al consultar el clima");
      
      const data = await response.json();
      renderWeather(data);
    } catch (error) {
      console.error(error);
      weatherContainer.innerHTML = "<p style='font-size:10px;'>Clima no disponible</p>";
    }
  }

  function renderWeather(data) {
    // Renderizado vertical solicitado: Icono + Temp arriba, Ciudad abajo
    weatherContainer.innerHTML = `
      <div class="weather-top">
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" title="${data.current.condition.text}">
        <span class="weather-temp">${Math.round(data.current.temp_c)}°C</span>
      </div>
      <div class="weather-bottom">
        <span class="weather-city">${data.location.name}</span>
      </div>
    `;
  }
}