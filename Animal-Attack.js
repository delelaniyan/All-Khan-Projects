function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noStroke();
var x = 204;
var y = 225;
var faceSize = 282;
var eyes = faceSize/8;
// ears
var earSize=faceSize*1/2;
fill(65, 128, 118);
ellipse(x-faceSize*2/5, y-faceSize*2/5, earSize, earSize);
ellipse(x+faceSize*2/5, y-faceSize*2/5, earSize, earSize);

// face
fill(6, 27, 161);
ellipse(x, y, faceSize, faceSize);

//eyes 

fill(184, 70, 184);
ellipse(x - faceSize / 4, y-faceSize/8, eyes, eyes);
ellipse(x + faceSize / 4, y-faceSize/8, eyes, eyes);

//nose
fill(230, 225, 221);
rect(x-21, y+faceSize/13, faceSize*3/13, faceSize/5);

}
