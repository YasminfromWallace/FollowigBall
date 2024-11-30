let cor;
let x;
let y;

function setup() {
 createCanvas(700, 1250);
 background(random(0, 150), (0, 150), (0, 150));
 
 
 cor = color(random(150, 255), random(150 ,255), random(150, 255));
 x = (random(0, 400));
 y = (random(0, 400));
}

function draw() {
circle (x, y, 50);
 fill (cor);
 
 if(mouseX < x) {
   x = x - 1}
 if(mouseX > x) {
   x = x + 1 }
 if(mouseY < y) {
   y = y - 1}
 if(mouseY > y) {
   y = y + 1}

 if(mouseIsPressed) {
   cor = color(random(150, 255), random(150 ,255), random(150, 255)) }
}
