import getWeather from "./modules/apiFunctions";
import { displayWeather, clearDisplay, sliderButton } from "./modules/displayFunctions";

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
    clearDisplay();
    const weatherData = await getWeather(city.textContent, sliderButton());
    displayWeather(weatherData, sliderButton());
});

//Function for handling clearing display/fetching data/displaying weather
async function handleDisplayLoop(e) {
    e.preventDefault();
    if (searchInput.value === "") {
      return;
    }
    clearDisplay();
    const weatherData = await getWeather(searchInput.value, sliderButton());
    displayWeather(weatherData, sliderButton());
    form.reset();
}