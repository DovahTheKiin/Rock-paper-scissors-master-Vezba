const rulesButton = document.querySelector(".rules-btn")
const closeButton = document.querySelector(".close-btn")
const rules = document.querySelector(".rules")
const border = document.querySelectorAll(".border")
const chooseSign = document.querySelector(".choose-sign")
const chosenSign = document.querySelector(".chosen-signs")
const shadowBg= document.querySelector(".shadow-bg")

const playAgainBtn = document.querySelector(".play-again-btn")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const rock = document.querySelector(".rock")
const playerSign = document.querySelector(".player-sign")
const houseSign = document.querySelector(".house-sign")
const paperHouse = document.querySelector(".paper-house")
const scissorsHouse = document.querySelector(".scissors-house")
const rockHouse = document.querySelector(".rock-house")
const winLose = document.querySelector(".win-lose")
const winLoseHeader = document.querySelector(".win-lose-header")
const scoreNumber = document.querySelector(".score-number")
const borderChoose = document.querySelectorAll(".choose-border")

rulesButton.addEventListener('click', () => {
    rules.classList.remove("hidden");
    shadowBg.classList.remove("hidden");
})
closeButton.addEventListener('click', () => {
    rules.classList.add("hidden");
    shadowBg.classList.add("hidden");
})
let randomNumber;
function randomNumberFunction() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
}
let scoreValue;
let clicked = false;
for(let i=0;i<borderChoose.length;i++) {
    borderChoose[i].addEventListener('click', () => {
        randomNumberFunction();
        if(borderChoose[i].classList.contains("paper-border")) {
            paper.classList.remove("hidden");
            playerSign.classList.add("paper-chosen");
        }
        if(borderChoose[i].classList.contains("scissors-border")) {
            scissors.classList.remove("hidden");
            playerSign.classList.add("scissors-chosen");
        } 
        if(borderChoose[i].classList.contains("rock-border")) {
            rock.classList.remove("hidden");
            playerSign.classList.add("rock-chosen");
        }
        chooseSign.classList.add("hidden");
        chosenSign.classList.remove("hidden");
        setTimeout(function () {
        if(randomNumber === 1) {
            paperHouse.classList.remove("hidden");
            houseSign.classList.add("paper-chosen");
        }
        if(randomNumber === 2) {
            scissorsHouse.classList.remove("hidden");
            houseSign.classList.add("scissors-chosen");
        }
        if(randomNumber === 3) {
            rockHouse.classList.remove("hidden");
            houseSign.classList.add("rock-chosen");
        }
        setTimeout(function() {
            playerSign.classList.add("left-animation");
            houseSign.classList.add("right-animation");
        },600);
        setTimeout(function() {
            scoreValue = Number(scoreNumber.innerHTML);
            winLose.classList.remove("hidden");
            if(playerSign.classList.contains("paper-chosen") && houseSign.classList.contains("paper-chosen")) {
                winLoseHeader.innerHTML = "DRAW";
            }
            if(playerSign.classList.contains("paper-chosen") && houseSign.classList.contains("scissors-chosen")) {
                winLoseHeader.innerHTML = "YOU LOSE";
                scoreValue = scoreValue - 1;
                scoreNumber.innerHTML = scoreValue;
            }
            if(playerSign.classList.contains("paper-chosen") && houseSign.classList.contains("rock-chosen")) {
                winLoseHeader.innerHTML = "YOU WIN";
                scoreValue = scoreValue + 1;
                scoreNumber.innerHTML = scoreValue;
            }
            if(playerSign.classList.contains("scissors-chosen") && houseSign.classList.contains("scissors-chosen")) {
                winLoseHeader.innerHTML = "DRAW";
            }
            if(playerSign.classList.contains("scissors-chosen") && houseSign.classList.contains("rock-chosen")) {
                winLoseHeader.innerHTML = "YOU LOSE";
                scoreValue = scoreValue - 1;
                scoreNumber.innerHTML = scoreValue;
            }
            if(playerSign.classList.contains("scissors-chosen") && houseSign.classList.contains("paper-chosen")) {
                winLoseHeader.innerHTML = "YOU WIN";
                scoreValue = scoreValue + 1;
                scoreNumber.innerHTML = scoreValue;
            }
            if(playerSign.classList.contains("rock-chosen") && houseSign.classList.contains("rock-chosen")) {
                winLoseHeader.innerHTML = "DRAW";
            }
            if(playerSign.classList.contains("rock-chosen") && houseSign.classList.contains("paper-chosen")) {
                winLoseHeader.innerHTML = "YOU LOSE";
                scoreValue = scoreValue - 1;
                scoreNumber.innerHTML = scoreValue;
            }
            if(playerSign.classList.contains("rock-chosen") && houseSign.classList.contains("scissors-chosen")) {
                winLoseHeader.innerHTML = "YOU WIN";
                scoreValue = scoreValue + 1;
                scoreNumber.innerHTML = scoreValue;
            }
            setTimeout(function() {
                playAgainBtn.disabled = false;
            },300);
        },800);
        }, 500);
    })
}
playAgainBtn.addEventListener('click', () => {
    clicked === true;
    playAgainBtn.disabled = true;
    chooseSign.classList.remove("hidden");
    chosenSign.classList.add("hidden");
    if(!paper.classList.contains("hidden")) {
        paper.classList.add("hidden");
    }
    if(!scissors.classList.contains("hidden")) {
        scissors.classList.add("hidden");
    }
    if(!rock.classList.contains("hidden")) {
        rock.classList.add("hidden");
    }
    if(!paperHouse.classList.contains("hidden")) {
        paperHouse.classList.add("hidden");
    }
    if(!scissorsHouse.classList.contains("hidden")) {
        scissorsHouse.classList.add("hidden");
    }
    if(!rockHouse.classList.contains("hidden")) {
        rockHouse.classList.add("hidden");
    }
    if(playerSign.classList.contains("paper-chosen")) {
        playerSign.classList.remove("paper-chosen");
    } 
    if(playerSign.classList.contains("scissors-chosen")) {
        playerSign.classList.remove("scissors-chosen");
    }
    if(playerSign.classList.contains("rock-chosen")) {
        playerSign.classList.remove("rock-chosen");
    }
    if(houseSign.classList.contains("paper-chosen")) {
        houseSign.classList.remove("paper-chosen");
    }
    if(houseSign.classList.contains("scissors-chosen")) {
        houseSign.classList.remove("scissors-chosen");
    }
    if(houseSign.classList.contains("rock-chosen")) {
        houseSign.classList.remove("rock-chosen");
    }
    playerSign.classList.remove("left-animation");
    houseSign.classList.remove("right-animation");
    winLose.classList.add("hidden");
})
//chooseSign add EventDelegation on it