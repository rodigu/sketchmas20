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
  assets.addSprite('tile_ground0', 'assets/floor_tile.png');
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
  assets.addSprite('player0', 'assets/scrooge_full_body_walk.png');
  assets.addSprite('player1', 'assets/scrooge_full_body_updated.png');
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
    'wall12', 'wall13', 'wall14', 'wall15'
  ];
  houses.push(new House(5, tileset));
  houses[0].addRoom(0,0,[
  [4, 5, 5, 5, 5, 5, 5, 6],
  [7, 2, 2, 2, 2, 2, 2, 8],
  [7, 2, 2, 2, 2, 2, 2, 8],
  [7, 2, 2, 2, 2, 2, 2, 8],
  [9, 10, 12, 2, 2, 2, 2, 8],
  [0, 0, 7, 2, 2, 2, 2, 8],
  [0, 0, 7, 2, 2, 2, 2, 8],
  [0, 0, 9, 10, 1, 1, 10, 11]
  ]);
  houses[0].addRoom(0,1,[
  [0, 0, 4, 5, 1, 1, 5, 6],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [0, 0, 7, 1, 1, 1, 1, 8],
  [5, 5, 15, 1, 1, 1, 1, 8],
  [1, 1, 1, 1, 1, 1, 1, 8]
  ]);
}
function loadEntities(){
  items = new Items();
  entities = new Entities();
  items.addItem('key', 1, 1, [[['player0', 5]]], 0, [1,0]);
  let player_cycles = [
    [['player0', 5], ['player1', 5]]
  ];
  entities.addEntity('player', 3*TILE, 3*TILE, player_cycles);
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
