let homeCount = 0
let homeEl = document.getElementById("home-el")
let awayCount = 0
let awayEl = document.getElementById("away-el")

function plusOneHome() {
    homeCount += 1
    homeEl.textContent = homeCount
}
function plusTwoHome() {
    homeCount += 2
    homeEl.textContent = homeCount
}
function plusThreeHome() {
    homeCount += 3
    homeEl.textContent = homeCount
}
/////

function plusOneAway() {
    awayCount += 1
    awayEl.textContent = awayCount
}
function plusTwoAway() {
    awayCount += 2
    awayEl.textContent = awayCount
}
function plusThreeAway() {
    awayCount += 3
    awayEl.textContent = awayCount
}

// New Game button zero's out scores
function newGame() {
    homeEl.textContent = 0
    awayEl.textContent = 0
}