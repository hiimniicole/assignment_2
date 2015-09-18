function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	// clear the background yelllow
	background(255, 450, 120);

// draw upper body
	fill(251, 225, 198);
	ellipse(315, 240, 20, 20);
	ellipse(143, 265, 20, 20);
	fill(255, 255, 255);
	rect(185, 175, 70, 100, 80, 80, 5, 5);
	push();
	translate(190, 180);
	rotate(radians(35));
	rect(0, 0, 20, 95, 80, 80, 5, 5);
	pop();
	push();
	translate(235, 190);
	rotate(radians(-35));
	rect(0, 0, 20, 75, 80, 80, 5, 5);
	pop();
	rect(275, 230, 40, 20, 80, 5, 5, 5);
	// draw shirt
	fill(0, 0, 0);
	quad(185, 185, 220, 230, 215, 250, 185, 270);
	quad(255, 185, 220, 230, 225, 250, 255, 270);
	fill(171, 26, 31);
	triangle(200, 180, 200, 200, 220, 190);
	triangle(220, 190, 240, 200, 240, 180);
	// draw face
	fill(251, 225, 198);
	ellipse(220, 140, 95, 95);
	ellipse(170, 140, 20, 30);
	ellipse(270, 140, 20, 30);
	// draw hair
	fill(169, 124, 80);
	arc(220, 120, 90, 90, PI, TWO_PI);
	fill(251, 225, 198);
	triangle(220, 100, 210, 150, 230, 150);
}
