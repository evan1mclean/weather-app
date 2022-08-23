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
    const processedData = processWeatherData(data);
    return processedData;
  } catch (error) {
    console.log("Error: ", error);
    alert(
      'Uh oh! Something went wrong here. Please try entering the location in the format: "City", "City, Country", or "City, State".'
    );
  }
}

function processWeatherData(data) {
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

form.addEventListener("submit", handleEventLoop);
document.addEventListener("keydown", (e) => {
    if (e.key === "enter") {
        handleEventLoop(e);
    }
    return;
});
unitSlider.addEventListener("click", async (e) => {
    if (!document.querySelector('.city')) {
        return;
    }
    const city = document.querySelector('.city');
    (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();
    const weatherData = await (0,_modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(city.textContent, (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.sliderButton)());
    (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(weatherData, (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.sliderButton)());
});

async function handleEventLoop(e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLDJEQUEyRCxTQUFTLFNBQVMsS0FBSztBQUNsRixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixVQUFVLElBQUksYUFBYTtBQUMxRCwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQixrQkFBa0I7QUFDbkQsMENBQTBDLHNCQUFzQixNQUFNLEVBQUUsU0FBUztBQUNqRiwwQ0FBMEMsaUJBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxlQUFlLE1BQU07QUFDbkU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWMsTUFBTTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsV0FBVyxFQUFFLFVBQVU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWEsTUFBTTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7Ozs7Ozs7VUNuRXJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ3dDOztBQUV4RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVFQUFZO0FBQ2hCLDhCQUE4QixpRUFBVSxtQkFBbUIsdUVBQVk7QUFDdkUsSUFBSSx5RUFBYyxjQUFjLHVFQUFZO0FBQzVDLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQVk7QUFDaEIsOEJBQThCLGlFQUFVLG9CQUFvQix1RUFBWTtBQUN4RSxJQUFJLHlFQUFjLGNBQWMsdUVBQVk7QUFDNUM7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kaXNwbGF5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgdW5pdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXR9JkFQUElEPTEzMjM2MTVkODk5NmE3OTRjNDBmYjdmNjUzN2M1NTRmYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpO1xuICAgIHJldHVybiBwcm9jZXNzZWREYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XG4gICAgYWxlcnQoXG4gICAgICAnVWggb2ghIFNvbWV0aGluZyB3ZW50IHdyb25nIGhlcmUuIFBsZWFzZSB0cnkgZW50ZXJpbmcgdGhlIGxvY2F0aW9uIGluIHRoZSBmb3JtYXQ6IFwiQ2l0eVwiLCBcIkNpdHksIENvdW50cnlcIiwgb3IgXCJDaXR5LCBTdGF0ZVwiLidcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShkYXRhKSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9KTtcbiAgY29uc3QgZGF0YU9qZWN0ID0ge1xuICAgIGRhdGU6IGRheSxcbiAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgY291bnRyeTogZGF0YS5zeXMuY291bnRyeSxcbiAgICB3ZWF0aGVyTWFpbjogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgd2VhdGhlckRlc2M6IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICB3ZWF0aGVySWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb24sXG4gICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgdGVtcEhpZ2g6IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICB0ZW1wTG93OiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICBodW1pZGl0eTogZGF0YS5tYWluLmh1bWlkaXR5LFxuICAgIHdpbmQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICBwcmVzc3VyZTogZGF0YS5tYWluLnByZXNzdXJlLFxuICB9O1xuICByZXR1cm4gZGF0YU9qZWN0O1xufVxuIiwiY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKTtcblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSwgdW5pdCkge1xuICBjb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlYXRoZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVyRGlzcGxheVwiKTtcbiAgY29uc3Qgc3BlZWRVbml0ID0gdW5pdCA9PT0gXCJpbXBlcmlhbFwiID8gXCJtcGhcIiA6IFwibS9zXCI7XG4gIGNvbnN0IHRlbXBVbml0ID0gdW5pdCA9PT0gXCJpbXBlcmlhbFwiID8gXCJGXCIgOiBcIkNcIjtcbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJ3ZWF0aGVyRGlzcGxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlckhlYWRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiY2l0eVwiPiR7ZGF0YS5uYW1lfSwgJHtkYXRhLmNvdW50cnl9PC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cImRhdGVcIj4ke2RhdGEuZGF0ZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJDb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtcbiAgICAgICAgICAgICAgICAgIGRhdGEud2VhdGhlckljb25cbiAgICAgICAgICAgICAgICB9QDJ4LnBuZ1wiIGFsdD1cIiR7ZGF0YS53ZWF0aGVyRGVzY30gaWNvblwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+JHtNYXRoLnJvdW5kKGRhdGEudGVtcCl9JiMxNzY7JHt0ZW1wVW5pdH08L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkYXRhLndlYXRoZXJEZXNjfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgZmVlbHNMaWtlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLmZlZWxzTGlrZX0mIzE3Njs8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPkZlZWxzIExpa2U8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgdGVtcEhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEudGVtcEhpZ2h9JiMxNzY7PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsTGFiZWxcIj5IaWdoPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHdpbmRTcGVlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS53aW5kfSAke3NwZWVkVW5pdH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPldpbmQgU3BlZWQ8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEuaHVtaWRpdHl9JTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+SHVtaWRpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgdGVtcExvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS50ZW1wTG93fSYjMTc2OzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+TG93PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHByZXNzdXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLnByZXNzdXJlfSBtYjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+UHJlc3N1cmU8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJEaXNwbGF5KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckRpc3BsYXlcIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckRpc3BsYXlcIik7XG4gIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKGRpc3BsYXkpO1xufVxuXG5mdW5jdGlvbiBzbGlkZXJCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBUb2dnbGUnKTtcbiAgICBpZiAoYnV0dG9uLmNoZWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIFwibWV0cmljXCI7XG4gICAgfVxuICAgIHJldHVybiBcImltcGVyaWFsXCI7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlXZWF0aGVyLCBjbGVhckRpc3BsYXksIHNsaWRlckJ1dHRvbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvYXBpRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5V2VhdGhlciwgY2xlYXJEaXNwbGF5LCBzbGlkZXJCdXR0b24gfSBmcm9tIFwiLi9tb2R1bGVzL2Rpc3BsYXlGdW5jdGlvbnNcIjtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2V0V2VhdGhlclwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hMb2NhdGlvblwiKTtcbmNvbnN0IHVuaXRTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcFRvZ2dsZScpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRXZlbnRMb29wKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcImVudGVyXCIpIHtcbiAgICAgICAgaGFuZGxlRXZlbnRMb29wKGUpO1xuICAgIH1cbiAgICByZXR1cm47XG59KTtcbnVuaXRTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jIChlKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkudGV4dENvbnRlbnQsIHNsaWRlckJ1dHRvbigpKTtcbiAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGF0YSwgc2xpZGVyQnV0dG9uKCkpO1xufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUV2ZW50TG9vcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChzZWFyY2hJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbGVhckRpc3BsYXkoKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoc2VhcmNoSW5wdXQudmFsdWUsIHNsaWRlckJ1dHRvbigpKTtcbiAgICBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyRGF0YSwgc2xpZGVyQnV0dG9uKCkpO1xuICAgIGZvcm0ucmVzZXQoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=