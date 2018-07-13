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


var c = document.getElementById("panda");
var ctx = c.getContext("2d");
ctx.strokeStyle = "black";
ctx.beginPath();
// body in white
ctx.moveTo(110,110);
ctx.lineTo(93,190);
ctx.lineTo(201,111);
ctx.lineTo(110,110);
ctx.lineTo(46,164);
ctx.lineTo(31,206);
ctx.lineTo(59,190);
ctx.lineTo(93,190);
ctx.lineTo(175,245);
ctx.lineTo(192,207);
ctx.lineTo(150,151);
ctx.moveTo(193,120);
ctx.lineTo(205,180);
ctx.lineTo(192,207);
ctx.moveTo(175,245);
ctx.lineTo(182,311);
ctx.lineTo(162,314);
ctx.lineTo(170,286);
ctx.lineTo(170,260);
ctx.lineTo(155,246);
ctx.lineTo(125,240);
ctx.lineTo(93,190);
ctx.moveTo(162,314);
ctx.lineTo(125,344.5);
ctx.lineTo(210,345);
ctx.lineTo(182,311);
ctx.moveTo(206,111);
ctx.lineTo(270,158);
ctx.lineTo(248,178);
ctx.lineTo(234,232);
ctx.lineWidth = 5;
ctx.stroke();
ctx.closePath();

//arm in black
ctx.beginPath();
ctx.moveTo(206,110);
ctx.lineTo(255,270);
ctx.lineTo(294,310);
ctx.lineTo(317,350);
ctx.lineTo(319,360);
ctx.lineTo(270,350);
ctx.lineTo(210,345);
ctx.lineTo(182,311);
ctx.lineTo(175,245);
ctx.lineTo(192,207);
ctx.lineTo(205,180);
ctx.lineTo(193,120);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
ctx.closePath();

//head in white
ctx.beginPath();
ctx.moveTo(280,295);
ctx.lineTo(360,170);
ctx.lineTo(400,204);
ctx.lineTo(380,232);
ctx.moveTo(332,293);
ctx.lineTo(294,310);
ctx.moveTo(400,204);
ctx.lineTo(422,237);
ctx.lineTo(420,270);
ctx.lineTo(443,286);
ctx.lineTo(411,332);
ctx.lineTo(366,346);
ctx.lineTo(317,350);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
//tail
ctx.moveTo(39,183);
ctx.lineTo(20,172);
ctx.lineTo(19,152);
ctx.lineTo(36,137);
ctx.lineTo(55,138);
ctx.lineTo(61,151);
ctx.lineTo(46,164);
//leg & feet
ctx.moveTo(125,345);
ctx.lineTo(44,330);
ctx.lineTo(16,269);
ctx.lineTo(31,206);
ctx.lineTo(59,190);
ctx.lineTo(93,190);
ctx.lineTo(125,240);
ctx.lineTo(155,246);
ctx.lineTo(170,260);
ctx.lineTo(170,286);
ctx.lineTo(162,314);
//ears
ctx.moveTo(270,158);
ctx.lineTo(272,141);
ctx.lineTo(290,130);
ctx.lineTo(310,130);
ctx.lineTo(315,140);
ctx.lineTo(321,148);
ctx.lineTo(314,170);
ctx.lineTo(287,175);
ctx.lineTo(268,165);

ctx.moveTo(315,140);
ctx.lineTo(320,134);
ctx.lineTo(328,124);
ctx.lineTo(348,125);
ctx.lineTo(362,135);
ctx.lineTo(365,143);
ctx.lineTo(364,156);
ctx.lineTo(357,170);
//eye
ctx.moveTo(380,232);
ctx.lineTo(402,275);
ctx.lineTo(385,308);
ctx.lineTo(337,312);
ctx.lineTo(332,293);
ctx.lineTo(333,254);
ctx.lineTo(380,232);
//Mouth
ctx.moveTo(404,333);
ctx.lineTo(402,322);
ctx.lineTo(410,329);
//nose
ctx.moveTo(428,305);
ctx.lineTo(424,297);
ctx.lineTo(428,287);
ctx.lineTo(438,289);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
ctx.closePath();

//eye ball
ctx.beginPath();
ctx.arc(390, 273, 9, 0, Math.PI * 2, true);
//feet
ctx.moveTo(91,312);
ctx.lineTo(82,289);
ctx.lineTo(102,260);
ctx.lineTo(126,248);
ctx.lineTo(150,250);
ctx.lineTo(165,264);
ctx.lineTo(165,277);
ctx.lineTo(152,267);
ctx.lineTo(114,280);
ctx.lineTo(94,304);
ctx.lineTo(92,321);

ctx.lineWidth = 1;
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
ctx.closePath();
