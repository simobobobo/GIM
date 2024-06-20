let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(windowWidth, windowHeight); // create canvas with window dimensions
  noStroke();
  fill(255); // set the fill color to white
}

function draw() {
  background(0); // set the background color to black
  
  // create a random number of snowflakes each frame
  for (let i = 0; i < 5; i++) { // generate up to 5 snowflakes per frame
    if (random(1) < 0.1) { // with a probability of 10%
      snowflakes.push(new snowflake()); // append snowflake object
    }
  }
  
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(); // update snowflake position
    flake.display(); // draw snowflake
  }
  
  // remove snowflakes that are out of canvas
  snowflakes = snowflakes.filter(flake => flake.posY <= height);
}

// function to handle window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = random(0, width);
  this.posY = random(-50, 0);
  this.size = random(8, 16); // increase size range for larger snowflakes
  this.speed = random(1, 3);
  this.wind = random(-0.5, 0.5);
  
  this.update = function() {
    // move snowflake down
    this.posY += this.speed;
    // move snowflake sideways slightly
    this.posX += this.wind;
  };
  
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
