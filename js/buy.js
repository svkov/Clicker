var swordBuyed = false;
var helmetBuyed = false;

function buy(price, mpk, mps, draw){
    success += 1;
    money -= price;
    moneyPerClick += mpk;
    moneyPerSec += mps;
    draw();
    refreshAll();
}

function checkPriceAndFlag(price, flag) {
    if (money < price) {
        makeMessage('You didn\'t have enough money');
        return false;
    }
    if (flag) {
        makeMessage('You already buy it!');
        return false;
    }
    return true;
}

function buySword() {
    'use strict';
    var price = 50;
    if (!checkPriceAndFlag(price, swordBuyed)) {
        return;
    }
    buy(price, 1, 0, drawSword);
    swordBuyed = true;
    makeMessage('You buy a sword!');
}

function buyHelmet() {
    'use strict';
    var price = 200;
    if (!checkPriceAndFlag(price, helmetBuyed)) {
        return;
    }
    buy(price, 0, 1, drawHelmet);
    helmetBuyed = true;
    makeMessage('You buy a helmet!');
}