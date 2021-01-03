function loadSprites(){
  assets = new GameAssets();
  // tiles:
  // 0 through 3: walkable tiles
  // 4  5  6
  // 7  0  8
  // 9 10 11
  //
  // - 12     13  -
  //   l      l
  //   9  10  11
  //
  //   8      7
  //   14  5  15
  //

  // House 0 tiles
  assets.addSprite('chair', 'assets/chair.png');
  assets.addSprite('wardrobe0', 'assets/wardrobe_front_0.png');
  assets.addSprite('wardrobe1', 'assets/wardrobe_front_1.png');
  assets.addSprite('table', 'assets/table.png');
  assets.addSprite('tile_ground0', 'assets/floor_tile.png');
  assets.addSprite('tile_ground1', 'assets/g.png');
  assets.addSprite('wall4', 'assets/wall_house_1_cornerpiece.png');
  assets.addSprite('wall5', 'assets/wall_house0_vertical.png');
  assets.addSprite('wall6', 'assets/wall_house0_topright_cornerpiece.png');
  assets.addSprite('wall7', 'assets/wall_house0_90left.png');
  assets.addSprite('wall8', 'assets/wall_house0_90right.png');
  assets.addSprite('wall9', 'assets/wall_house0_bottomleft_cornerpiece.png');
  assets.addSprite('wall10', 'assets/wall_house0_rotated180.png');
  assets.addSprite('wall11', 'assets/wall_house0_bottomright_cornerpiece.png');
  assets.addSprite('wall12', 'assets/wall_house0_bottomleft_innercornerpiece.png');
  assets.addSprite('wall13', 'assets/wall_house0_bottomright_innercornerpiece.png');
  assets.addSprite('wall14', 'assets/wall_house0_topright_innercornerpiece.png');
  assets.addSprite('wall15', 'assets/wall_house0_topleft_innercornerpiece.png');

  // Player Tiles
  assets.addSprite('player_face_left_0', 'assets/scrooge_full_body_0.png');
  assets.addSprite('player_face_left_1', 'assets/scrooge_full_body_1.png');
  assets.addSprite('player_walk_left_0', 'assets/scrooge_full_body_walk.png');
  assets.addSprite('player_walk_left_1', 'assets/scrooge_full_body_walk1.png');

  // NPC tileset
  assets.addSprite('ox', 'assets/ox_full_body.png');
  assets.addSprite('rat', 'assets/rat_full_body.png');

  // Misc
  assets.addSprite('letter0', 'assets/letter_plain.png');
  assets.addSprite('letter1', 'assets/letter_2.png');

}
function loadHouses(){
  current_house = 0;
  room_position = [0,0];
  houses = [];
  let tileset = [
    'tile_ground0', 'tile_ground0', 'tile_ground0', 'tile_ground0',
    'wall4',  'wall5' , 'wall6',
    'wall7',            'wall8',
    'wall9',  'wall10', 'wall11',
    'wall12', 'wall13', 'wall14', 'wall15',
    'table', 'chair', 'wardrobe0'
  ];
  houses.push(new House(5, tileset));
  houses[0].addRoom(0,0,[
  [4, 5, 5, 5, 5, 5, 5, 6],
  [7, 1, 1, 1, 1, 1, 18, 8],
  [7, 16, 1, 1, 1, 1, 18, 8],
  [9, 12, 1, 1, 1, 1, 13, 11],
  [4, 15, 1, 1, 1, 1, 14, 6],
  [7, 17, 17, 1, 1, 1, 18, 8],
  [7, 16, 16, 1, 1, 1, 18, 8],
  [9, 10, 10, 12, 1, 13, 10, 11]
  ]);
  houses[0].addRoom(0,1,[
  [0, 0, 4, 15, 1, 14, 5, 6],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [5, 5, 15, 1, 1, 1, 1, 8],
  [1, 1, 1, 1, 1, 1, 1, 8]
  ]);
  houses[0].addRoom(0,2, [
  [1, 1, 1, 1, 1, 1, 1, 10],
  [1, 1, 1, 1, 1, 1, 1, 10],
  [1, 1, 1, 1, 1, 1, 1, 10],
  [1, 1, 4, 5, 6, 1, 1, 10],
  [1, 1, 7, 0, 8, 1, 1, 10],
  [1, 1, 9, 10, 11, 1, 1, 10],
  [1, 1, 1, 1, 1, 1, 1, 10],
  [10, 10, 10, 10, 10, 10, 10, 11]
  ]);
}
function loadEntities(){
  items = new Items();
  entities = new Entities();
  letters = new Letters();
  letters.addLetter('l1', 3, 4, 0, 0, 'asd', 'letter' + str(~~random(2)));
  let player_cycles = [
    [['player_face_left_0', 20], ['player_face_left_1', 25]], [['player_face_left_1', 5], ['player_walk_left_0', 5], ['player_face_left_1', 5], ['player_walk_left_1', 5]]
  ];
  entities.addEntity('player', 4*TILE, 3*TILE, player_cycles);

  let ent_cycles = [
    [['ox', 1]]
  ];
  entities.addEntity('ox', TILE, TILE, ent_cycles, 0, 1);
  ent_cycles = [
    [['rat', 1]]
  ];
  entities.addEntity('rat', 2*TILE, 2*TILE, ent_cycles, 0, 2);
}

function preload(){
  control = {
    'a': false,
    'w': false,
    's': false,
    'd': false
  }
  loadHouses();
  loadSprites();
  loadEntities();
}
