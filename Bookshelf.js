function setup() {
  createCanvas(400, 400);
}
function draw() {
    var book = [
{
    title: "The Giver",
    stars: 4
},
{    title: "The Hobbit",
     stars: 3
},
{
    title: "Percy Jackson",
    stars: 4
},
{
    title: "Hunger Games",
    stars: 5
}
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);
rect(0, 236, width, 10);

// draw one book
for(var j = 0; j < book.length; j++) {
        fill(255, 220, 214);
        rect(j*101, j*0+30, 90, 100);
        fill(0);
        text(book[j].title, j*103, j*0+35, 90, 100);
    for (var i = 0; i < book[j].stars; i++) {
        fill(0, 0, 0);
        image(getImage("cute/Star"), i*15+j*101, i*0+98, 25, 38);
    }
}
}
