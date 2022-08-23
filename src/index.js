import getWeather from "./modules/apiFunctions";
import { displayWeather, clearDisplay, sliderButton } from "./modules/displayFunctions";

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
    clearDisplay();
    const weatherData = await getWeather(city.textContent, sliderButton());
    displayWeather(weatherData, sliderButton());
});

async function handleEventLoop(e) {
    e.preventDefault();
    if (searchInput.value === "") {
      return;
    }
    clearDisplay();
    const weatherData = await getWeather(searchInput.value, sliderButton());
    displayWeather(weatherData, sliderButton());
    form.reset();
}