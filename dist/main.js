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
  weatherDisplay.innerHTML = `<div class="weatherHeader">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLFNBQVMsS0FBSztBQUNsRixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxhQUFhO0FBQzFELCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCLGtCQUFrQjtBQUNuRCwwQ0FBMEMsc0JBQXNCLE1BQU0sRUFBRSxTQUFTO0FBQ2pGLDBDQUEwQyxpQkFBaUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGVBQWUsTUFBTTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYyxNQUFNO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXLEVBQUUsVUFBVTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsYUFBYSxNQUFNO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRDs7Ozs7OztVQ25FckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOZ0Q7QUFDd0M7O0FBRXhGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RUFBWTtBQUNoQiw4QkFBOEIsaUVBQVUsbUJBQW1CLHVFQUFZO0FBQ3ZFLElBQUkseUVBQWMsY0FBYyx1RUFBWTtBQUM1QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQVk7QUFDaEIsOEJBQThCLGlFQUFVLG9CQUFvQix1RUFBWTtBQUN4RSxJQUFJLHlFQUFjLGNBQWMsdUVBQVk7QUFDNUM7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXR9JkFQUElEPTEzMjM2MTVkODk5NmE3OTRjNDBmYjdmNjUzN2M1NTRmYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gZmlsdGVyV2VhdGhlckRhdGEoZGF0YSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yKTtcbiAgICBhbGVydChcbiAgICAgICdVaCBvaCEgU29tZXRoaW5nIHdlbnQgd3JvbmcgaGVyZS4gUGxlYXNlIHRyeSBlbnRlcmluZyB0aGUgbG9jYXRpb24gaW4gdGhlIGZvcm1hdDogXCJDaXR5XCIsIFwiQ2l0eSwgQ291bnRyeVwiLCBvciBcIkNpdHksIFN0YXRlXCIuJ1xuICAgICk7XG4gIH1cbn1cblxuLy9GdW5jdGlvbiB0byB0YWtlIGluIHRoZSBBUEkgcmVzcG9uc2UgYW5kIGZpbHRlciBpdCBkb3duIHRvIG9ubHkgdGhlIGRhdGEgSSB3YW50XG5mdW5jdGlvbiBmaWx0ZXJXZWF0aGVyRGF0YShkYXRhKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9KTtcbiAgY29uc3QgZGF0YU9qZWN0ID0ge1xuICAgIGRhdGU6IGRheSxcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcbiAgICB3ZWF0aGVyTWFpbjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgd2VhdGhlckRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB3ZWF0aGVySWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgdGVtcEhpZ2g6IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICB0ZW1wTG93OiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICBwcmVzc3VyZTogZGF0YS5tYWluLnByZXNzdXJlLFxuICB9O1xuICByZXR1cm4gZGF0YU9qZWN0O1xufVxuIiwiY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblxuLy9GdW5jdGlvbiB0aGF0IHRha2VzIHRoZSBwcm9jZXNzZWQgd2VhdGhlciBkYXRhIGFuZCBjcmVhdGVzIHRoZSBkaXNwbGF5XG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhLCB1bml0KSB7XG4gIGNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEaXNwbGF5XCIpO1xuICBjb25zdCBzcGVlZFVuaXQgPSB1bml0ID09PSBcImltcGVyaWFsXCIgPyBcIm1waFwiIDogXCJtL3NcIjtcbiAgY29uc3QgdGVtcFVuaXQgPSB1bml0ID09PSBcImltcGVyaWFsXCIgPyBcIkZcIiA6IFwiQ1wiO1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIndlYXRoZXJIZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNpdHlcIj4ke2RhdGEubmFtZX0sICR7ZGF0YS5jb3VudHJ5fTwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJkYXRlXCI+JHtkYXRhLmRhdGV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyQ29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7XG4gICAgICAgICAgICAgICAgICBkYXRhLndlYXRoZXJJY29uXG4gICAgICAgICAgICAgICAgfUAyeC5wbmdcIiBhbHQ9XCIke2RhdGEud2VhdGhlckRlc2N9IGljb25cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPiR7TWF0aC5yb3VuZChkYXRhLnRlbXApfSYjMTc2OyR7dGVtcFVuaXR9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7ZGF0YS53ZWF0aGVyRGVzY308L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIGZlZWxzTGlrZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS5mZWVsc0xpa2V9JiMxNzY7PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsTGFiZWxcIj5GZWVscyBMaWtlPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHRlbXBIaWdoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLnRlbXBIaWdofSYjMTc2OzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+SGlnaDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbCB3aW5kU3BlZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEud2luZH0gJHtzcGVlZFVuaXR9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsTGFiZWxcIj5XaW5kIFNwZWVkPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIGh1bWlkaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLmh1bWlkaXR5fSU8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPkh1bWlkaXR5PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHRlbXBMb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEudGVtcExvd30mIzE3Njs8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPkxvdzwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbCBwcmVzc3VyZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS5wcmVzc3VyZX0gbWI8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPlByZXNzdXJlPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZCh3ZWF0aGVyRGlzcGxheSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJEaXNwbGF5XCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJEaXNwbGF5XCIpO1xuICBtYWluQ29udGVudC5yZW1vdmVDaGlsZChkaXNwbGF5KTtcbn1cblxuLy9JZiB0aGUgc2xpZGVyIGlzIGNoZWNrZWQsIHJldHVybiBtZXRyaWMgdW5pdHMsIGVsc2UgaW1wZXJpYWwgdW5pdHNcbmZ1bmN0aW9uIHNsaWRlckJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcFRvZ2dsZScpO1xuICAgIGlmIChidXR0b24uY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gXCJtZXRyaWNcIjtcbiAgICB9XG4gICAgcmV0dXJuIFwiaW1wZXJpYWxcIjtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVdlYXRoZXIsIGNsZWFyRGlzcGxheSwgc2xpZGVyQnV0dG9ufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldFdlYXRoZXIgZnJvbSBcIi4vbW9kdWxlcy9hcGlGdW5jdGlvbnNcIjtcbmltcG9ydCB7IGRpc3BsYXlXZWF0aGVyLCBjbGVhckRpc3BsYXksIHNsaWRlckJ1dHRvbiB9IGZyb20gXCIuL21vZHVsZXMvZGlzcGxheUZ1bmN0aW9uc1wiO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nZXRXZWF0aGVyXCIpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaExvY2F0aW9uXCIpO1xuY29uc3QgdW5pdFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wVG9nZ2xlJyk7XG5cbi8vQ2FsbHMgdGhlIGZ1bmN0aW9uIGlmIHNlYXJjaCBidXR0b24gaXMgc3VibWl0ZWQgb3IgZW50ZXIga2V5IGlzIHByZXNzZWRcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVEaXNwbGF5TG9vcCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJlbnRlclwiKSB7XG4gICAgICAgIGhhbmRsZURpc3BsYXlMb29wKGUpO1xuICAgIH1cbiAgICByZXR1cm47XG59KTtcblxuLy9JZiBhIGN1cnJlbnQgZGlzcGxheSBpcyBhY3RpdmUsIGZldGNoIGRhdGEgYWdhaW4gYW5kIGRpc3BsYXkgd2l0aCBkaWZmZXJlbnQgdW5pdHMsIGVsc2UgZG8gbm90aGluZy5cbnVuaXRTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkudGV4dENvbnRlbnQsIHNsaWRlckJ1dHRvbigpKTtcbiAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGF0YSwgc2xpZGVyQnV0dG9uKCkpO1xufSk7XG5cbi8vRnVuY3Rpb24gZm9yIGhhbmRsaW5nIGNsZWFyaW5nIGRpc3BsYXkvZmV0Y2hpbmcgZGF0YS9kaXNwbGF5aW5nIHdlYXRoZXJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZURpc3BsYXlMb29wKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZSwgc2xpZGVyQnV0dG9uKCkpO1xuICAgIGRpc3BsYXlXZWF0aGVyKHdlYXRoZXJEYXRhLCBzbGlkZXJCdXR0b24oKSk7XG4gICAgZm9ybS5yZXNldCgpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==