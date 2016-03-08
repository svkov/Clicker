var swordBuyed = false;
var helmetBuyed = false;

function checkPriceAndFlag(price, flag) {
    if (money < price) {
        alert('You didn\'t have enough money');
        return false;
    }
    if (flag) {
        alert('You already buy it!');
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
    money -= price;
    swordBuyed = true;
    moneyPerClick += 1;
    refreshMoneyPerClick();
    drawSword();
    refreshMoney();
}

function buyHelmet() {
    'use strict';
    var price = 1;
    console.log('buy helmet');
    if (!checkPriceAndFlag(price, helmetBuyed)) {
        return;
    }
    money -= price;
    helmetBuyed = true;
    moneyPerSec += 1;
    refreshMoneyPerSec();
    drawHelmet();
    refreshMoney();
}