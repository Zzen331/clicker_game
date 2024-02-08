const tickRate = 1000 / 30; // 30 frames per second(fps)
let score = 0;

// Buildings are made from classes here.
let cursor = new Building(15, 0);

// Manual click function, add one point to score per click
function scorePlusPlus() {
    score++;
}

function scoreInc() {
    score += cursor.Product * cursor.amountOwn;
    updatePage();
}

// Everything in the following function updates every tick as set at the top
function updatePage() {
    document.getElementById('score').innerHTML = Math.floor(score);
    document.getElementById('buySingleCursor').innerHTML =
        'Buy Cursor For ' + cursor.cost;
}

setInterval(scoreInc, tickRate);
