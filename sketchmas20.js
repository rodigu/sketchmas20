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
const TILE = 80;
var player;
var houses;
var control;
var current_house;
var room_position;
var items;
var letters;
let gravity;
const fireworks = [];
var showFireworks;
var didClickLetter = false;
var playerSpeed = 10;
var def_flo = 1;
var endPlayed = false;

function setup(){
  smooth(0);
  showFireworks = false;
  masterVolume(0.1);
  frameRate(30);
  gravity = createVector(0, 0.2);
  noStroke();
  game_state = 0;
  canv = createCanvas(640, 640);
  textFont(loadFont('assets/game_over.ttf'));
  textLeading(40);
}

function draw(){
  background(20);
  if (frameCount <= 1)
    preload();
  else show();
}
