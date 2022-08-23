export default async function getWeather(location) {
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
