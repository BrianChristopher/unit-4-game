$(document).ready(function() {

               
    console.log("This script is working.")

    //GLOBAL VARIABLES
    var computerScore = 1;
    var userScore = 2;
    var winCount = 3;
    var lossCount = 4;

    //Crystal Objects
    var crystal1 = {
        name: "The First Crystal",
        value: 0,
        imageSource: './assets/images/dogs.jpg'
    }

    var crystal2 = {
        name: "The Second Crystal",
        value: 0,
        imageSource: "assets/images/197-300x200-grayscale.jpg"
    }

    var crystal3 = {
        name: "The Third Crystal",
        value: 0,
        imageSource: "assets/images/277-300x200-grayscale.jpg"
    }

    var crystal4 = {
        name: "The Fourth Crystal",
        value: 0,
        imageSource: "assets/images/290-300x200-grayscale.jpg"
    }

    //INITIALIZE SCOREBOARD
    $("#displayComputerScore").text(computerScore);
    $("#displayUserScore").text(userScore);
    $("#displayWinCount").text(winCount);
    $("#displayLossCount").text(lossCount);

    //SET UP CRYSTALS CARDS FROM CRYSTAL OBJECTS
    $("#card1Image").attr("src", crystal1.imageSource)
  

    //FUNCTIONS TO RUN GAME
    function resetComputerScore(){
        computerScore = 0;
    }

    function resetUserScore(){
        userScore = 0;
    }

    function resetWinCount(){
        winCount = 0;
    }

    function resetLossCount(){
        lossCount = 0;
    }

    function resetGame(){
        resetComputerScore();
        resetUserScore();
        resetWinCount();
        resetLossCount();
    }

    function randomCrystalValue(){
        randomValue = Math.floor(Math.random() * 12) + 1;  
           // Returns a random integer from 1 to 12
           return randomValue;
    }

    function newCrystalValues(){
    crystal1.value = randomCrystalValue();
    crystal2.value = randomCrystalValue();
    crystal3.value = randomCrystalValue();
    crystal4.value = randomCrystalValue();
    }  //This function could be made more DRY with a loop.
    

    newCrystalValues();

    console.log("counts (4)" + computerScore + userScore + winCount + lossCount);
    console.log(crystal1.name);
    console.log(crystal1.value);
    console.log(crystal2.name);
    console.log(crystal2.value);
    console.log(crystal3.name);
    console.log(crystal3.value);
    console.log(crystal4.name);
    console.log(crystal4.value);
    console.log("--------------")

    //Set-up onClicks.
    $("#card1").click(function(){
        alert("You clicked on Card1!")
        userScore += crystal1.value;
        console.log("Current userScore: " + userScore);
    });

    $("#card2").click(function(){
        alert("You clicked on Card2!")
        userScore += crystal2.value;
        console.log("Current userScore: " + userScore);
    });

    $("#card3").click(function(){
        alert("You clicked on Card3!")
        userScore += crystal3.value;
        console.log("Current userScore: " + userScore);
    });

    $("#card4").click(function(){
        alert("You clicked on Card4!")
        userScore += crystal4.value;
        console.log("Current userScore: " + userScore);
    });

}); //End document.ready.