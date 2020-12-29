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

function setup(){
  smooth(0);
  TILE = 80;
  game_state = 0;
  canv = createCanvas(640, 640);
}

function draw(){
  background(20);
  if (frameCount <= 1)
    preload();
  else show();
}
