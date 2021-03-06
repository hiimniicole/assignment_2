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
	fill(21,111,150);
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
	// draw face
	fill(204, 178, 150);
	ellipse(220, 140, 95, 95);
	ellipse(170, 140, 20, 30);
	ellipse(270, 140, 20, 30);

//draw eyes
fill(255, 255, 255);
ellipse(240, 140, 15, 15);
ellipse(200, 140, 15, 15);
fill(0, 0, 0);
ellipse(240, 140, 10, 10);
ellipse(200, 140, 10, 10);
fill(154,204,198);
ellipse(240, 140, 5, 5);
ellipse(200, 140, 5, 5);
//draw mouth
fill(204,127,127);
arc(212, 166, 30, 30, 0, PI+QUARTER_PI, PIE);
	//draw hat
  fill(91, 51, 10);
	rect(180, 98, 85, 20);
	arc(220, 100, 80, 50, 80, PI+QUARTER_PI, CHORD);
	//draw legs
fill(0,0,0);
	rect(220, 270, 40, 130, 10);
	rect(185, 270, 40, 130, 10);
//draw clouds
fill(255, 255,255);
ellipse(56,30,55,60);
ellipse(50,60,55,60);
ellipse(90,80,55,60);
ellipse(50,100,55,60);
ellipse(110,20,55,60);
ellipse(90,30,55,60);
//draw right side clouds
fill(255, 255,255);
ellipse(556,30,55,60);
ellipse(550,60,55,60);
ellipse(590,80,55,60);
ellipse(550,100,55,60);
ellipse(610,20,55,60);
ellipse(590,30,55,60);




//draw strings
fill(random(255), random(255), random(255));
rect(360, 190, 3, 300);
rect(330, 110, 3, 300);
rect(400, 90, 3, 300);

//draw balloons

ellipse(330, 60, 70, 100);
ellipse(360, 150, 70, 100);
ellipse(400, 80, 70, 100);



}
