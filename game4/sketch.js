/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	gameChar_x = width / 2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
}

function draw() {
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height / 4); // draw some green ground

	// Draw clouds.

	// Draw mountains.

	// Draw trees.

	// Draw canyons

	// Draw collectable items

	// Draw the game character - this must be last

	//begin character drawing

	//body
	stroke(0);
	fill(153, 51, 47);
	triangle(gameChar_x - 13, gameChar_y - 7, gameChar_x + 13, gameChar_y - 7 - 10, gameChar_x, gameChar_y - 64);

	//feet
	fill(71, 43, 12);
	ellipse(gameChar_x - 13, gameChar_y - 7, 20); //left
	ellipse(gameChar_x + 13, gameChar_y - 7 - 10, 20); //right

	//head
	fill(235, 152, 181);
	ellipse(gameChar_x, gameChar_y - 52, 30);

	//mouth
	fill(0);
	ellipse(gameChar_x, gameChar_y - 44, 5 - 2);

	//left eye
	line(gameChar_x - 10, gameChar_y - 52, gameChar_x - 7, gameChar_y - 55);
	line(gameChar_x - 4 - 6, gameChar_y - 52 - 6, gameChar_x - 7, gameChar_y - 55);

	//right eye
	line(gameChar_x + 10 - 6, gameChar_y - 52 - 6, gameChar_x + 7, gameChar_y - 55);
	line(gameChar_x + 4, gameChar_y - 52, gameChar_x + 7, gameChar_y - 55);

	//end character drawing

	//////// Game character logic ///////
	// Logic to move

	if (isLeft) {
		if (gameChar_x > width * 0.2) {
			gameChar_x -= 5;
		}
		else {
			scrollPos += 5;
		}
	}

	if (isRight) {
		if (gameChar_x < width * 0.8) {
			gameChar_x += 5;
		}
		else {
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed() {

	if (key == 'A' || keyCode == 37) {
		isLeft = true;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = true;
	}

}

function keyReleased() {
	if (key == 'A' || keyCode == 37) {
		isLeft = false;
	}

	if (key == 'D' || keyCode == 39) {
		isRight = false;
	}
}
