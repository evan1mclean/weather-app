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
async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=1323615d8996a794c40fb7f6537c554f`,
      { mode: "cors" }
    );
    const data = await response.json();
    const processedData = processWeatherData(data);
    return processedData;
  } catch (error) {
    alert('Uh oh! Something went wrong here. Please try entering location in the format "City", or "City, Country".');
    console.log("Error: ", error);
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
/* harmony export */   "displayWeather": () => (/* binding */ displayWeather)
/* harmony export */ });
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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (searchInput.value === "") {
    return;
  }
  (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.clearDisplay)();
  const weatherData = await (0,_modules_apiFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(searchInput.value);
  (0,_modules_displayFunctions__WEBPACK_IMPORTED_MODULE_1__.displayWeather)(weatherData);
  form.reset();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFVBQVUsSUFBSSxhQUFhO0FBQzFELCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsMENBQTBDLHNCQUFzQixNQUFNO0FBQ3RFLDBDQUEwQyxpQkFBaUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGVBQWUsTUFBTTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYyxNQUFNO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxXQUFXO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxhQUFhLE1BQU07QUFDakU7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXdDOzs7Ozs7O1VDekR4QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nRDtBQUMwQjs7QUFFMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RUFBWTtBQUNkLDRCQUE0QixpRUFBVTtBQUN0QyxFQUFFLHlFQUFjO0FBQ2hCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZGlzcGxheUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9aW1wZXJpYWwmQVBQSUQ9MTMyMzYxNWQ4OTk2YTc5NGM0MGZiN2Y2NTM3YzU1NGZgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSk7XG4gICAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoJ1VoIG9oISBTb21ldGhpbmcgd2VudCB3cm9uZyBoZXJlLiBQbGVhc2UgdHJ5IGVudGVyaW5nIGxvY2F0aW9uIGluIHRoZSBmb3JtYXQgXCJDaXR5XCIsIG9yIFwiQ2l0eSwgQ291bnRyeVwiLicpO1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiLCBlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGEpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgbW9udGg6IFwibG9uZ1wiLFxuICAgIGRheTogXCJudW1lcmljXCIsXG4gIH0pO1xuICBjb25zdCBkYXRhT2plY3QgPSB7XG4gICAgZGF0ZTogZGF5LFxuICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICBjb3VudHJ5OiBkYXRhLnN5cy5jb3VudHJ5LFxuICAgIHdlYXRoZXJNYWluOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICB3ZWF0aGVyRGVzYzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIHdlYXRoZXJJY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvbixcbiAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICB0ZW1wSGlnaDogZGF0YS5tYWluLnRlbXBfbWF4LFxuICAgIHRlbXBMb3c6IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICBmZWVsc0xpa2U6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgd2luZDogZGF0YS53aW5kLnNwZWVkLFxuICAgIHByZXNzdXJlOiBkYXRhLm1haW4ucHJlc3N1cmUsXG4gIH07XG4gIHJldHVybiBkYXRhT2plY3Q7XG59XG4iLCJjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcihkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VhdGhlckRpc3BsYXkuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJEaXNwbGF5XCIpO1xuICB3ZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIndlYXRoZXJEaXNwbGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVySGVhZGVyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjaXR5XCI+JHtkYXRhLm5hbWV9LCAke2RhdGEuY291bnRyeX08L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGF0ZVwiPiR7ZGF0YS5kYXRlfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlckNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke1xuICAgICAgICAgICAgICAgICAgZGF0YS53ZWF0aGVySWNvblxuICAgICAgICAgICAgICAgIH1AMngucG5nXCIgYWx0PVwiQ3VycmVudCBXZWF0aGVyIEljb25cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPiR7TWF0aC5yb3VuZChkYXRhLnRlbXApfSYjMTc2O0Y8L2gyPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHtkYXRhLndlYXRoZXJEZXNjfTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgZmVlbHNMaWtlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLmZlZWxzTGlrZX0mIzE3Njs8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPkZlZWxzIExpa2U8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgdGVtcEhpZ2hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEudGVtcEhpZ2h9JiMxNzY7PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiZGV0YWlsTGFiZWxcIj5IaWdoPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHdpbmRTcGVlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS53aW5kfSBtcGg8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJkZXRhaWxMYWJlbFwiPldpbmQgU3BlZWQ8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgaHVtaWRpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwiZGV0YWlsVGl0bGVcIj4ke2RhdGEuaHVtaWRpdHl9JTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+SHVtaWRpdHk8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwgdGVtcExvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXRhaWxUaXRsZVwiPiR7ZGF0YS50ZW1wTG93fSYjMTc2OzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+TG93PC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsIHByZXNzdXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldGFpbFRpdGxlXCI+JHtkYXRhLnByZXNzdXJlfSBtYjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImRldGFpbExhYmVsXCI+UHJlc3N1cmU8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJEaXNwbGF5KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJEaXNwbGF5KCkge1xuICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckRpc3BsYXlcIikpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlckRpc3BsYXlcIik7XG4gIG1haW5Db250ZW50LnJlbW92ZUNoaWxkKGRpc3BsYXkpO1xufVxuXG5leHBvcnQgeyBkaXNwbGF5V2VhdGhlciwgY2xlYXJEaXNwbGF5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyIGZyb20gXCIuL21vZHVsZXMvYXBpRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBkaXNwbGF5V2VhdGhlciwgY2xlYXJEaXNwbGF5IH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5RnVuY3Rpb25zXCI7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdldFdlYXRoZXJcIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoTG9jYXRpb25cIik7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChzZWFyY2hJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjbGVhckRpc3BsYXkoKTtcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHNlYXJjaElucHV0LnZhbHVlKTtcbiAgZGlzcGxheVdlYXRoZXIod2VhdGhlckRhdGEpO1xuICBmb3JtLnJlc2V0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==