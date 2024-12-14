let home = false;

function displayWorldClock(event) {
  let timezone;
  let cityTime;
  home = true;
  clearTimeout(updateTime);

  if (event.target.value.length > 0) {
    timezone = event.target.value;
    cityTime = moment.tz(timezone);
  }
  if (event.target.value === "current") {
    timezone = moment.tz.guess();
    cityTime = moment.tz(timezone);
  }

  let city = timezone.replace("_", " ").split("/")[1];

  let displayedCitysElement = document.querySelector("#displayed-citys");
  displayedCitysElement.innerHTML = "";
  displayedCitysElement.innerHTML = `
      <div class="city">
        <h2 class="city-timezone">${city}</h2>
        <div class="time">${cityTime.format("h:mm:ss")} <span>${cityTime.format(
    "A"
  )}</span></div>
        <div class="date">${cityTime.format("dddd, D MMMM YYYY")}</div>
      </div>
    `;

  setInterval(displayWorldClock, 1000);
  return home;
}

function updateTime() {
  let displayedCitysElement = document.querySelector("#displayed-citys");

  const cities = [
    { name: "London", timezone: "Europe/London" },
    { name: "Sydney", timezone: "Australia/Sydney" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "New York", timezone: "America/New_York" },
  ];
  displayedCitysElement.innerHTML = "";
  cities.forEach(function (city) {
    let cityTime = moment().tz(city.timezone);

    displayedCitysElement.innerHTML += `
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

if (home === true) {
  clearTimeout(updateTime);
  WorldClockElement = document.querySelector("#world-clock");
  WorldClockElement.addEventListener("change", displayWorldClock);
  setInterval(displayWorldClock, 1000);
  console.log(home);
} else {
  if (home === false) {
    updateTime();
    WorldClockElement = document.querySelector("#world-clock");
    WorldClockElement.addEventListener("change", displayWorldClock);
    setInterval(updateTime, 1000);
  }
}
