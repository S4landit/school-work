function setup() {
  createCanvas(400, 400);
}
let cloudOneX = 50;
let lineXone = 0;
let lineYone = 0;

var r = 60
var g = 30;
var b = 128;
function draw() {
  background(r, g, b)
  frameRate(15);
  fill(255);
  stroke(0);
  circle(350, 50, 100);

  stroke(r, g, b);   
  fill(r, g, b);
  circle(320,50,100);

  stroke(0);
  fill(80);
  triangle(-40,300,50,100, 250,300);
  triangle(100,300,300,100, 500,300);

  fill(255);
  triangle(49, 103, 119, 169, 9, 190);
  triangle(300, 100, 240, 160, 360, 160);

  fill('rgb(50,76,50)');
  rect(0,300, 400, 100);

  stroke(255);
  fill(255);
  ellipse(cloudOneX, 40, 80, 40);
  ellipse(cloudOneX - 80, 100, 60, 20);
  ellipse(cloudOneX + 120, 50, 40, 10);
  circle(cloudOneX + 35, 50, 25
  );

  stroke(0);
  fill("rgb(118,80,72)");
  rect(40, 270, 15, 50);

  fill("green");
  triangle(25, 270, 45, 240 - frameCount % 2000,70, 270);

  fill("rgb(118,80,72)");
  rect(340, 330, 15, 50);

  fill("green");
  triangle(325, 330, 345, 240 - frameCount % 2000, 370, 330);

  stroke(255);
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);

  lineXone = random(0, width);
  lineYone = random(0, height/2); 
  cloudOneX = frameCount % width
}