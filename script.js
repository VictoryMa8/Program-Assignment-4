window.onload = function() {
    let x = Math.floor(Math.random() * 10 + 1); // generate random number
    let guess = 0; // counter for number of correct guesses
    document.getElementById("userSubmit").onclick = function () { // when the user clicks submit
        let y = document.getElementById("userGuess").value; // get number guessed by user
        if (x == y) {
            guess++;
            document.getElementById("triesCounter").innerText = guess;
            alert("Congratulations, you guessed the correct number in " + guess + " guesses ");
        }
        else if (x < y) {
            guess++;
            document.getElementById("triesCounter").innerText = guess;
            alert("Try a smaller number");
        }
        else {
            guess++;
            document.getElementById("triesCounter").innerText = guess;
            alert("Try a bigger number");
        }
    }
    var round = 1;
    function rockPaperScissors(userChoice) {
        var choices = ['rock','paper','scissors'];
        var randomIndex = Math.floor(Math.random() * 3);
        var computerChoice = choices[randomIndex];
        if (userChoice === computerChoice) {
            document.getElementById("result").innerText = "You tied with the computer";
        }
        else if (userChoice === 'rock' && computerChoice === 'scissors' ) {
            document.getElementById("result").innerText = "You win";
        }
        else if (userChoice === 'paper' && computerChoice === 'rock' ) {
            document.getElementById("result").innerText = "You win";
        }
        else if (userChoice === 'scissors' && computerChoice === 'paper' ) {
            document.getElementById("result").innerText = "You win";
        }
        else {
            document.getElementById("result").innerText = "You lose";
        }
        round++;
        document.getElementById("roundCounter").innerText = round;
    }
    document.getElementById("rockButton").addEventListener("click", function() {
        rockPaperScissors('rock');
    });
    document.getElementById("paperButton").addEventListener("click", function() {
        rockPaperScissors('paper');
    });
    document.getElementById("scissorsButton").addEventListener("click", function() {
        rockPaperScissors('scissors');
    });
};