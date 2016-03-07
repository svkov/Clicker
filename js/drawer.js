var main = document.getElementById("main");
var ctx = main.getContext("2d");

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

function drawSword() {
    'use strict';
    ctx.beginPath();
    ctx.strokeStyle = '#afafaf';
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