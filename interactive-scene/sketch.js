// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x;
let y;
let speed = 5;
let psize = 25;
let fx;
let fy;

function setup() {
  createCanvas(400, 400);
  noStroke();
  
  x = width/2;
  y = height/2;
  fx = random(0, width)
}

function draw() {
  background(220);
  
  drawRec();
  move();
  something();
}

function drawRec() {
  fill("red");
  rect(x, y, psize, 50);
}

function move() {
  if (keyIsDown(68) && x != width-psize) { // go right
    x += speed;
  }
  if (keyIsDown(65) && x > 0) { // go left
    x -= speed;
  }
}

function something() {
  fy = 0
  if (fy < y) {
    square(fx, fy, 20);
    fy++;
  }
}
