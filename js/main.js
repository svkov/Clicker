var score = 0;

function incrementScore() {
    'use strict';
    score += 1;
    refreshScore();
}

function refreshScore() {
    'use strict';
    document.getElementById('score').innerHTML = score;
}


