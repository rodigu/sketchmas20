class Entity{
  constructor(id_, x_, y_, cycles_, roomx_, roomy_){
    this.x = x_;
    this.y = y_;
    this.id = id_;
    this.animation_cycles = cycles_;
    this.current_cycle = 0;
    this.cycle_position = 0;
    this.count = 0;
    this.room_x = roomx_;
    this.room_y = roomy_;
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
  addEntity(id_, x_, y_, cycles_, rx_, ry_){
    this.list.push(new Entity(id_, x_, y_, cycles_, rx_, ry_));
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
  show(){
    for (let i = this.list.length - 1; i >= 0; i--){
      let te = this.list[i];
      this.list[i].update();
      if (this.list[i].id != "player" && this.list[i].room_x == room_position[0] && this.list[i].room_y == room_position[1])
        assets.showSprite(entities.getEntitySprite(te.id), te.x, te.y);
      else if (this.list[i].id == "player") assets.showSprite(entities.getEntitySprite(te.id), te.x, te.y);
    }
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
class Letter{
  constructor(id_, x_, y_, rx_, ry_, c_, sprt_){
    this.id = id_;
    this.x = x_;
    this.y = y_;
    this.room_x = rx_;
    this.room_y = ry_;
    this.contents = c_;
    this.isShowing = false;
    this.sprite = sprt_;
  }
}
class Letters{
  constructor(){
    this.list = [];
  }
  update(){
    for (let i = 0; i < this.list.length; i++){
      if (this.list[i].room_x == room_position[0] && this.list[i].room_y == room_position[1]){
        assets.showSprite(this.list[i].sprite, this.list[i].x*TILE, this.list[i].y*TILE);
        if (this.list[i].isShowing){
          fill(200);
          rect(20, 20, width - 40, height - 40);
          fill(0);
          text(this.list[i].contents, 60, 80);
        }
      }
      if (mouseIsPressed && this.list[i].isShowing)
        this.list[i].isShowing = false;
      if (mouseIsPressed && mouseX < this.list[i].x*TILE + TILE && mouseY < this.list[i].y*TILE + TILE && mouseY > this.list[i].y*TILE && mouseX > this.list[i].x*TILE)
        this.list[i].isShowing = true;
    }
  }
  getLetterIndex(id_){
    for (let i = 0; i < this.list.length; i++)
      if (this.list[i].id == id_) return i;
  }
  addLetter(id_, x_, y_, rx_, ry_, c_, sprt_){
    this.list.push(new Letter(id_, x_, y_, rx_, ry_, c_, sprt_));
  }
  addContentsToLetter(id_, c_){
     this.list[this.getLetterIndex(id_)].contents = c_;
  }
}

function keyPressed(){
  if(frameCount > 2)
    control[key] = true;
}
function keyReleased(){
  if(frameCount > 2)
    control[key] = false;
  if(entities.getEntity('player').current_cycle === 1)
   entities.setEntityCycle('player', 0);
 if(entities.getEntity('player').current_cycle === 3)
  entities.setEntityCycle('player', 2);
  if(entities.getEntity('player').current_cycle === 5)
   entities.setEntityCycle('player', 4);
}
function playerControl(){
  let walk = 3;
  let p = entities.getEntity('player');
  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  if (control['w']){
    entities.setEntityY('player', p.y - 10);
    entities.setEntityCycle('player', 5);
  }
  if (control['a']){
    entities.setEntityX('player', p.x - 10);
    entities.setEntityCycle('player', 3);
  }
  if (control['d']){
    entities.setEntityX('player', p.x + 10);
    entities.setEntityCycle('player', 5);
  }
  if (control['s']){
    entities.setEntityY('player', p.y + 10);
    entities.setEntityCycle('player', 1);
  }

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
  playerControl();
  if (frameCount < 20)
    for (var i = 0; i < assets.sprites.length; i++){
      if (assets.sprites[i].id != 'rat')
        assets.sprites[i].resizeNN(TILE, 0);
      else
        assets.sprites[i].resizeNN(50, 0);
    }
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
  entities.show();
  letters.update();
}
