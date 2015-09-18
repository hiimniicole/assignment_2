function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
loop();
}

function draw() {
	// clear the background yelllow
	background(7, 53, 109);

// draw arms
fill(204,178, 150);
	ellipse(315, 240, 20, 20);
	ellipse(143, 265, 20, 20);
//draw shirt
	fill(155,25,32);
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
	// draw face
	fill(204, 178, 150);
	ellipse(220, 140, 95, 95);
	ellipse(170, 140, 20, 30);
	ellipse(270, 140, 20, 30);
	//draw legs
fill(0,0,0);
	rect(220, 270, 40, 130, 10);
	rect(185, 270, 40, 130, 10);
//draw strings
//fill(random(255), random(255), random(255));
rect(360, 190, 3, 300);
rect(330, 110, 3, 300);
rect(400, 90, 3, 300);

//draw balloons
//fill(random(255), random(255), random(255));
ellipse(330, 60, 70, 100);
ellipse(360, 150, 70, 100);
ellipse(400, 80, 70, 100);


}
