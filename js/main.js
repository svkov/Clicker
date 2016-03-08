var money = 0;
var moneyPerClick = 1;
var moneyPerSec = 0;

setInterval(function () {
    'use strict';
    money += moneyPerSec;
    refreshMoney();
}, 1000);

function refreshMoney() {
    'use strict';
    document.getElementById('moneyCounter').innerHTML = money;
}

function incrementMoney() {
    'use strict';
    money += moneyPerClick;
    refreshMoney();
}

function refreshMoneyPerClick() {
    'use strict';
    document.getElementById('moneyPerClick').innerHTML = moneyPerClick;
}

function refreshMoneyPerSec() {
    'use strict';
    document.getElementById('moneyPerSec').innerHTML = moneyPerSec;
}
