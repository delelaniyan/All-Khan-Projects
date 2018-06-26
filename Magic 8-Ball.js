function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
fill(20, 16, 20);
ellipse(200, 200, 375, 375);
fill(255, 255, 255);
ellipse(202, 209, 163, 163);
fill(209, 34, 92);


var answer = floor(random(-4, 4));
if (answer < 0) {
    text("No", 193, 180);
    text("NOT YET", 176, 208);
    text("IMPLEMENTED", 159, 238); 
}
else if (answer > 0) {
    text("Yes", 189, 180); 
    text("Absolutely", 176, 208);
    text("CONGRATS", 169, 237); 
}

else if(answer === 0) {
    text("What do you think", 155, 203);
    text("That one's obvious", 154, 233);
}
}
