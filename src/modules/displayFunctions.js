const mainContent = document.querySelector(".main-content");

function displayWeather(data) {
  const weatherDisplay = document.createElement("div");
  weatherDisplay.classList.add("weatherDisplay");
  weatherDisplay.innerHTML = `<div class="weatherDisplay">
        <div class="weatherHeader">
            <h2 class="city">${data.name}, ${data.country}</h2>
            <h3 class="date">${data.date}</h3>
        </div>
        <div class="weatherContent">
            <div class="left">
                <img src="http://openweathermap.org/img/wn/${
                  data.weatherIcon
                }@2x.png" alt="Current Weather Icon">
                <h2 class="temperature">${Math.round(data.temp)}&#176;F</h2>
                <h3 class="description">${data.weatherDesc}</h3>
            </div>
            <div class="right">
                <div class="detail feelsLike">
                    <h3 class="detailTitle">${data.feelsLike}&#176;</h3>
                    <h4 class="detailLabel">Feels Like</h4>
                </div>
                <div class="detail tempHigh">
                    <h3 class="detailTitle">${data.tempHigh}&#176;</h3>
                    <h4 class="detailLabel">High</h4>
                </div>
                <div class="detail windSpeed">
                    <h3 class="detailTitle">${data.wind} mph</h3>
                    <h4 class="detailLabel">Wind Speed</h4>
                </div>
                <div class="detail humidity">
                    <h3 class="detailTitle">${data.humidity}%</h3>
                    <h4 class="detailLabel">Humidity</h4>
                </div>
                <div class="detail tempLow">
                    <h3 class="detailTitle">${data.tempLow}&#176;</h3>
                    <h4 class="detailLabel">Low</h4>
                </div>
                <div class="detail pressure">
                    <h3 class="detailTitle">${data.pressure} mb</h3>
                    <h4 class="detailLabel">Pressure</h4>
                </div>
            </div>
        </div>
    </div>`;
  mainContent.appendChild(weatherDisplay);
}

function clearDisplay() {
  if (!document.querySelector(".weatherDisplay")) {
    return;
  }
  const display = document.querySelector(".weatherDisplay");
  mainContent.removeChild(display);
}

export { displayWeather, clearDisplay };
