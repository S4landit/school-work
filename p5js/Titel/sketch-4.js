let sunHeight = 400;
let horizon = 200;

let r = 0;
let g = 0;
function setup() {
  createCanvas(400, 400);
}
function draw() {

  background(r, g, 0);

  fill(255, 135, 5, 60);
  circle(200, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(200, sunHeight, 140);

  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110,95,20);
  triangle(200,400,520,253,350,400); 
 
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400);
 
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

  trees()

  if (sunHeight > 130) {
    sunHeight -=2;
  }
  if (sunHeight < 480) {
    r += 4;
    g += 1;
  }
}

function tree(x,y,size) {
  fill(80,30,20);
  rect(x-size,y,size*2,size*6);
  fill(20,130,5);
  triangle(x-size*3,y,x,y-size*8,x+size*3,y)
}

function treeLine(x) {
  let y = -0.7 * x + 450;
  return y;
}

function trees() {
  let x = 150;
  let y = treeLine(x);
  tree(x, y, 5);

  x = 180;
  y = treeLine(x);
  tree(x, y, 5);
 
  x = 210;
  y = treeLine(x);
  tree(x, y, 5);
}

function keyPressed() {
  redVal=0;
  greenVal = 0;
  sunHeight = 600;
}