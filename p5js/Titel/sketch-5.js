let canvX = 500;
let canvY = 300;
let start = 20;
let finish = canvX - (canvX/5);

let spacing = 20;
let segmentSize = 50;
let eyeSize = 12;

let numCaterpillars = 3;
let rupsEinde = [];

let isRacing = false;

function setup() {
  createCanvas(canvX, canvY);
 
  frameRate(3);

  for (let i=0;i<numCaterpillars;i++) {
    rupsEinde.push(start)
  }
}

function draw() {
  background(72);
  road()
  noStroke();
  if (isRacing === true) {
    moveCaterpillars();
  } else { 
    writeStart();
  }

  rupsen();

  checkWinner();
}

function road() {
  stroke(0);
  strokeWeight(1);
  fill("yellow");
  for (let i = 0; i < (canvX / 100) - 1; i++) {
    rect(start + i * 100, (canvY/2) - canvY/40, 40, 20);
  }
  fill("white")
  rect(finish, 0, 20, canvY)
}

function writeStart() {
  textSize(24);
  textAlign(CENTER);
  fill(255);
  noStroke();
  text("🏁 Klik om te starten!", canvX/2, (canvY / 2) - (canvY/20));
}

function rups(x, y, segments) {
  for (let i = 0; i < segments; i += 1) {
    fill("magenta");
    stroke(0);
    strokeWeight(1);
    circle(x, y, 50);
    x += spacing;
  }

  fill(0);
  stroke(255);
  strokeWeight(3);
  circle(x, y - eyeSize, eyeSize);
  circle(x - eyeSize, y - eyeSize, eyeSize);
}

function rupsen() {
  let padding = canvY / numCaterpillars;
  for (let i = 0; i < numCaterpillars; i += 1) {

    let y = (i + 0.5) * padding;
 
    crawl = random(3, 6);

    rups(rupsEinde[i], y, crawl);
  }
}

function mousePressed() {
  isRacing = true;
}

// Move the caterpillars.
function moveCaterpillars() {
  for (let i = 0; i < numCaterpillars; i += 1) {
    let move = round(random(5, 30));
 
    rupsEinde[i] += move;
  }
}

function checkWinner() {
  for (let i = 0; i < rupsEinde.length; i += 1) {
    if (rupsEinde[i] >= finish) {
      textSize(24);
      textAlign(CENTER);
      fill(255);
      noStroke();
      text(`Rups ${i + 1} heeft gewonnen!`,canvX/2,canvY/2);
      noLoop();
    }
  }
}