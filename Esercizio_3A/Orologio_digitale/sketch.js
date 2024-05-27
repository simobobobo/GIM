function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(255)

	let s = second()
	if (s < 10) {
		s = "0" + s
	}

	let m = minute()
	if (m < 10) {
		m = "0" + m
	}


	let h = hour()
	if (h < 10) {
		h = "0" + h
	}


	const txt =  h + ":" + m + ":" + s

	noStroke()
	fill(0)
	rect(0, height/3 * 0, second() / 60 * width, height/3)
	rect(0, height/3 * 1, minute() / 60 * width, height/3)
	rect(0, height/3 * 2, hour() / 24 * width, height/3)
	
	textAlign(CENTER, CENTER)
	textSize(30)
	fill(127.5)
	noStroke()
	text(txt, width/2, height/2)
	
}
