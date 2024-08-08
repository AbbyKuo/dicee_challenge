// generate random number 1
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

// change the 1st image src according to the random number generated
document.getElementsByClassName("img1")[0].src="/images/dice" + randomNumber1 + ".png";

// generate random number 2
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

// change the 2nd image src according to the random number generated 
document.getElementsByClassName("img2")[0].src="/images/dice" +randomNumber2+ ".png";

// Display the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩"
} else {
    document.querySelector(".container h1").innerHTML = "Draw!"
};