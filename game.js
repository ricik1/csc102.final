//Erica Egan//
//csc102 game//
// JavaScript code//

function generateRandomNumber() //my funtion//
 {
    var randomScore = Math.floor(Math.random() * 101) +2; //this is the random number generater plus 2 for the math part//
var generateRandomNumber;
var output="button"; //my button is the what you press for the outcome of the number//
 //my if, elseif and else depening on the random number genterated, I have added winner or loser to those brackets.//
   if (randomScore >= 90) {
      outcome= "LOSER";
    } else if (randomScore >= 80) {
      outcome = "WINNER $$ WINNER";
    } else if (randomScore >= 70) {
      outcome = "LOSER";
    } else if (randomScore >= 60) {
      outcome = "WINNER $$ WINNER";   
    } else {
      outcome = "LOSER";
    }
    
 
//this is the style for the outcome displayed results//
    document.getElementById("output").innerHTML = "Your number is.... :<br> " + randomScore + "<br>" + outcome;
    document.getElementById("output").style.fontWeight = "bold";
document.getElementById("output").style.fontSize = "30px";
document.getElementById("output").style.color="#00FF00";
  }
  function playSlotSound() {
    var slotSound = document.getElementById("slotSound");
    slotSound.play();
  }
