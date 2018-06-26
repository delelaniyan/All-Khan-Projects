function setup() {
  createCanvas(400, 400);
}
function draw() {
  
var drawFish = function(centerX, centerY, bodyColor1, bodyColor2, bodyColor3) {
var bodyLength = 118;
var bodyHeight = 74;

noStroke();
fill(bodyColor1, bodyColor2, bodyColor3);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

drawFish(199, 100, 232, 189, 82);
drawFish(240, 180, 34, 35, 65);
drawFish(100, 150, 340, 45, 70);
drawFish(100, 326, 90, 99, 99);         
drawFish(331, 150, 13, 45, 67);
drawFish(112, 61, 100, 100, 206);
drawFish(123, 265, 109, 34, 37);
drawFish(262, 257, 90, 300, 30);

var bush = bush.jpg;
var x = 0;
while ( x < 417 ) {
    image(bush, x, 333);
    x +=76;
}
}
