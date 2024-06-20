let posizioneX
let posizioneY


function setup() {
	createCanvas(windowWidth, windowHeight)

	posizioneX = width/2
	posizioneY = height/2

	velocitaX = 9
	velocitaY = 5


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function draw() {
	background(255)

	posizioneX = posizioneX + velocitaX
	posizioneY = posizioneY + velocitaY

	if(posizioneX >= width) {
		velocitaX = -velocitaX
	}

	if(posizioneX < 0) {
		velocitaX = -velocitaX
	}

	if(posizioneY >= height) {
		velocitaY = -velocitaY
	}

	if(posizioneY < 0) {
		velocitaY = -velocitaY
	}



	circle(posizioneX, posizioneY, 100)

}
