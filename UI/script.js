var canvas;
var butt;

function setup(){
  canvas = createCanvas(windowWidth/2, windowHeight/2);
  butt = new Button('digo');
  canvas.position(windowWidth/4, windowHeight/4);
  // canvas.position((windowWidth-width)/2, (windowHeight-height)/2);
}

function draw(){
  butt.draw();
}
