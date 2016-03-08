var chance = 0;

function checkSuccess(need) {
    if(success < need) {
        makeMessage('You need more success for this action!');
        return false;
    } else {
        return true;
    }
}

function win(prise) {
    money += prise;
}

function lose(punish) {
    success -= punish;
}

function killRat() {
    'use strict';
    var need = 1;
    if(!checkSuccess(need)){
        return;
    }
    chance = 0.5;
    chance += success / 10;
    if(chance >= 1) {
        chance = 0.99;
    }
    if (Math.random() > chance) {
        win(10);
        makeMessage('You kill rat!');
        makeMessage('Your chance to win was '+chance);
        makeMessage('You win '+10+' coin');
    } else {
        lose(need);
        makeMessage('You lose rat');
        makeMessage('You lost '+need+' success');
    }
    refreshAll();
    chance = 0;
}
