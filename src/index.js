let londonTimeElement = document.querySelector("#displayed-citys");
let londonTime = moment().tz("Europe/London");
londonTimeElement.innerHTML = `<div class="city">
            <h2 class="city-timezone" id="london">London</h2>
            <div class="time">${londonTime.format(
              `h:m:ss`
            )} <span>${londonTime.format(`A`)}</span></div>
            <div class="date">${londonTime.format(`dddd, MMMM D, YYYY`)}</div>
          </div>`;

console.log(londonTimeElement);
