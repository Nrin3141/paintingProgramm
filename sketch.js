var button;
var bgcolor;
var sliderGreen;
var sliderRed;
var sliderBlue;
var sliderSize;

function setup(){
  button = createButton("Delete");
  button.parent('button-position');
  var canvas = createCanvas(1600, 700);
  bgcolor = color((242,242,242));
  background(bgcolor);
  canvas.parent('canvas-position');
  button.mousePressed(refresh);
  sliderRed = createSlider(0, 255, 0, 0);
  sliderRed.parent('slider-position');
  sliderGreen = createSlider(0, 255, 0, 0);
  sliderGreen.parent('slider-position');
  sliderBlue = createSlider(0, 255, 0, 0);
  sliderBlue.parent('slider-position');
  var h2 = createElement('h2','Brush Size Control:');
  h2.parent('slider-position');
  sliderSize = createSlider(0, 255, 50, 0);
  sliderSize.parent('slider-position');
  h2.style('margin-right', '30px');
  h2.style('margin-left', '30px');



}

function refresh(){
  clear();
  background(bgcolor);
  ;
}
function draw(){
  cursor(ARROW);
  if (mouseIsPressed) {
    var green = sliderGreen.value();
    var red = sliderRed.value();
    var blue = sliderBlue.value();
    noStroke();
    fill (red, green, blue);
    var size = sliderSize.value();
    ellipse(mouseX, mouseY, size, size);
  }



}
