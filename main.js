var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath()
ctx.lineWidth = 2;
ctx.strokeStyle = "grey";
ctx.rect(250, 150, 300, 120);
ctx.stroke();

ctx.lineWidth = 5;

ctx.beginPath()
ctx.strokeStyle = "blue";
ctx.arc(300, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "yellow";
ctx.arc(350, 220, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "black";
ctx.arc(400, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "green";
ctx.arc(450, 220, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.strokeStyle = "red";
ctx.arc(500, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();
