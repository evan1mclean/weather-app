/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/apiFunctions.js":
/*!*************************************!*\
  !*** ./src/modules/apiFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
async function getWeather(location, unit) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&APPID=1323615d8996a794c40fb7f6537c554f`,
      { mode: "cors" }
    );
    const data = await response.json();
    const processedData = filterWeatherData(data);
    return processedData;
  } catch (error) {
    console.log("Error: ", error);
    alert(
      'Uh oh! Something went wrong here. Please try entering the location in the format: "City", "City, Country", or "City, State".'
    );
  }
}

//Function to take in the API response and filter it down to only the data I want
function filterWeatherData(data) {
  const date = new Date();
  const day = date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const dataOject = {
    date: day,
    name: data.name,
    country: data.sys.country,
    weatherMain: data.weather[0].main,
    weatherDesc: data.weather[0].description,
    weatherIcon: data.weather[0].icon,
    temp: data.main.temp,
    tempHigh: data.main.temp_max,
    tempLow: data.main.temp_min,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
    pressure: data.main.pressure,
  };
  return dataOject;
}


/***/ }),

/***/ "./src/modules/displayFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/displayFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearDisplay": () => (/* binding */ clearDisplay),
/* harmony export */   "displayWeather": () => (/* binding */ displayWeather),
/* harmony export */   "sliderButton": () => (/* binding */ sliderButton)
/* harmony export */ });
const mainContent = document.querySelector(".main-content");

//Function that takes the processed weather data and creates the display
function displayWeather(data, unit) {
  const weatherDisplay = document.createElement("div");
  weatherDisplay.classList.add("weatherDisplay");
  const speedUnit = unit === "imperial" ? "mph" : "m/s";
  const tempUnit = unit === "imperial" ? "F" : "C";
  weatherDisplay.innerHTML = `<div class="weatherDisplay">
        <div class="weatherHeader">
            <h2 class="city">${data.name}, ${data.country}</h2>
            <h3 class="date">${data.date}</h3>
        </div>
        <div class="weatherContent">
            <div class="left">
                <img src="http://openweathermap.org/img/wn/${
                  data.weatherIcon
                }@2x.png" alt="${data.weatherDesc} icon">
                <h2 class="temperature">${Math.round(data.temp)}&#176;${tempUnit}</h2>
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
                    <h3 class="detailTitle">${data.wind} ${speedUnit}</h3>
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

//If the slider is checked, return metric units, else imperial units
function sliderButton() {
    const button = document.querySelector('.tempToggle');
    if (button.checked) {
        return "metric";
    }
    return "imperial";
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/apiFunctions */ "./src/modules/apiFunctions.js");
/* harmony import */ var _modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayFunctions */ "./src/modules/displayFunctions.js");



const form = document.querySelector(".getWeather");
const searchInput = document.getElementById("searchLocation");
const unitSlider = document.querySelector('.tempToggle');

//Calls the function if search button is submited or enter key is pressed
form.addEventListener("submit", handleDisplayLoop);
document.addEventListener("keydown", (e) => {
    if (e.key === "enter") {
        handleDisplayLoop(e);
    }
    return;
});

//If a current display is active, fetch data again and display with different units, else do nothing.
unitSlider.addEventListener("click", async (e) => {
    if (!document.querySelector('.city')) {
        return;
    }
    const city = document.querySelector('.city');
    (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();
    const weatherData = await (0,_modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(city.textContent, (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.sliderButton)());
    (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(weatherData, (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.sliderButton)());
});

//Function for handling clearing display/fetching data/displaying weather
async function handleDisplayLoop(e) {
    e.preventDefault();
    if (searchInput.value === "") {
      return;
    }
    (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();
    const weatherData = await (0,_modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(searchInput.value, (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.sliderButton)());
    (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(weatherData, (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.sliderButton)());
    form.reset();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLFNBQVMsS0FBSztBQUNsRixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVSxJQUFJLGFBQWE7QUFDMUQsK0JBQStCLFVBQVU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0Isa0JBQWtCO0FBQ25ELDBDQUEwQyxzQkFBc0IsTUFBTSxFQUFFLFNBQVM7QUFDakYsMENBQTBDLGlCQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZUFBZSxNQUFNO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjLE1BQU07QUFDbEU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFdBQVcsRUFBRSxVQUFVO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhLE1BQU07QUFDakU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7Ozs7Ozs7VUNyRXJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ3dDOztBQUV4RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQVk7QUFDaEIsOEJBQThCLGlFQUFVLG1CQUFtQix1RUFBWTtBQUN2RSxJQUFJLHlFQUFjLGNBQWMsdUVBQVk7QUFDNUMsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFZO0FBQ2hCLDhCQUE4QixpRUFBVSxvQkFBb0IsdUVBQVk7QUFDeEUsSUFBSSx5RUFBYyxjQUFjLHVFQUFZO0FBQzVDO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZGlzcGxheUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24sIHVuaXQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0fSZBUFBJRD0xMzIzNjE1ZDg5OTZhNzk0YzQwZmI3ZjY1MzdjNTU0ZmAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgcHJvY2Vzc2VkRGF0YSA9IGZpbHRlcldlYXRoZXJEYXRhKGRhdGEpO1xuICAgIHJldHVybiBwcm9jZXNzZWREYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XG4gICAgYWxlcnQoXG4gICAgICAnVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nIGhlcmUuIFBsZWFzZSB0cnkgZW50ZXJpbmcgdGhlIGxvY2F0aW9uIGluIHRoZSBmb3JtYXQ6IFwiQ2l0eVwiLCBcIkNpdHksIENvdW50cnlcIiwgb3IgXCJDaXR5LCBTdGF0ZVwiLidcbiAgICApO1xuICB9XG59XG5cbi8vRnVuY3Rpb24gdG8gdGFrZSBpbiB0aGUgQVBJIHJlc3BvbnNlIGFuZCBmaWx0ZXIgaXQgZG93biB0byBvbmx5IHRoZSBkYXRhIEkgd2FudFxuZnVuY3Rpb24gZmlsdGVyV2VhdGhlckRhdGEoZGF0YSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICBtb250aDogXCJsb25nXCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgfSk7XG4gIGNvbnN0IGRhdGFPamVjdCA9IHtcbiAgICBkYXRlOiBkYXksXG4gICAgbmFtZTogZGF0YS5uYW1lLFxuICAgIGNvdW50cnk6IGRhdGEuc3lzLmNvdW50cnksXG4gICAgd2VhdGhlck1haW46IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgIHdlYXRoZXJEZXNjOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgd2VhdGhlckljb246IGRhdGEud2VhdGhlclswXS5pY29uLFxuICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgIHRlbXBIaWdoOiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgdGVtcExvdzogZGF0YS5tYWluLnRlbXBfbWluLFxuICAgIGZlZWxzTGlrZTogZGF0YS5tYWluLmZlZWxzX2xpa2UsXG4gICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICB3aW5kOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgcHJlc3N1cmU6IGRhdGEubWFpbi5wcmVzc3VyZSxcbiAgfTtcbiAgcmV0dXJuIGRhdGFPamVjdDtcbn1cbiIsImNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cbi8vRnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcHJvY2Vzc2VkIHdlYXRoZXIgZGF0YSBhbmQgY3JlYXRlcyB0aGUgZGlzcGxheVxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSwgdW5pdCkge1xuICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlYXRoZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGlzcGxheVwiKTtcbiAgY29uc3Qgc3BlZWRVbml0ID0gdW5pdCA9PT0gXCJpbXBlcmlhbFwiID8gXCJtcGhcIiA6IFwibS9zXCI7XG4gIGNvbnN0IHRlbXBVbml0ID0gdW5pdCA9PT0gXCJpbXBlcmlhbFwiID8gXCJGXCIgOiBcIkNcIjtcbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ3ZWF0aGVyRGlzcGxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlckhlYWRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiY2l0eVwiPiR7ZGF0YS5uYW1lfSwgJHtkYXRhLmNvdW50cnl9PC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImRhdGVcIj4ke2RhdGEuZGF0ZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtcbiAgICAgICAgICAgICAgICAgIGRhdGEud2VhdGhlckljb25cbiAgICAgICAgICAgICAgICB9QDJ4LnBuZ1wiIGFsdD1cIiR7ZGF0YS53ZWF0aGVyRGVzY30gaWNvblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+JHtNYXRoLnJvdW5kKGRhdGEudGVtcCl9JiMxNzY7JHt0ZW1wVW5pdH08L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkYXRhLndlYXRoZXJEZXNjfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgZmVlbHNMaWtlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLmZlZWxzTGlrZX0mIzE3Njs8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPkZlZWxzIExpa2U8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgdGVtcEhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEudGVtcEhpZ2h9JiMxNzY7PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsTGFiZWxcIj5IaWdoPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHdpbmRTcGVlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS53aW5kfSAke3NwZWVkVW5pdH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPldpbmQgU3BlZWQ8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEuaHVtaWRpdHl9JTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+SHVtaWRpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgdGVtcExvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS50ZW1wTG93fSYjMTc2OzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+TG93PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHByZXNzdXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLnByZXNzdXJlfSBtYjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+UHJlc3N1cmU8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJEaXNwbGF5KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckRpc3BsYXlcIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckRpc3BsYXlcIik7XG4gIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKGRpc3BsYXkpO1xufVxuXG4vL0lmIHRoZSBzbGlkZXIgaXMgY2hlY2tlZCwgcmV0dXJuIG1ldHJpYyB1bml0cywgZWxzZSBpbXBlcmlhbCB1bml0c1xuZnVuY3Rpb24gc2xpZGVyQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wVG9nZ2xlJyk7XG4gICAgaWYgKGJ1dHRvbi5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiBcIm1ldHJpY1wiO1xuICAgIH1cbiAgICByZXR1cm4gXCJpbXBlcmlhbFwiO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5V2VhdGhlciwgY2xlYXJEaXNwbGF5LCBzbGlkZXJCdXR0b259O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlciBmcm9tIFwiLi9tb2R1bGVzL2FwaUZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVdlYXRoZXIsIGNsZWFyRGlzcGxheSwgc2xpZGVyQnV0dG9uIH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5RnVuY3Rpb25zXCI7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldFdlYXRoZXJcIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoTG9jYXRpb25cIik7XG5jb25zdCB1bml0U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBUb2dnbGUnKTtcblxuLy9DYWxscyB0aGUgZnVuY3Rpb24gaWYgc2VhcmNoIGJ1dHRvbiBpcyBzdWJtaXRlZCBvciBlbnRlciBrZXkgaXMgcHJlc3NlZFxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZURpc3BsYXlMb29wKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcImVudGVyXCIpIHtcbiAgICAgICAgaGFuZGxlRGlzcGxheUxvb3AoZSk7XG4gICAgfVxuICAgIHJldHVybjtcbn0pO1xuXG4vL0lmIGEgY3VycmVudCBkaXNwbGF5IGlzIGFjdGl2ZSwgZmV0Y2ggZGF0YSBhZ2FpbiBhbmQgZGlzcGxheSB3aXRoIGRpZmZlcmVudCB1bml0cywgZWxzZSBkbyBub3RoaW5nLlxudW5pdFNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKGUpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5JykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eS50ZXh0Q29udGVudCwgc2xpZGVyQnV0dG9uKCkpO1xuICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhLCBzbGlkZXJCdXR0b24oKSk7XG59KTtcblxuLy9GdW5jdGlvbiBmb3IgaGFuZGxpbmcgY2xlYXJpbmcgZGlzcGxheS9mZXRjaGluZyBkYXRhL2Rpc3BsYXlpbmcgd2VhdGhlclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGlzcGxheUxvb3AoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaElucHV0LnZhbHVlLCBzbGlkZXJCdXR0b24oKSk7XG4gICAgZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEsIHNsaWRlckJ1dHRvbigpKTtcbiAgICBmb3JtLnJlc2V0KCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9