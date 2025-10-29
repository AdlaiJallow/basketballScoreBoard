let scoreHomeValue = document.querySelector(".score-value-home");
let scoreAwayValue = document.querySelector(".score-value-away");
let homeScore = 0;
let awayScore = 0;

function addOneHome(){
  scoreHomeValue.textContent = homeScore + 1
  homeScore++
}

function addTwoHome() {
  scoreHomeValue.textContent = homeScore + 2
  homeScore += 2
}

function addThreeHome() {
  scoreHomeValue.textContent = homeScore + 3
  homeScore += 3
}

function addOneAway(){
  scoreAwayValue.textContent = awayScore + 1
  awayScore++
}

function addTwoAway() {
  scoreAwayValue.textContent = awayScore + 2
  awayScore += 2
}

function addThreeAway() {
  scoreAwayValue.textContent = awayScore + 3
  awayScore += 3
}

function newGame() {
  scoreHomeValue.textContent = 0;
  scoreAwayValue.textContent = 0;
  homeScore = 0;
  awayScore = 0;
}