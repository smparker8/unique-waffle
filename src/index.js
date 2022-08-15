function citySearch(cityInput) {
  let apiKey = `2117e27598898848d8b57240d3bf0668`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function cityInput(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  citySearch(cityInput.value);
}

citySearch("Toronto");

let form = document.querySelector("#search-form");
form.addEventListener("submit", cityInput);

//Show current day and time
let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[currentDate.getMonth()];
let date = currentDate.getDate();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let currentDateTime = document.querySelector("#current-date-time");
currentDateTime.innerHTML = `Last updated: ${day}, ${month} ${date} at ${hours}:${minutes}`;

function showWeather(response) {
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;

  let descriptionDisplay = document.querySelector("#city-weather-description");
  descriptionDisplay.innerHTML = response.data.weather[0].description;

  let tempUpdate = document.querySelector("#temperature");
  tempUpdate.innerHTML = Math.round(response.data.main.temp);

  let humidity = Math.round(response.data.main.humidity);
  let humidityUpdate = document.querySelector("#humidity");
  humidityUpdate.innerHTML = `Humidity: ${humidity} %`;

  let wind = Math.round(response.data.wind.speed);
  let windUpdate = document.querySelector("#wind");
  windUpdate.innerHTML = `Wind: ${wind} mph`;

  let iconElement = document.querySelector("#weather-icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
