var main = document.getElementById("main");
var ctx = main.getContext("2d");
drawHero();

function drawHero() {
    ctx.fillStyle = "#555";
    ctx.strokeStyle = "#fdfbfb";

    //HEAD
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.quadraticCurveTo(50, 25, 100, 50);
    ctx.moveTo(100, 0);
    ctx.quadraticCurveTo(150, 25, 100, 50);
    ctx.stroke();

    //BODY
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(100, 150);

    //LEFT LEG
    ctx.moveTo(100, 150);
    ctx.lineTo(75, 175);

    //RIGHT LEG
    ctx.moveTo(100, 150);
    ctx.lineTo(125, 175);

    //RIGHT HAND
    ctx.moveTo(100, 75);
    ctx.lineTo(125, 100);

    //LEFT HAND
    ctx.moveTo(100, 75);
    ctx.lineTo(75, 100);
    ctx.stroke();

}

function drawSword() {
    'use strict';
    ctx.beginPath();
    ctx.strokeStyle = '#0dff04';
    ctx.lineWidth = 4;
    ctx.moveTo(75, 100);
    ctx.lineTo(65, 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = '#ff0000';
    ctx.moveTo(55, 80);
    ctx.quadraticCurveTo(100, 80, 40, 50);
    ctx.fill();
}

function reDrawSword() {
    'use strict';
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.moveTo(75, 100);
    ctx.lineTo(65, 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillStyle = '#000';
    ctx.moveTo(55, 80);
    ctx.quadraticCurveTo(100, 80, 40, 50);
    ctx.fill();
}

function drawHelmet() {
    'use strict';
    ctx.fillStyle = '#dbdb0a';
    ctx.beginPath();
    ctx.moveTo(75, 20);
    ctx.lineTo(125, 20);
    ctx.lineTo(100, -30);
    ctx.lineTo(75, 20);
    ctx.fill();
}

function reDrawHelmet() {
    'use strict';
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(75, 20);
    ctx.lineTo(125, 20);
    ctx.lineTo(100, -30);
    ctx.lineTo(75, 20);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.quadraticCurveTo(50, 25, 100, 50);
    ctx.moveTo(100, 0);
    ctx.quadraticCurveTo(150, 25, 100, 50);
    ctx.stroke();
}