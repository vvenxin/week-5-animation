var x = 0;
var xspeed = 2;


function setup() {
  createCanvas(800, 600);

}

function draw() {
 	background (200,200,200);
 	noStroke();
 	fill('#ffffff')
 	ellipse(200, 200, 300, 300);
 	ellipse(600, 200, 300, 300);
 	arc(400, 400, 150, 150, 0, PI, CHORD);
 	fill('#000000')
 	ellipse(x, 200, 100, 100);
 	ellipse(x+400, 200, 100, 100);
 	
 	
  	
  if (x > width/2 || x < 0)  {
     	xspeed = -xspeed;
  	}

  x += xspeed;

}

