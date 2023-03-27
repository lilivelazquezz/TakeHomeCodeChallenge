let form = document.forms["my-form"];
form.addEventListener("submit", getValues);

let dropdownDay = document.getElementById("selectDay");
for (let i = 1; i < 32; i++) {
  dropdownDay[dropdownDay.length] = new Option(i, i);
}

let selectMonths = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" );
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

  /**** Calculate Years ****/
  let now = new Date();
  let yearsOld = new Date().getFullYear() - data["year"];
  if (now.getMonth() > selectMonths.indexOf(data["month"])) {
    yearsOld = new Date().getFullYear() - data["year"];
  } else if (now.getMonth() < selectMonths.indexOf(data["month"])) {
    yearsOld = new Date().getFullYear() - data["year"] - 1;
  }
  
  let newYear = new Date().getFullYear() + 1;
  const countTo = data["day"] + " " + data["month"] + " " + newYear;

  let outYearsOld = `<p> You are <span>${yearsOld}</span> year(s) old. </p>`;
  document.querySelector(".outYearsOld code").innerHTML = outYearsOld;

  /**** Zodiac Sign ****/
  const img = document.querySelector("img");

  if (
    (selectMonths.indexOf(data["month"]) === 2 && data["day"] >= 21) ||
    (selectMonths.indexOf(data["month"]) === 3 && data["day"] <= 19)
  ) {
    img["src"] = "img/Aries.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Aries!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 3 && data["day"] >= 20) ||
    (selectMonths.indexOf(data["month"]) === 4 && data["day"] <= 20)
  ) {
    img["src"] = "img/Taurus.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Taurus!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 4 && data["day"] >= 21) ||
    (selectMonths.indexOf(data["month"]) === 5 && data["day"] <= 20)
  ) {
    img["src"] = "img/Gemini.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Gemini!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 5 && data["day"] >= 21) ||
    (selectMonths.indexOf(data["month"]) === 6 && data["day"] <= 22)
  ) {
    img["src"] = "img/Cancer.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Cancer!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 6 && data["day"] >= 23) ||
    (selectMonths.indexOf(data["month"]) === 7 && data["day"] <= 22)
  ) {
    img["src"] = "img/Leo.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Leo!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 7 && data["day"] >= 23) ||
    (selectMonths.indexOf(data["month"]) === 8 && data["day"] <= 22)
  ) {
    img["src"] = "img/Virgo.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Virgo!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 8 && data["day"] >= 23) ||
    (selectMonths.indexOf(data["month"]) === 9 && data["day"] <= 22)
  ) {
    img["src"] = "img/Libra.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Libra!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 9 && data["day"] >= 23) ||
    (selectMonths.indexOf(data["month"]) === 10 && data["day"] <= 21)
  ) {
    img["src"] = "img/Scorpio.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Scorpio!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 10 && data["day"] >= 22) ||
    (selectMonths.indexOf(data["month"]) === 11 && data["day"] <= 21)
  ) {
    img["src"] = "img/Sagittarius.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Sagittarius!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 11 && data["day"] >= 22) ||
    (selectMonths.indexOf(data["month"]) === 0 && data["day"] <= 19)
  ) {
    img["src"] = "img/Capricorn.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Capricorn!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 0 && data["day"] >= 20) ||
    (selectMonths.indexOf(data["month"]) === 1 && data["day"] <= 18)
  ) {
    img["src"] = "img/Aquarius.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Aquarius!";
  }
  if (
    (selectMonths.indexOf(data["month"]) === 1 && data["day"] >= 19) ||
    (selectMonths.indexOf(data["month"]) === 2 && data["day"] <= 20)
  ) {
    img["src"] = "img/Pisces.png";
    document.querySelector(".zodiacSign code").innerHTML =
      "Your zodiac sign is Pisces!";
  }

  const c = setInterval(() => {
    const endDate = new Date(countTo);
    const currentDate = new Date();
    const totalSeconds = (endDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24) - 365;
    const daysPassBday = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    const countDown = document.getElementById("countdown");

    if (days < 0) {
      clearInterval(c);
      countDown.textContent =
        `${daysPassBday}days ${hours}hrs : ${minutes}min : ${seconds}s` +
        " for your next b-day";
    } else if (days > 0) {
      clearInterval(c);
      countDown.textContent =
        `${days}days ${hours}hrs : ${minutes}min : ${seconds}s` +
        " for your next b-day";
    } else if (days === 0) {
      clearInterval(c);
      countDown.textContent = "Happy Birth Day!!!";
    }
  });
} // end of form input

// Color Generator
const hex = document.querySelector(".hex");
const btn = document.querySelector(".generate");
const generateColor = () => {
  color = Math.random().toString(16).substring(2, 8);
  document.body.style.backgroundColor = "#" + color;
  hex.innerHTML = "Today's Random Hex Color: " + "#" + color;
};
form.addEventListener("submit", generateColor);
