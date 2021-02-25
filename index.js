//Vic Yu's attempt
//Setting random number for dice's
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Generates random whole number 1-6
// var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Generates random whole number 1-6

//changing image src
// document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
// document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

//adding h1 title
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
// } else if (randomNumber1 < randomNumber2) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
// } else if (randomNumber1 === randomNumber2) {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

//Below Dr. Angela Yu's Solution
//Dice1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//Dice2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2);

//h1 title
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
