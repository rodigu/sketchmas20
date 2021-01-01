/*
Takeaways:
- don`t hold back on returning whole objects from functions
- if a function to add entities is inside the class Entities,
  don't name it addEntities, name it add
*/

var canv;
var game_state;
var assets;
var physics;
var entities;
var TILE;
var player;
var houses;
var control;
var current_house;
var room_position;
var items;

function setup(){
  smooth(0);
  TILE = 80;
  frameRate(30);
  noStroke();
  game_state = 0;
  canv = createCanvas(640, 640);
}

function draw(){
  background(20);
  if (frameCount <= 1)
    preload();
  else show();
}
