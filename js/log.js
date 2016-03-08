var log = document.createElement('ul');
log.id = 'log';
document.body.appendChild(log);

var clearLogButton = document.createElement('button');
clearLogButton.innerHTML = 'Clear log';
clearLogButton.setAttribute('onclick', 'clearLog()');
clearLogButton.className = 'clearLog';

document.body.appendChild(clearLogButton);

makeMessage('Game started!');

function makeMessage(message){
    var li = document.createElement('li');
    li.innerHTML = message;
    if(log.childElementCount > 10){
        clearLog();
    }
    document.getElementById('log').appendChild(li);
}

function clearLog() {
    while(log.childElementCount > 0){
        log.removeChild(log.firstElementChild);
    }
}