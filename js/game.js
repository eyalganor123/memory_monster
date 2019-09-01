// Those are global variables, they stay alive and reflect the state of the game
var elPreviousCard = null;
var flippedCouplesCount = 0;
var isProcessing = false;
var startTime = "";
var gameTime = 0;
var newBest = localStorage.getItem('bestTime');
var bestPlayer = localStorage.getItem('bestPlayer')



if (newBest == null) {
    document.getElementById('highScore').innerHTML = `GOOD LUCK`;
} else {
    document.getElementById('highScore').innerHTML = `Best Time: ${newBest}  by:${bestPlayer}`;
}

// This is a constant that we dont change during the game (we mark those with CAPITAL letters)
var TOTAL_COUPLES_COUNT = 3;

// Load an audio file
var audioWin = new Audio('sound/win.mp3');
var audioWrong = new Audio('sound/wrong.mp3');
var audioRight = new Audio('sound/right.mp3');

// This function is called whenever the user click a card
function cardClicked(elCard) {
    if (startTime === "") {
        startTime = Date.now();
        start();
    }

    if (isProcessing === true) { return }

    // If the user clicked an already flipped card - do nothing and return from the function
    if (elCard.classList.contains('flipped')) {
        return;
    }

    // Flip it
    elCard.classList.add('flipped');
    isProcessing = true;

    // This is a first card, only keep it in the global variable
    if (elPreviousCard === null) {

        elPreviousCard = elCard;
        isProcessing = false;
    } else {
        // get the data-card attribute's value from both cards
        var card1 = elPreviousCard.getAttribute('data-card');
        var card2 = elCard.getAttribute('data-card');

        // No match, schedule to flip them back in 1 second
        if (card1 !== card2) {
            audioWrong.play();
            setTimeout(function () {
                elCard.classList.remove('flipped');
                elPreviousCard.classList.remove('flipped');
                elPreviousCard = null;
                isProcessing = false;
            }, 1000);


        } else {
            // Yes! a match!
            audioRight.play();
            flippedCouplesCount++;
            elPreviousCard = null;
            isProcessing = false;

            // All cards flipped!
            if (TOTAL_COUPLES_COUNT === flippedCouplesCount) {

                stop();

                audioWin.play();
                again = document.getElementById('again');
                again.style.display = 'block';


            }
        }
    }
}
function newGame() {
    again.style.display = 'none';
    startTime = "";
    var allCards = document.querySelectorAll('div.card');
    allCards.forEach(function (card) {
        card.classList.remove('flipped');
        elPreviousCard = null;
        flippedCouplesCount = 0;
    });
}
function getUserName() {
    var userName = localStorage.getItem('userName');
    if (userName === null || userName == "") {
        userName = prompt('please enter your name:');
        userName = userName.toUpperCase();
        localStorage.setItem('userName', userName);
        document.querySelector('.messege').innerHTML = `if you're not ${userName} click here`;
        document.querySelector('.userName').innerHTML = `Welcome, ${userName}. Nice to see you!`;
        return;
    }
    else {
        document.querySelector('.messege').innerHTML = `if you're not ${userName} click here`;
        document.querySelector('.userName').innerHTML = `Welcome back, ${userName}. Nice to see you!`;
        return userName;
    }
}
function newUser() {
    localStorage.setItem('userName', "");
    getUserName();
}


