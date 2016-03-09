var chance = 0;
var rat = {
    needSuccess: 1,
    prise: 10,
    startChance: 0.5,
    successDivider: 10,
    name: 'rat'
}

var goblin = {
    needSuccess: 2,
    prise: 50,
    startChance: 0.5,
    successDivider: 10,
    name: 'goblin'
}

function checkSuccess(need) {
    if(success < need) {
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

function killMob(mob) {
    'use strict';
    if(!checkSuccess(mob.needSuccess)){
        makeMessage('You need more success for this action!');
        return;
    }
    chance = mob.startChance;
    chance += success / mob.successDivider;
    if(chance >= 1) {
        chance = 0.99;
    }
    if (Math.random() < chance) {
        win(mob.prise);
        makeMessage('You kill '+mob.name+'!');
        makeMessage('Your chance to win was '+chance);
        makeMessage('You win '+mob.prise+' coin');
    } else {
        lose(mob.needSuccess);
        makeMessage('You lose '+mob.name);
        makeMessage('You lost '+mob.needSuccess+' success');
    }
    refreshAll();
    chance = 0;
}

function chanceToKillMob(mob) {
    if(!checkSuccess(mob.needSuccess)){
        var name = mob.name[0].toUpperCase();
        for(var i = 1; i < mob.name.length; i++){
            name += mob.name[i];
        }
        makeMessage(name+' is to strong for you');
        return;
    }
    chance = mob.startChance;
    chance += success / mob.successDivider;
    if(chance >= 1) {
        chance = 0.99;
    }
    makeMessage('You can kill '+mob.name+' with chance '+chance);
    chance = 0;
}