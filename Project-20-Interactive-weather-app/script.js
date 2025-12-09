const apiKey = "e0f296d30b4e8fbf368722f0649b0731"; 

document.getElementById("searchBtn").addEventListener("click", getWeather);

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    weatherInfo.innerHTML = `<p class="error">Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const condition = data.weather[0].description;
      const cityName = data.name;
      

      weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>🌡️ Temperature: ${temp.toFixed(2)}°C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌤️ Condition: ${condition}</p>
      `;
    })
    .catch(error => {
      if (error.message === "City not found") {
        weatherInfo.innerHTML = `<p class="error">Invalid city name. Please try again.</p>`;
      } else {
        weatherInfo.innerHTML = `<p class="error">Network issue. Please try again.</p>`;
      }
    });
}
