console.log("from script");

const cardsArray = [
  {
    name: "cat1",
    img: "img/cat1.png",
  },
  {
    name: "cat2",
    img: "img/cat2.png",
  },
  {
    name: "cat3",
    img: "img/cat3.png",
  },
  {
    name: "cat4",
    img: "img/cat4.png",
  },
  {
    name: "cat5",
    img: "img/cat5.png",
  },
  {
    name: "cat6",
    img: "img/cat6.png",
  },
  {
    name: "cat7",
    img: "img/cat7.png",
  },
  {
    name: "cat8",
    img: "img/cat8.png",
  },
  {
    name: "cat9",
    img: "img/cat9.png",
  },
  {
    name: "cat10",
    img: "img/cat10.png",
  },
  {
    name: "cat11",
    img: "img/cat11.png",
  },
  {
    name: "cat12",
    img: "img/cat12.png",
  },
  {
    name: "cat1",
    img: "img/cat1.png",
  },
  {
    name: "cat2",
    img: "img/cat2.png",
  },
  {
    name: "cat3",
    img: "img/cat3.png",
  },
  {
    name: "cat4",
    img: "img/cat4.png",
  },
  {
    name: "cat5",
    img: "img/cat5.png",
  },
  {
    name: "cat6",
    img: "img/cat6.png",
  },
  {
    name: "cat7",
    img: "img/cat7.png",
  },
  {
    name: "cat8",
    img: "img/cat8.png",
  },
  {
    name: "cat9",
    img: "img/cat9.png",
  },
  {
    name: "cat10",
    img: "img/cat10.png",
  },
  {
    name: "cat11",
    img: "img/cat11.png",
  },
  {
    name: "cat12",
    img: "img/cat12.png",
  },
];
//console.log(cardsArray);
cardsArray.sort(() => 0.5 - Math.random());
//console.log(cardsArray);

const gridToDisplay = document.querySelector("#grid");
//console.log(gridToDisplay);
const scoreDisplay = document.querySelector("#score");
let selectedCards = [];
let selectedCardsIds = [];
const winningCards = [];

function createPlayBoard() {
  for (let i = 0; i < cardsArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "img/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    //console.log(card, i)
    gridToDisplay.appendChild(card);
  }
}

createPlayBoard();

function checkMatch() {
  console.log("Checked for match!");
  //console.log(cards)
  const cards = document.querySelectorAll("img"); // use grid to make it bigger and only selcet inside the grid
  const firstCardSelectedId = selectedCardsIds[0];
  const secondCardSelectedId = selectedCardsIds[1];

  if (firstCardSelectedId == secondCardSelectedId) {
    cards[firstCardSelectedId].setAttribute("src", "img/blank.png");
    cards[secondCardSelectedId].setAttribute("src", "img/blank.png");
    alert("You have click the same image!");
  }

  if (selectedCards[0] == selectedCards[1]) {
    alert("You found a match! ");
    cards[firstCardSelectedId].setAttribute("src", "img/white.png");
    cards[secondCardSelectedId].setAttribute("src", "img/white.png");
    cards[firstCardSelectedId].removeEventListener("click", flipCard);
    cards[secondCardSelectedId].removeEventListener("click", flipCard);
    winningCards.push(selectedCards);
  } else {
    cards[firstCardSelectedId].setAttribute("src", "img/blank.png");
    cards[secondCardSelectedId].setAttribute("src", "img/blank.png");
    alert("Sorry try again!");
  }
  scoreDisplay.textContent = winningCards.length + " pair(s)";
  selectedCards = [];
  selectedCardsIds = [];

  if (winningCards.length == cardsArray.length / 2) {
    scoreDisplay.textContent = "congratulations you found them all";
  }
}

function flipCard() {
  console.log(cardsArray);
  const cardId = this.getAttribute("data-id");
  //console.log(cardsArray[cardId].name);
  selectedCards.push(cardsArray[cardId].name);
  //console.log(selectedCards);
  //console.log("clicked", cardId);
  selectedCardsIds.push(cardId);
  //console.log(selectedCards);
  //console.log(selectedCardsIds);
  this.setAttribute("src", cardsArray[cardId].img);
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
