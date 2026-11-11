function setup() {
//creates a canvas 600 pixels wide
//and 400 pixels high
  createCanvas(600, 400);
}
function draw() {
  background(135, 206, 235);

  stroke("orange");
  fill("yellow")
  strokeWeight(10);
  circle(550, 50, 100);

  stroke(0)
  strokeWeight(1)
  fill("green");
  rect(0, 200, 600, 200);

  stroke(0)
  strokeWeight(1)
  fill("grey");
  rect(0, 250, 600, 100);
 
  textSize(75)
  text("🐄", 100, 225)
  text("🚗", mouseX, 300)
}