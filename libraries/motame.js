class Motame{
  constructor(){
    this.events = [];
    this.scenes = [];
    this.font;
    this.assets = new GameAssets();
    this.current_scene;
    this.player = new Entity('player', 0, 0, [true, false]);
  }
  playerControl(){

  }
  addScene(id_, entities_){
    this.scenes.push(new Scene(id_, entities_, this.assets));
  }
  preload(sprites_, sounds_){
    for (let i = 0; i < sprites_.length; i++){
      this.assets.addSprite(sprites_[i][0], sprites_[i][1]);
    }
    for (let i = 0; i < sound_.length; i++){
      this.assets.addSound(sound_[i][0], sound_[i][1]);
    }
  }
  addEvent(id_){
    this.events.push(new Event(id_));
  }
  getScene(id_){
    for (let i = 0; i < this.scenes.length; i++)
      if (this.scenes[i].id == id_) return i;
  }
  main(){
    this.playerControl();
    this.scenes
  }
}

class Event{
  constructor(id_){
    this.id = id_;
    this.triggered = false;
  }
}

class Entity(){
  constructor(id_, x_, y_, states_, cycles_, phys_){
    this.id = id_;
    this.x = x_;
    this.y = y_;
    this.phys = phys_;
    // array of bool
    this.states = states_;
    this.animation_cycles = [];
    this.current_cycle = 0;
    this.current_cycle_position = 0;
  }
  addCycle(cycle_){
    // takes in an array with the ids of the sprites
    this.animation_cycles.push(cycle);
  }
  update(){
    if (this.current_cycle_position >= this.animation_cycles[this.current_cycle].length) this.current_cycle_position = 0;
    else this.current_cycle_position ++;
  }
}

class Scene{
  constructor(id_, entities_, scene_assets_, tile_size){
    this.assets = scene_assets_;
    this.physics = new Physics();
    this.entities = [];
    this.scene_map = [];
    this.layers = [];
    this.id = id_;
    this.tile_size;
  }
  addEntity(id_, x_, y_, states_, cycles_, phys_){
    this.entities.push(id_, x_, y_, states_, cycles_, phys_);
  }
  addTile(id_, x_, y_, states_, cycles_, layer_ = 0, box_ = false){
    this.scene_map.push(id_);
    this.addEntity(id_, x_*this.tile_size, y_*this.tile_size, states_, cycles_, phys_);
    this.entities[this.entities.length - 1].layer = layer_;
    if (typeof(this.layers[layer]) == "undefined")this.layers[layer] = 1;
    else this.layers[layer]++;
    if (box) this.addHitbox(id_, x_*this.tile_size, y_*this.tile_size, this.tile_size, this.tile_size);
  }
  getEntityIndex(id_){
    for (let i = 0; i < this.entities.length; i++)
      if (this.entities[i].id == id_) return i;
    return null;
  }
  addHitbox(id_, x_, y_, w_, h_){
    this.physics.addBox(id_, this.entities[this.getEntityIndex(id_)].x + x_, this.entities[this.getEntityIndex(id_)].y + y_, w_, h_);
  }
  showEntity(id_){
    let entity = this.entities[this.getEntityIndex(id_)];
    this.assets.showSprite(entity.animation_cycles[entity.current_cycle][entity.current_cycle_position]);
  }
  updateScene(){
    this.physics.update();
  }
  showMap(){

  }
}
