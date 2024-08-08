// generate random number 1
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;

// change the 1st image src according to the random number generated
document.getElementsByClassName("img1")[0].src="/images/dice" + randomNumber1 + ".png";

// generate random number 2
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

// change the 2nd image src according to the random number generated 
document.getElementsByClassName("img2")[0].src="/images/dice" +randomNumber2+ ".png";