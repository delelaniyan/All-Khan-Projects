
// string = text
function setup() {
  createCanvas(400, 400);
}
var draw = function() {
fill(114, 219, 139);
var howBig = 46;
    howBig = howBig - 26;
    textSize(howBig);
    background(255, 0, 102);
    fill(41, 21, 21);
    var myName = "Amogh";
    var message = myName + "!!!";
    var running = "run for your life!";
    text(message, mouseX - 1, mouseY - 1);
    textSize(howBig * 3);
    text(running, mouseX + 3, mouseY + 57);
    fill(95, 61, 189);
    rect(mouseX, mouseY * 1.4, 394, 108, 71);
    fill(95, 61, 189);
    rect(mouseX, mouseY * 0.08, 391, 108, 71);
};
