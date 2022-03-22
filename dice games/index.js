// var player1Name= prompt("Enter player1's name.");
// var player2Name=prompt("Eneter player2's name.");
//
// document.querySelector(".player1").textContent= player1Name;
// document.querySelector(".player2").textContent= player2Name;

var randomDice1 = (Math.floor(Math.random()*6) + 1)
var rolledDice1 = "images/dice" + randomDice1 + ".png";
var randomDice2 = (Math.floor(Math.random()*6) + 1)
var rolledDice2 = "images/dice" + randomDice2 + ".png";

document.querySelector(".img1").setAttribute("src", rolledDice1);
document.querySelector(".img2").setAttribute("src", rolledDice2);


if (randomDice1>randomDice2){
  document.querySelector("h1").textContent = "Player1 Wins!";
}
else if (randomDice1<randomDice2){
  document.querySelector("h1").textContent = "Player2 Wins!";
}
else {
  document.querySelector("h1").textContent = "Refresh, It's a draw";
}
