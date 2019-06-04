$(document).ready(function () {


    console.log("This script is running.")

    //GLOBAL VARIABLES
    var computerScore = 0;
    var userScore = 0;
    var winCount = 0;
    var lossCount = 0;

    //Crystal Objects
    var crystal1 = {
        name: "The First Crystal",
        value: 0,
        imageSource: './assets/images/dogs.jpg'
    }

    var crystal2 = {
        name: "The Second Crystal",
        value: 0,
        imageSource: './assets/images/193-300x200-grayscale.jpg'
    }

    var crystal3 = {
        name: "The Third Crystal",
        value: 0,
        imageSource: './assets/images/197-300x200-grayscale.jpg'
    }

    var crystal4 = {
        name: "The Fourth Crystal",
        value: 0,
        imageSource: './assets/images/277-300x200-grayscale.jpg'
    }

    //SET UP CRYSTALS CARDS FROM CRYSTAL OBJECTS
    $("#card1Image").attr("src", crystal1.imageSource);
    $("#card1Name").text(crystal1.name);
    $("#card2Image").attr("src", crystal2.imageSource);
    $("#card2Name").text(crystal2.name);
    $("#card3Image").attr("src", crystal3.imageSource);
    $("#card3Name").text(crystal3.name);
    $("#card4Image").attr("src", crystal4.imageSource);
    $("#card4Name").text(crystal4.name);

    //INITIALIZE SCOREBOARD
    updateScoreboard();

    //FUNCTIONS TO RUN GAME
    function updateScoreboard() {
        $("#displayComputerScore").text(computerScore);
        $("#displayUserScore").text(userScore);
        $("#displayWinCount").text(winCount);
        $("#displayLossCount").text(lossCount);
    }

    function resetComputerScore() {
        computerScore = 0;
    }

    function resetUserScore() {
        userScore = 0;
    }

    function resetWinCount() {
        winCount = 0;
    }

    function resetLossCount() {
        lossCount = 0;
    }

    function randomComputerValue() {
        var randomValue = Math.floor(Math.random() * 101) + 19;
        // Returns a random integer from 19 to 120 
        computerScore = randomValue;
    }

    function randomCrystalValue() {
        var randomValue = Math.floor(Math.random() * 12) + 1;
        // Returns a random integer from 1 to 12
        return randomValue;
    }

    function newCrystalValues() {
        crystal1.value = randomCrystalValue();
        crystal2.value = randomCrystalValue();
        crystal3.value = randomCrystalValue();
        crystal4.value = randomCrystalValue();
    }  //This function could be made more DRY with a loop.

    function winGame(){
        updateScoreboard();
        alert("You matched the computer score. You win! The Crystals are happy.");
        winCount++;
        updateScoreboard();
        newGame();
    }

    function loseGame(){
        updateScoreboard();
        alert("You went over. You lose. The Crystals are sad.");
        lossCount++;
        updateScoreboard();
        newGame();
    }

    function resetGame() {
        resetComputerScore();
        randomComputerValue();
        resetUserScore();
        resetWinCount();
        resetLossCount();
        newCrystalValues();
        updateScoreboard();
    }

    function newGame() {
        resetComputerScore();
        randomComputerValue();
        resetUserScore();
        newCrystalValues();
        updateScoreboard();
    }

    $("#newGameButton").click(function () {
        alert("You clicked on the new game button.");
        newGame();
    })

    $("#resetGameButton").click(function () {
        alert("You clicked on the reset game button.");
        resetGame();
    })
    
    //GAME PLAY BEGINS HERE
    newGame();
    
    console.log("The value of the crystals is: " + crystal1.value + crystal2.value + crystal3.value + crystal4.value);
    console.log("The value of computerScore is: " + computerScore);
    
    //Set-up onClicks.
    $("#card1").click(function () {
        // alert("You clicked on Card1!")
        userScore += crystal1.value;
        updateScoreboard();
        
        console.log("This crystal's value: " + crystal1.value)
        console.log("Current userScore: " + userScore);
        console.log("Current computerScore: " + computerScore);
        console.log("UserScore>computerScore: " + (userScore > computerScore));
        if (userScore == computerScore){
            winGame();
        }
        else if (userScore > computerScore){
            loseGame();
        }

    });

    $("#card2").click(function () {
        //alert("You clicked on Card2!")
        userScore += crystal2.value;
        updateScoreboard();
        console.log("This crystal's value: " + crystal2.value)
        console.log("Current userScore: " + userScore);
        console.log("Current computerScore: " + computerScore);
        console.log("UserScore>computerScore: " + (userScore > computerScore));
        if (userScore == computerScore){
            winGame();
        }
        else if (userScore > computerScore){
            loseGame();
        }
    });

    $("#card3").click(function () {
        //alert("You clicked on Card3!")
        userScore += crystal3.value;
        updateScoreboard();
        console.log("This crystal's value: " + crystal3.value)
        console.log("Current userScore: " + userScore);
        console.log("Current computerScore: " + computerScore);
        console.log("UserScore>computerScore: " + (userScore > computerScore));
        if (userScore == computerScore){
            winGame();
        }
        else if (userScore > computerScore){
            loseGame();
        }
    });

    $("#card4").click(function () {
        //alert("You clicked on Card4!")
        userScore += crystal4.value;
        updateScoreboard();
        console.log("This crystal's value: " + crystal4.value)
        console.log("Current userScore: " + userScore);
        console.log("Current computerScore: " + computerScore);
        console.log("UserScore>computerScore: " + (userScore > computerScore));
        if (userScore == computerScore){
            winGame();
        }
        else if (userScore > computerScore){
            loseGame();
        }
    });


    

    

}); //End document.ready.