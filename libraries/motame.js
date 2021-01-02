class Entity{
  constructor(id_, x_, y_, cycles_){
    this.x = x_;
    this.y = y_;
    this.id = id_;
    this.animation_cycles = cycles_;
    this.current_cycle = 0;
    this.cycle_position = 0;
    this.count = 0;
  }
  update(){
    this.count++;
    let dur = this.animation_cycles[this.current_cycle][this.cycle_position];
    if (this.count >= dur[1]){
      this.cycle_position++;
      this.count = 0;
    }
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
  setEntityCycle(id_, c_){
    if (this.list[this.getEntityIndex(id_)].current_cycle == c_) return;
    this.list[this.getEntityIndex(id_)].cycle_position = 0;
    this.list[this.getEntityIndex(id_)].current_cycle = c_;
    this.list[this.getEntityIndex(id_)].count = 0;
  }
  setEntityCurrentCycle(id_, current_){
    this.list[this.getEntityIndex(id_)].current_cycle = current_;
  }
  getEntitySprite(id_){
    let ent = this.list[this.getEntityIndex(id_)];
    return ent.animation_cycles[ent.current_cycle][ent.cycle_position][0];
  }
}

class Items{
  constructor(){
    this.list = [];
  }
  addItem(id_, x_, y_, cycles_, house_, room_){
    this.list.push(new Entity(id_, x_, y_, cycles_));
    this.list[this.list.length - 1].house = house_;
    this.list[this.list.length - 1].room = room_;
  }
  getItemIndex(id_){
    for (let i = 0; i < this.list.length; i++)
      if (this.list[i].id == id_) return i;
  }
  getItemSprite(item_){
    let ent = item_;
    return ent.animation_cycles[ent.current_cycle][ent.cycle_position][0];
  }
  show(){
    for (let i = 0; i < this.list.length; i++){
      let ci = this.list[i];
      if (ci.room[0] == room_position[0] && ci.room[1] == room_position[1] && ci.house == current_house){
        assets.showSprite(this.getItemSprite(ci), ci.x*TILE, ci.y*TILE);
        this.list[i].update();
      }
    }
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
  let walk = 3;
  let p = entities.getEntity('player');
  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  if (control['a'])
    entities.setEntityX('player', p.x - 10);
  if (control['w'])
    entities.setEntityY('player', p.y - 10);
  if (control['d'])
    entities.setEntityX('player', p.x + 10);
  if (control['s'])
    entities.setEntityY('player', p.y + 10);

  if (p.x > 0 && p.y > 0 && th[~~((p.y + TILE/5)/TILE)]       [~~((p.x + TILE/5)/TILE)] > walk){
    if (control['w'])
      entities.setEntityY('player', p.y+10);
    if (control['a'])
      entities.setEntityX('player', p.x+10);
  }
  if (p.x < width - TILE && p.y > 0 && th[~~((p.y + TILE/5)/TILE)]       [~~((p.x + TILE - TILE/3)/TILE)] > walk){
    if (control['w'])
      entities.setEntityY('player', p.y+10);
    if (control['d'])
      entities.setEntityX('player', p.x-10);
  }
  if (p.x > 0 && p.y < height - TILE && th[~~((p.y + TILE - TILE/10)/TILE)][~~((p.x + TILE/5)/TILE)] > walk){
    if (control['s'])
      entities.setEntityY('player', p.y-10);
    if (control['a'])
      entities.setEntityX('player', p.x+10);
  }
  if (p.x < width - TILE && p.y < height - TILE && th[~~((p.y + TILE - TILE/10)/TILE)][~~((p.x + TILE - TILE/3)/TILE)] > walk){
    if (control['s'])
      entities.setEntityY('player', p.y-10);
    if (control['d'])
      entities.setEntityX('player', p.x-10);
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
  if ((p.y) < -TILE/2){
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

function show(){
  if (keyIsPressed)
    entities.setEntityCycle('player', 1);
  else
    entities.setEntityCycle('player', 0);
  playerControl();
  if (frameCount < 50)
    for (let a = 0; a < assets.sprites.length; a++) assets.sprites[a].resizeNN(TILE);
  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  for (let i = 0; i < th.length; i++){
    for (let j = 0; j < th[i].length; j++){
      fill(189, 114, 64);
      if (th[i][j] == 0)
      rect(j*TILE, i*TILE, TILE, TILE);
      else{
        if (th[i][j] > 14)
          assets.showSprite(houses[current_house].tileset[1], j*TILE, i*TILE)
        assets.showSprite(houses[current_house].tileset[th[i][j]], j*TILE, i*TILE);
      }
    }
  }
  items.show();
  for (let i = entities.list.length - 1; i >= 0; i--){
    let te = entities.list[i];
    entities.list[i].update();
    assets.showSprite(entities.getEntitySprite(te.id), te.x, te.y);
  }
}
