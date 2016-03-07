var money = 0;
var moneyPerClick = 1;
var moneyPerSec = 0;

var swordBuyed = false;

function refreshMoney() {
    'use strict';
    document.getElementById('moneyCounter').innerHTML = money;
}

function incrementMoney() {
    'use strict';
    money += moneyPerClick;
    refreshMoney();
}

function buySword() {
    'use strict';
    var price = 50;
    if (money < price) {
        alert('You didn\'t have enough money');
        return;
    }
    if (swordBuyed) {
        alert('You already buy it!');
        return;
    }
    money -= price;
    swordBuyed = true;
    moneyPerClick += 1;
    drawSword();
    refreshMoney();
}

