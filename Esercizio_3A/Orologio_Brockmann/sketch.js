let secondAngle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  //angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
clear();
translate(width / 2, height / 2);
rotate(-PI/2);




  strokeCap(SQUARE) // per rendere gli stroke squadrati

  strokeWeight(32);
  stroke(0);
  noFill();
  // let oreAngle = map(hr, 0, 12, 0, 360); //map serve a 
  let oreAngle =  TAU / 12 * (hour() % 12) + TAU / 12 / 60 * hour()
  arc(0, 0, 296, 296, 0, oreAngle);

  strokeWeight(64);
  stroke(0);
  noFill();
  // let minutiAngle = map(mn, 0, 60, 0, 360); //map serve a 
  let minutiAngle =  TAU / 60 * minute() + TAU / 60 / 60 * second()
  arc(0, 0, 400, 400, 0, minutiAngle);

  
  // const secondAngleDest = map(sc, 0, 60, 0, 360); //map serve a 
  strokeWeight(128);
  // stroke(0);
  // noFill();
  // secondAngle = secondAngle + (secondAngleDest - secondAngle) * 0.1
  // arc(0, 0, 600, 600, 0, secondAngle);

  const m = (new Date()) .getMilliseconds() / 1000 * TAU / 60
  const secondAngle = TAU / 60 * second() + m
  arc(0, 0, 600, 600, 0, secondAngle);


}