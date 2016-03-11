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

var armor = {
    price: 1000,
    isBuyed: false,
    moneyPerSecond: 10,
    moneyPerClick: 5,
    draw: drawArmor,
    name: 'armor'
}

var newSkin = {
    price: 10000,
    isBuyed: false,
    moneyPerSecond: 50,
    moneyPerClick: 10,
    draw: drawNewSkin,
    name: 'new skin'
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
    if(equip.name == 'new skin') {
        sword.isBuyed = true;
        helmet.isBuyed = true;
        armor.isBuyed = true;
    }
    success += 1;
    money -= equip.price;
    moneyPerClick += equip.moneyPerClick;
    moneyPerSec += equip.moneyPerSecond;
    equip.draw();
    equip.isBuyed = true;
    makeBuyMessage(equip.name);
    refreshAll();
}

function makeBuyMessage(name){
    var vowel = ['a', 'e', 'o', 'i', 'u'];
    var prefix = 'a';
    if(vowel.indexOf(name[0]) >= 0){
        prefix += 'n';
    }
    makeMessage('You buy '+prefix+' '+name);
}