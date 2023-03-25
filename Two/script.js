let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

let dropdownDay = document.getElementById("selectDay");
for (let i = 1; i < 32; i++) {
  dropdownDay[dropdownDay.length] = new Option(i, i);
}

let selectMonths = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
let dropdownMonth = document.getElementById("selectMonth");
for (var i = 0; i < selectMonths.length; ++i) {
  // Append the element to the end of Array list
  dropdownMonth[dropdownMonth.length] = new Option(
    selectMonths[i],
    selectMonths[i]
  );
}

let dropdownYear = document.getElementById("selectYear");
for (let i = 2023; i > 1923; i--) {
  dropdownYear[dropdownYear.length] = new Option(i, i);
}

function getValues(event) {
  event.preventDefault();

  let data = {
    day: this["day"].value,
    month: this["month"].value,
    year: this["year"].value,
  };

  let out = `
		<p>Your birthday: <span>${data["day"]}</span> <span>${data["month"]}</span> <span>${data["year"]}</span></p>
	`;

  document.querySelector(".out code").innerHTML = out;
  console.log(data["day"]);
  console.log(data["month"]);
  console.log(data["year"]);

  let now = new Date();

  let yearsOld = new Date().getFullYear() - data["year"];
  if (now.getMonth() > selectMonths.indexOf(data["month"])) {
    yearsOld = new Date().getFullYear() - data["year"];
  } else if (now.getMonth() < selectMonths.indexOf(data["month"])) {
    yearsOld = new Date().getFullYear() - data["year"] - 1;
  }

  const countTo = data["day"] + " " + data["month"] + " " + 2024;
  //const countTo = data["day"] + " " + data["month"] + " " + (new Date().getFullYear());

  let outYearsOld = `<p> You are <span>${yearsOld}</span> year(s) old. </p>`;
  document.querySelector(".outYearsOld code").innerHTML = outYearsOld;

  console.log(countTo);
  const c = setInterval(() => {
    const endDate = new Date(countTo);
    // console.log(endDate + " this is end date")
    const currentDate = new Date();
    // console.log(currentDate)
    const totalSeconds = (endDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24) - 365;
    const daysPassBday = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    const countDown = document.getElementById("countdown");
    
    if (days < 0) {
      countDown.textContent =
        `${daysPassBday}days ${hours}hrs : ${minutes}min : ${seconds}s` +
        " for your next b-day";
    } else if (days > 0) {
      countDown.textContent =
        `${days}days ${hours}hrs : ${minutes}min : ${seconds}s` +
        " for your next b-day";
    } else if (days === 0) {
      clearInterval(c);
      countDown.textContent = "Happy Birth Day!!!";
    }

    console.log(days);
  });
} // end of form input

// Color Generator
/*
let color = Math.random();
color = Math.random().toString(16);
color = Math.random().toString(16).substring(2, 8); //.substring(x, y)
console.log(color);
*/
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const generateColor = () => {
  color = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + color;
  hex.innerHTML = "Today's Random Hex Color: " + "#" + color;
};
form.addEventListener("submit", generateColor);
