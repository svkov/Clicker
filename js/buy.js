var swordBuyed = false;
var helmetBuyed = false;

var sword = {
    price: 50,
    isBuyed: false,
    moneyPerSecond: 0,
    moneyPerClick: 1,
    draw: drawSword,
    name: 'sword'
}

var helmet = {
    price: 200,
    isBuyed: false,
    moneyPerSecond: 1,
    moneyPerClick: 0,
    draw: drawHelmet,
    name: 'helmet'
}

function buy(equip) {
    if(money < equip.price){
        makeMessage('You didn\'t have enough money');
        return;
    }
    if(equip.isBuyed){
        makeMessage('You already buy it');
        return;
    }
    success += 1;
    money -= equip.price;
    moneyPerClick += equip.moneyPerClick;
    moneyPerSec += equip.moneyPerSecond;
    equip.draw();
    makeMessage('You buy a '+equip.name);
    refreshAll();
}