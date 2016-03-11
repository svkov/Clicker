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

function drawArmor() {
    'use strict';
    ctx.fillStyle = "#0000f4";
    ctx.beginPath();
    ctx.moveTo(90, 70);
    ctx.lineTo(110, 70);
    ctx.lineTo(125, 90);
    ctx.lineTo(110, 95);
    ctx.lineTo(105, 90);
    ctx.lineTo(105, 130);
    ctx.lineTo(95, 130);
    ctx.lineTo(95, 90);
    ctx.lineTo(90, 95);
    ctx.lineTo(75, 85);
    ctx.lineTo(90, 70);
    ctx.fill();
}

function drawNewSkin() {
    'use strict';
    ctx.clearRect(0, 0, 200, 200);
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.fillRect(47.5, 60, 35, 30); //head
    ctx.fill();
    ctx.beginPath();
    ctx.strokeRect(47.5, 60, 35, 30);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillRect(25, 90, 80, 80); //body
    ctx.fill();
    
    ctx.beginPath();
    ctx.strokeRect(25, 90, 80, 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.fillRect(15, 120, 65, 65); //shield
    ctx.fill();
    
    ctx.beginPath();
    ctx.strokeRect(15, 120, 65, 65); //shield
    ctx.stroke();
    
    //lines on helmet
    ctx.strokeStyle = '#000';
    ctx.beginPath();
    ctx.moveTo(60, 65);
    ctx.lineTo(60, 80);
    ctx.moveTo(65, 65);
    ctx.lineTo(65, 80);
    ctx.moveTo(70, 65);
    ctx.lineTo(70, 80);
    ctx.stroke();
    
    //lines on shield
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(47.5, 125);
    ctx.lineTo(47.5, 180);
    ctx.moveTo(20, 152.5);
    ctx.lineTo(75, 152.5);
    ctx.stroke();
    ctx.lineWidth = 1;
    
    //sword
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(105, 150);
    ctx.lineTo(125, 135);
    ctx.lineTo(135, 145);
    ctx.lineTo(115, 160);
    ctx.lineTo(105, 150);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(120, 115);
    ctx.quadraticCurveTo(120, 140, 150, 150);
    ctx.quadraticCurveTo(160, 160, 120, 115);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(140, 140);
    ctx.lineTo(130, 130);
    ctx.lineTo(200, 55);
    ctx.lineTo(200, 75);
    ctx.lineTo(140, 140);
    
    ctx.fill();
}