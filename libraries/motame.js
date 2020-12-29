class Entity{
  constructor(id_, x_, y_, cycles_){
    this.x = x_;
    this.y = y_;
    this.id = id_;
    this.animation_cycles = cycles_;
    this.current_cycle = 0;
    this.cycle_position = 0;
  }
  update(){
    let dur = this.animation_cycles[this.current_cycle][this.cycle_position];
    if (frameCount%dur[1] == 0) this.cycle_position++;
    if (this.cycle_position >= this.animation_cycles[this.current_cycle].length) this.cycle_position = 0;
  }
}
class Entities{
  constructor(){
    this.list = [];
  }
  addEntity(id_, x_, y_, cycles_){
    this.list.push(new Entity(id_, x_, y_, cycles_));
    return this.list[this.list.length - 1];
  }
  getEntityIndex(id_){
    for (let i = 0; i < this.list.length; i++)
      if (this.list[i].id == id_) return i;
  }
  setEntityX(id_, x_){
    this.list[this.getEntityIndex(id_)].x = x_;
  }
  setEntityY(id_, y_){
    this.list[this.getEntityIndex(id_)].y = y_;
  }
  getEntity(id_){
    for (let i = 0; i < this.list.length; i++)
      if (this.list[i].id == id_) return this.list[i];
  }
  setEntityCurrentCycle(id_, current_){
    this.list[this.getEntityIndex(id_)].current_cycle = current_;
  }
  getEntitySprite(id_){
    let ent = this.list[this.getEntityIndex(id_)];
    return ent.animation_cycles[ent.current_cycle][ent.cycle_position][0];
  }
}

function keyPressed(){
  if(frameCount > 2)
    control[key] = true;
}
function keyReleased(){
  if(frameCount > 2)
    control[key] = false;
}
function playerControl(){
  let p = entities.getEntity('player');
  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  if (control['a'])
    entities.setEntityX('player', p.x - 6);
  if (control['w'])
    entities.setEntityY('player', p.y - 6);
  if (control['d'])
    entities.setEntityX('player', p.x + 6);
  if (control['s'])
    entities.setEntityY('player', p.y + 6);
  if (p.x > 0 && p.x < width - TILE && p.y > 0 && p.y < height - TILE){
    if (th[int((p.y + TILE/10)/TILE)][int((p.x + TILE/10)/TILE)] > 0){
      if (control['w'])
        entities.setEntityY('player', p.y+6);
      if (control['a'])
        entities.setEntityX('player', p.x+6);
    }
    if (th[int((p.y + TILE/10)/TILE)][int((p.x + TILE - TILE/10)/TILE)] > 0){
      if (control['w'])
        entities.setEntityY('player', p.y+6);
      if (control['d'])
        entities.setEntityX('player', p.x-6);
    }
    if (th[int((p.y + TILE - TILE/10)/TILE)][int((p.x + TILE/10)/TILE)] > 0){
      if (control['s'])
        entities.setEntityY('player', p.y-6);
      if (control['a'])
        entities.setEntityX('player', p.x+6);
    }
    if (th[int((p.y + TILE - TILE/10)/TILE)][int((p.x + TILE - TILE/10)/TILE)] > 0){
      if (control['s'])
        entities.setEntityY('player', p.y-6);
      if (control['d'])
        entities.setEntityX('player', p.x-6);
    }
  }
  if ((p.x + TILE/2) > (width)){
    entities.setEntityX('player', 1-TILE/2);
    room_position[0]++;
  }
  if ((p.x) < -TILE/2){
    entities.setEntityX('player', width - TILE/2);
    room_position[0]--;
  }
  if ((p.y + TILE/2) > (height)){
    entities.setEntityY('player', 1 - TILE/2);
    room_position[1]++;
  }
  if ((p.y) <  -TILE/2){
    entities.setEntityY('player', height - TILE/2);
    room_position[1]--;
  }
}

class House{
  constructor(ysize_, tileset_){
    this.rooms = [];
    for (let i = 0; i < ysize_; i++)
      this.rooms.push([]);
    this.tileset = tileset_;
  }
  addRoom(x_, y_, map_){
    this.rooms[x_][y_] = map_;
  }
}


function preload(){
  control = {
    'a': false,
    'w': false,
    's': false,
    'd': false
  }
  assets = new GameAssets();
  physics = new Physics();
  entities = new Entities();
  houses = [];
  houses.push(new House(5));
  assets.addSprite('player0', 'assets/g.png');
  houses[0].addRoom(0,0,[
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 1, 2, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0]
  ]);
  houses[0].addRoom(1,0,[
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1]
  ]);
  houses[0].addRoom(0,1,[
    [1, 1, 1, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0],
    [0, 0, 2, 2, 1, 2, 1, 0],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1]
  ]);
  let player_cycles = [
    [['player0', 5]]
  ]
  entities.addEntity('player', 3*TILE, 3*TILE, player_cycles);
  current_house = 0;
  room_position = [0,0];
}

function show(){
  if (mouseIsPressed) console.log(frameRate());
  playerControl();
  assets.resizeSprite('player0', 80);
  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  for (let i = 0; i < th.length; i++){
    for (let j = 0; j < th[i].length; j++){
      if (th[i][j] == 0) fill(30);
      else if (th[i][j] == 1) fill(200);
      else if (th[i][j] == 2) fill(150, 50, 50);
      rect(j*TILE, i*TILE, TILE, TILE);
    }
  }
  for (let i = 0; i < entities.list.length; i++){
    let te = entities.list[i];
    entities.list[i].update();
    assets.showSprite(entities.getEntitySprite(te.id), te.x, te.y);
  }
}
