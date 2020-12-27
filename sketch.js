var phys;
var canv;
// create entities
// set entity centers and have phys use it as a reference for the boxes
function setup(){
  frameRate(30);
  canv = createCanvas(500, 500);
  phys = new Physics();
  phys.addBox('none', 100, 100, 50, 50);
  phys.addBox('mouse', mouseX, mouseY, 20, 20);
  phys.addBox('none', 150, 150, 30, 30);
  phys.addBox('none', 30, 170, 30, 30);
  canv.position((windowWidth - width)/2, (windowHeight - height)/2);
  phys.debug = true;
}

function draw(){
  background(10);
  phys.boxes[1].x = mouseX - 10;
  phys.boxes[1].y = mouseY - 10;
  phys.update();
  // if (mouseIsPressed) console.log(phys.boxes[0].colliding, phys.boxes[1].colliding);
}
