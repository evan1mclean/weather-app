import getWeather from "./modules/apiFunctions";
import { displayWeather, clearDisplay } from "./modules/displayFunctions";

const form = document.querySelector(".getWeather");
const searchInput = document.getElementById("searchLocation");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (searchInput.value === "") {
    return;
  }
  clearDisplay();
  const weatherData = await getWeather(searchInput.value);
  displayWeather(weatherData);
  form.reset();
});
