function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  translate(width / 2, height / 2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();


  strokeCap(SQUARE) // per rendere gli stroke squadrati

  strokeWeight(32);
  stroke(0);
  noFill();
  let oreAngle = map(hr, 0, 12, 0, 360); //map serve a 
  arc(0, 0, 296, 296, 0, oreAngle);

  strokeWeight(64);
  stroke(0);
  noFill();
  let minutiAngle = map(mn, 0, 60, 0, 360); //map serve a 
  arc(0, 0, 400, 400, 0, minutiAngle);

  strokeWeight(128);
  stroke(0);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360); //map serve a 
  arc(0, 0, 600, 600, 0, secondAngle);

}