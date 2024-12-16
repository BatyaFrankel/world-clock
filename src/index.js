let citiesElement = document.querySelector("#cities");
let displayedCitiesElement = document.querySelector("#displayed-cities");

function updateTime() {
  const cities = [
    { name: "London", timezone: "Europe/London" },
    { name: "Sydney", timezone: "Australia/Sydney" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "New York", timezone: "America/New_York" },
  ];
  displayedCitiesElement.innerHTML = "";
  cities.forEach(function (city) {
    let cityTime = moment().tz(city.timezone);

    displayedCitiesElement.innerHTML += `
      <div class="city">
        <h2 class="city-timezone">${city.name}</h2>
        <div class="time">${cityTime.format("h:mm:ss")} <span>${cityTime.format(
      "A"
    )}</span></div>
        <div class="date">${cityTime.format("dddd, D MMMM YYYY")}</div>
      </div>
    `;
  });
}

function updateCity(event) {
  citiesElement.classList.add = "displayed-citys";
  citiesElement.classList.add = "world-clock-display";
  displayedCitiesElement.style.display = "none";

  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  if (cityTimeZone === "") {
    updateCity();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  citiesElement.innerHTML = `
      <div class="city">
        <h2 class="city-timezone">${cityName}</h2>
        <div class="time">${cityTime.format("h:mm:ss")} <span>${cityTime.format(
    "A"
  )}</span></div>
        <div class="date">${cityTime.format("dddd, D MMMM YYYY")}</div>
      </div>
      <a href="/" class="all-cities">
    All cities
  </a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#world-clock");
citiesSelectElement.addEventListener("change", updateCity);
