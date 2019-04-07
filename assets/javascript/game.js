//Variables
var winCount = 0;
var lossCount = 0;
var totalScore = 0;
var compChoice = Math.floor((Math.random()*102)+19);
var answer = compChoice;

var redCrystal = Math.floor((Math.random()*12)+1);
var blueCrystal = Math.floor((Math.random()*12)+1);
var yellowCrystal = Math.floor((Math.random()*12)+1);
var greenCrystal = Math.floor((Math.random()*12)+1);

function computerGuess (){
    var compChoice = Math.floor((Math.random()*102)+19);
    var answer = compChoice;
    return answer;
    }

    function resetRedCrystal (){
        var redCrystal = Math.floor((Math.random()*12)+1);
        return redCrystal;
        }

function resetBlueCrystal (){
            var blueCrystal = Math.floor((Math.random()*12)+1);
            return blueCrystal;
            }

function resetYellowCrystal (){
                var yellowCrystal = Math.floor((Math.random()*12)+1);
                return yellowCrystal;
                }

 function resetGreenCrystal (){
                    var greenCrystal = Math.floor((Math.random()*12)+1);
                    return greenCrystal;
                }

//  This code will run as soon as the page loads.
window.onload = function() {

    $("#win-count").text(winCount);
    $("#loss-count").text(lossCount);
    $("#random-number").text(answer);
    $("#total-score").text(totalScore);

    $("#red-crystal").on("click", red);
    $("#blue-crystal").on("click", blue);
    $("#yellow-crystal").on("click", yellow);
    $("#green-crystal").on("click", green);
    $("#restart-button").on("click", restart);
  };

function red (){
totalScore = totalScore + redCrystal
    $("#total-score").text(totalScore);

    if (totalScore == answer){
        $("#message").text("You Win! Click button to play again!");
        winCount = winCount + 1
        $("#win-count").text(winCount);
    }
    if (totalScore > answer){
        $("#message").text("You Lose! Click button to play again!");
        lossCount = lossCount + 1
        $("#loss-count").text(lossCount);
    }
}

function blue (){
    totalScore = totalScore + blueCrystal
    $("#total-score").text(totalScore);

    if (totalScore == answer){
        $("#message").text("You Win! Click button to play again!");
        winCount = winCount + 1
        $("#win-count").text(winCount);
    }
    if (totalScore > answer){
        $("#message").text("You Lose! Click button to play again!");
        lossCount = lossCount + 1
        $("#loss-count").text(lossCount);
    }
}

function yellow(){
    totalScore = totalScore + yellowCrystal
    $("#total-score").text(totalScore);

    if (totalScore == answer){
        $("#message").text("You Win! Click button to play again!");
        winCount = winCount + 1
        $("#win-count").text(winCount);
    }
    if (totalScore > answer){
        $("#message").text("You Lose! Click button to play again!");
        lossCount = lossCount + 1
        $("#loss-count").text(lossCount);
    }
}

function green (){
    totalScore = totalScore + greenCrystal
    $("#total-score").text(totalScore);

    if (totalScore == answer){
        $("#message").text("You Win! Click button to play again!");
        winCount = winCount + 1
        $("#win-count").text(winCount);
    }
    if (totalScore > answer){
        $("#message").text("You Lose! Click button to play again!");
        lossCount = lossCount + 1
        $("#loss-count").text(lossCount);
    }
}

function restart (){
    $("#message").text("");
    answer = computerGuess();
    totalScore = 0;
    $("#random-number").text(answer);
    $("#total-score").text(totalScore);
    redCrystal = resetRedCrystal();
    blueCrystal = resetBlueCrystal();
    yellowCrystal = resetYellowCrystal();
    greenCrystal = resetGreenCrystal();
}