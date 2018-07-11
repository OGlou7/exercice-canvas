
var c = document.getElementById("test");
var ctx = c.getContext("2d");

// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.fillRect(0,50,50,50);
// ctx.fillStyle = "black";
// ctx.fillRect(60,50,50,50);
// ctx.closePath();

// X
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(50,50);
ctx.lineTo(200,200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.moveTo(200,50);
ctx.lineTo(50,200);
ctx.stroke();
ctx.closePath();

var c = document.getElementById("flag");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(30,50);
ctx.lineTo(30,200);

ctx.moveTo(100,50);
ctx.lineTo(100,200);

ctx.moveTo(170,50);
ctx.lineTo(170,200);

ctx.moveTo(240,50);
ctx.lineTo(240,200);

ctx.moveTo(30,50);
ctx.lineTo(240,50);

ctx.moveTo(240,200);
ctx.lineTo(30,200);
ctx.stroke();
ctx.closePath();

var c = document.getElementById("boat");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(100,50);
ctx.lineTo(100,130);

ctx.moveTo(100,50);
ctx.lineTo(150,90);

ctx.moveTo(150,90);
ctx.lineTo(100,90);

ctx.moveTo(5,130);
ctx.lineTo(195,130);

ctx.moveTo(5,130);
ctx.lineTo(30,180);

ctx.moveTo(195,130);
ctx.lineTo(170,180);

ctx.moveTo(170,180);
ctx.lineTo(30,180);
ctx.stroke();
ctx.closePath();

var c = document.getElementById("house");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "#e542c7";
ctx.moveTo(100,50);
ctx.lineTo(40,140);

ctx.moveTo(100,50);
ctx.lineTo(160,140);

ctx.moveTo(40,140);
ctx.lineTo(160,140);

ctx.moveTo(40,140);
ctx.lineTo(40,280);

ctx.moveTo(160,140);
ctx.lineTo(160,280);

ctx.moveTo(40,280);
ctx.lineTo(160,280);
// porte
ctx.moveTo(80,280);
ctx.lineTo(80,230);
ctx.moveTo(120,280);
ctx.lineTo(120,230);
ctx.moveTo(80,230);
ctx.lineTo(120,230);

ctx.stroke();
ctx.closePath();

var c = document.getElementById("boy");
var ctx = c.getContext("2d");
ctx.strokeStyle = "black";
ctx.beginPath();
  // Cercle extérieur
ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
// Bouche (sens horaire)
ctx.moveTo(110,75);
ctx.arc(75, 75, 35, 0, Math.PI, false);
 // Oeil gauche
ctx.moveTo(65, 65);
ctx.arc(60, 65, 5, 0, Math.PI * 2, true);
// Oeil droite
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
//corps
ctx.moveTo(75,125);
ctx.lineTo(75,230);


ctx.stroke();
ctx.closePath();
