var c = document.getElementById("canon");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "#e542c7";
ctx.arc(60,150,10,0.1*Math.PI,1.7*Math.PI);
ctx.stroke();

ctx.moveTo(70,153);
ctx.lineTo(80,149);
ctx.bezierCurveTo(80,149, 81, 168, 100, 165);

ctx.moveTo(65,142);
ctx.lineTo(76,137);
ctx.bezierCurveTo(76,137, 72, 112, 90, 111);
ctx.lineTo( 168, 100);
ctx.bezierCurveTo(170, 100, 194, 99,244,88);

ctx.moveTo(79,179);
ctx.lineTo(165,124);
ctx.lineTo(180,124);
ctx.lineTo(180,179);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(180, 204, 25,0, Math.PI * 2);
ctx.moveTo(154,203);
ctx.lineTo(103,203);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(79, 204, 25,0, Math.PI * 2);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(180,155);
ctx.bezierCurveTo(180, 155, 194, 144, 254,144);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.bezierCurveTo(242, 88, 238, 116, 254,144);
ctx.stroke();
ctx.closePath();


var c = document.getElementById("boy");
var ctx = c.getContext("2d");
ctx.strokeStyle = "black";
ctx.beginPath();
  // Cercle extérieur
ctx.arc(75, 75, 34, 0, Math.PI * 2, true);

//corps
ctx.moveTo(75,110);
ctx.lineTo(75,180);
ctx.moveTo(75,135);
ctx.lineTo(25,135);
ctx.moveTo(75,135);
ctx.lineTo(125,135);
ctx.moveTo(75,180);
ctx.lineTo(25,195);
ctx.moveTo(75,180);
ctx.lineTo(125,195);

ctx.stroke();
ctx.closePath();
