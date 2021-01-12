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
    if (id_ != 'player'){
      this.didEncounter = false;
      if (this.id === 'ox') this.didEncounter = true;
    }
    else {
      this.keys = 0;
      this.showScoreTimer = 0;
      this.score = () => {
        textSize(200);
        textAlign(CENTER, CENTER);
        strokeWeight(2);
        stroke(200);
        fill(0, 0, 0);
        text(11 - this.keys, width/2, height/2);
        this.showScoreTimer--;
      }
    }
  }
  update(){
    this.count++;
    let dur = this.animation_cycles[this.current_cycle][this.cycle_position];
    if (this.count >= dur[1]){
      this.cycle_position++;
      this.count = 0;
    }
    if (this.cycle_position >= this.animation_cycles[this.current_cycle].length) this.cycle_position = 0;
    if(this.id == 'player'){
      if (this.showScoreTimer > 0){
        this.score();
      }
    }
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
    if (this.list[this.getEntityIndex(id_)].current_cycle == c_) { return; }
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
      if (this.list[i].id != "player" && this.list[i].room_x == room_position[0] && this.list[i].room_y == room_position[1]){
        assets.showSprite(entities.getEntitySprite(te.id), te.x, te.y);
        let pura = this.getEntity('player');
        if (~~((te.x - TILE/2)/(TILE)) === ~~((pura.x - TILE/2)/(TILE)) && ~~((te.y - TILE/2)/(TILE)) === ~~ ((pura.y - TILE/2)/(TILE)) && !te.didEncounter){
          this.list[this.getEntityIndex('player')].keys++;
          this.list[this.getEntityIndex('player')].showScoreTimer = 30;
          this.list[i].didEncounter = true;
          assets.playSound('key');
          console.log(~~((te.x - TILE/2)/(TILE)), ~~((te.y - TILE/2)/(TILE)))
        }
      }
      else if (this.list[i].id == "player"){
        assets.showSprite(entities.getEntitySprite(te.id), te.x, te.y);
      }
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
    this.current_page = 0;
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
          assets.resizeSprite('open_letter', 640);
          assets.showSprite('open_letter', -10, 0);
          // rect(40, 40,  560, 560);
          fill(0, 10);
          noStroke();
          if (mouseX < width/4) fill(200, 250, 200, 20);
          rect(0, 0, width/7, height);
          fill(0, 10);
          if (mouseX > 3*width/4) fill(200, 250, 200, 50);
          rect(6*width/7, 0, width/2, height);
          fill(0);
          textSize(50);
          textAlign(LEFT, TOP);
          textLeading(40);
          text(this.list[i].contents[this.list[i].current_page], 60, 80);
        }
      }
      if (mouseIsPressed && this.list[i].isShowing && frameCount - this.list[i].open_frame > 10){
        if (!didClickLetter) didClickLetter = true;
        this.list[i].open_frame = frameCount;
        if (this.list[i].current_page < this.list[i].contents.length - 1 && mouseX > 3*width/4)
          this.list[i].current_page ++;
        else if(this.list[i].current_page > 0 && mouseX < width/4)
          this.list[i].current_page --;
        else
          this.list[i].isShowing = false;
      }
      if (mouseIsPressed && mouseX < this.list[i].x*TILE + TILE && mouseY < this.list[i].y*TILE + TILE && mouseY > this.list[i].y*TILE && mouseX > this.list[i].x*TILE){
        this.list[i].isShowing = true;
        this.list[i].open_frame = frameCount;
      }
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
 if(entities.getEntity('player').current_cycle === 7)
  entities.setEntityCycle('player', 6);
}
function playerControl(){
  let walk = 3;
  let p = entities.getEntity('player');
  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  if (control['w']){
    entities.setEntityY('player', p.y - 10);
    entities.setEntityCycle('player', 7);
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
  if (entities.getEntity('player').keys >= 11) {
    room_position = [1, 3];
  }
  if (room_position[0] === 1 && room_position[1] === 3){
    showFireworks = true;
  }

  if (frameCount < 20)
    for (let i = 0; i < assets.sprites.length; i++){
      if (assets.sprites[i].id != 'rat0')
        assets.sprites[i].resizeNN(TILE, 0);
      else
        assets.sprites[i].resizeNN(50, 0);
    }

  let th = houses[current_house].rooms[room_position[0]][room_position[1]];
  for (let i = 0; i < th.length; i++){
    for (let j = 0; j < th[i].length; j++){
      fill(1, 14, 64);
      if (th[i][j] > 14)
        assets.showSprite(houses[current_house].tileset[1], j*TILE, i*TILE);
      assets.showSprite(houses[current_house].tileset[th[i][j]], j*TILE, i*TILE);
    }
  }
  items.show();
  entities.show();
  if (room_position[0] === 3 && room_position[1] === 3 && !didClickLetter){
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(200);
    stroke(0);
    strokeWeight(7 - (frameCount/2)%4);
    text("click on letter", 3.5*TILE, 3.8*TILE);
  }
  letters.update();
  if (showFireworks){
    if (random(1) < 0.3) {
      fireworks.push(new Firework());
    }
    for (let i = fireworks.length - 1; i >= 0; i--) {
      fireworks[i].update();
      fireworks[i].show();
      if (fireworks[i].done()) {
        fireworks.splice(i, 1);
      }
    }
    textAlign(CENTER, CENTER);
    textSize(150);
    fill(0, 10);
    text("HAPPY NEW YEAR!", width/2, height/2);
  }
}
