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

updateTime();
setInterval(updateTime, 1000);
