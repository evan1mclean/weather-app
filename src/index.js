import getWeather from "./modules/apiFunctions";

const weather = getWeather("lincolnville, Maine").then((data) => console.log(data));