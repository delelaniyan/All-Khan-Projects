function setup() {
  createCanvas(400, 400);
}
function draw() {
background(32, 28, 153);

// roof //
fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

// wall // 
fill(255, 255, 255);
rect(60, 150, 280, 207);


imageMode (CENTER);

    for (var j = 5; j < 12; j++) {
    for (var i = 2; i < 10; i++) {
        image(getImage("cute/RoofNorthEast"), i*36, j*31, 42, 53);
    }
}

// door // 
fill(23, 19, 120);
rect(180, 280, 40, 77);

// windows //
fill(20, 20, 222);
stroke(181, 102, 165);
    for(var x = 63; x < 361; x += 63) {
    for (var y = 175; y < 262; y+= 31) {
        rect( x, y, 19, 24);
    }
}

var bush = getImage("cute/TreeShort");
var x = 0;
while ( x < 417 ) {
    image(bush, x, 373);
    x +=76;
}

var sun = getImage("space/star");
var x = 0;
while ( x < 417 ) {
    image(sun, x, 29, 64, 64);
    x +=76;
}
}
