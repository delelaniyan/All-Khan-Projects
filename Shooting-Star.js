function setup() {
  createCanvas(400, 400);
}

var xPos = 226;
var yPos = 290;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos - 154, yPos - 197, 10, 10);

xPos += -1;
yPos += -2;
};
