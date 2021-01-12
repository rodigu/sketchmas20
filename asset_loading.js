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

  assets.addSound('key', 'assets/got_key_soundeffect.mp3');

  // House 0 tiles
  assets.addSprite('chair', 'assets/chair2.png');
  assets.addSprite('wardrobe0', 'assets/wardrobe_front_0.png');
  assets.addSprite('wardrobe1', 'assets/wardrobe_front_1.png');
  assets.addSprite('table', 'assets/table0.png');
  assets.addSprite('table_h', 'assets/table1.png')
  assets.addSprite('void', 'assets/ceiling.png');
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
  assets.addSprite('wall_detailed0', 'assets/wall_house0_90right1.png');
  assets.addSprite('wall_detailed1', 'assets/wall_house0_vertical3.png');
  assets.addSprite('wall_detailed2', 'assets/wall_house0_vertical2.png');
  assets.addSprite('wall_detailed3', 'assets/wall_house0_vertical1.png');
  assets.addSprite('wall_detailed4', 'assets/wall_house0_90right0.png');
  assets.addSprite('wall_detailed5', 'assets/wall_house0_90left1.png');
  assets.addSprite('wall_detailed6', 'assets/wall_house0_bottomleft_cornerpiece1.png');
  assets.addSprite('wall_detailed7', 'assets/wall_house0_topleft_cornerpiece1.png');

  // Player Tiles
  assets.addSprite('player_face_front', 'assets/scrooge_face_front0.png');
  assets.addSprite('player_walk_front_0', 'assets/scrooge_face_front_0.png');
  assets.addSprite('player_walk_front_1', 'assets/scrooge_face_front_1.png');
  assets.addSprite('player_walk_front_2', 'assets/scrooge_face_front_2.png');
  assets.addSprite('player_walk_front_3', 'assets/scrooge_face_front_3.png');
  assets.addSprite('player_walk_front_4', 'assets/scrooge_face_front_4.png');
  assets.addSprite('player_walk_front_5', 'assets/wall_house0_90left1.png');
  assets.addSprite('player_walk_front_6', 'assets/wall_house0_bottomleft_cornerpiece1.png');
  assets.addSprite('player_walk_front_7', 'assets/wall_house0_topleft_cornerpiece1.png');

  assets.addSprite('player_face_left_0', 'assets/scrooge_full_body_0.png');
  assets.addSprite('player_face_left_1', 'assets/scrooge_full_body_1.png');
  assets.addSprite('player_walk_left_0', 'assets/scrooge_full_body_walk.png');
  assets.addSprite('player_walk_left_1', 'assets/scrooge_full_body_walk1.png');
  assets.addSprite('player_walk_left_2', 'assets/scrooge_full_body_walk2.png');
  assets.addSprite('player_walk_left_3', 'assets/scrooge_full_body_walk3.png');
  assets.addSprite('player_walk_left_4', 'assets/scrooge_full_body_walk4.png');
  assets.addSprite('player_walk_left_5', 'assets/scrooge_full_body_walk5.png');

  assets.addSprite('player_face_right', 'assets/scrooge_full_body_faceright.png');
  assets.addSprite('player_walk_right_0', 'assets/scrooge_full_body_walk_right0.png');
  assets.addSprite('player_walk_right_1', 'assets/scrooge_full_body_walk_right1.png');
  assets.addSprite('player_walk_right_2', 'assets/scrooge_full_body_walk_right2.png');
  assets.addSprite('player_walk_right_3', 'assets/scrooge_full_body_walk_right3.png');
  assets.addSprite('player_walk_right_4', 'assets/scrooge_full_body_walk_right4.png');
  assets.addSprite('player_walk_right_5', 'assets/scrooge_full_body_walk_right5.png');

  assets.addSprite('player_walk_back_0', 'assets/scrooge_back_walk0.png');
  assets.addSprite('player_walk_back_1', 'assets/scrooge_back_walk1.png');
  assets.addSprite('player_walk_back_2', 'assets/scrooge_back_walk2.png');
  assets.addSprite('player_walk_back_3', 'assets/scrooge_back_walk3.png');
  assets.addSprite('player_walk_back_4', 'assets/scrooge_back_walk4.png');

  // NPC tileset
  assets.addSprite('ox0', 'assets/ox_full_body.png');

  assets.addSprite('rat0', 'assets/rat_full_body.png');

  assets.addSprite('dragon0', 'assets/dragon_fullbody0.png');
  assets.addSprite('dragon1', 'assets/dragon_fullbody1.png');
  assets.addSprite('dragon2', 'assets/dragon_fullbody2.png');

  assets.addSprite('snake0', 'assets/snake_fullbody.png');

  assets.addSprite('sheep0', 'assets/sheep_fullbody.png');
  assets.addSprite('sheep1', 'assets/sheep_fullbody0.png');
  assets.addSprite('sheep2', 'assets/sheep_fullbody1.png');

  assets.addSprite('tiger0', 'assets/tiger_fullbody.png');

  assets.addSprite('rooster0', 'assets/rooster_fullbody.png');

  assets.addSprite('pig0', 'assets/pig_fullbody.png');

  assets.addSprite('monkey0', 'assets/monkey_fullbody.png');

  assets.addSprite('horse0', 'assets/horse_fullbody.png');

  assets.addSprite('dog0', 'assets/dog_fullbody.png');


  // Misc
  assets.addSprite('letter0', 'assets/letter_plain.png');
  assets.addSprite('letter1', 'assets/letter_2.png');
  assets.addSprite('open_letter', 'assets/letter1_open.png');

}
function loadHouses(){
  current_house = 0;
  room_position = [3,3];
  houses = [];
  let tileset = [
    'void', 'tile_ground0', 'tile_ground0', 'tile_ground0',
    'wall4',  'wall5' , 'wall6',
    'wall7',            'wall8',
    'wall9',  'wall10', 'wall11',
    'wall12', 'wall13', 'wall14', 'wall15',
    'table', 'chair', 'wardrobe0', 'wall_detailed0',
    'wall_detailed1', 'wall_detailed2', 'wall_detailed3',
    'table_h', 'wall_detailed4', 'wall_detailed5',
    'wall_detailed6', 'wall_detailed7'
  ];
  houses.push(new House(7, tileset));
  houses[0].addRoom(3,3,[
  [4, 5, 5, 15, 1, 14, 5, 6],
  [7, 1, 1, 1, 1, 1, 18, 8],
  [15, 1, 1, 1, 1, 1, 1, 8],
  [1, 1, 1, 1, 1, 1, 1, 8],
  [12, 1, 1, 1, 1, 1, 1, 8],
  [7, 1, 1, 1, 1, 1, 1, 8],
  [7, 1, 1, 1, 1, 17, 16, 8],
  [9, 10, 10, 12, 1, 13, 10, 11]
  ]);
  houses[0].addRoom(0,0,[
[27, 5, 21, 5, 5, 5, 20, 5],
[25, 23, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[25, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[25, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 13]
]);
  houses[0].addRoom(1,0,[
[5, 5, 5, 5, 5, 5, 5, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[10, 10, 10, 10, 10, 12, 1, 13]
]);
  houses[0].addRoom(2,0,[
[5, 22, 5, 5, 22, 21, 22, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 13, 10, 10, 10, 12, 1, 1],
[1, 14, 22, 22, 22, 15, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[10, 10, 10, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(3,0,[
[5, 5, 5, 6, 4, 5, 5, 5],
[1, 1, 1, 8, 7, 1, 1, 1],
[1, 1, 1, 8, 7, 1, 1, 1],
[1, 1, 1, 8, 7, 1, 1, 1],
[1, 1, 1, 14, 15, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[12, 1, 1, 1, 1, 1, 1, 13]
]);
  houses[0].addRoom(4,0,[
[5, 5, 5, 5, 5, 5, 5, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[12, 1, 1, 1, 1, 1, 1, 13]
]);
  houses[0].addRoom(5,0,[
[5, 5, 5, 5, 5, 5, 5, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[10, 10, 12, 1, 13, 10, 10, 10]
]);
  houses[0].addRoom(6,0,[
[5, 5, 5, 5, 5, 5, 5, 6],
[1, 1, 1, 1, 1, 1, 16, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[12, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(0,1,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 13, 12, 1, 1, 8],
[7, 1, 1, 14, 15, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(1,1,[
[4, 5, 5, 5, 5, 15, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[9, 10, 10, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(2,1,[
[5, 5, 5, 5, 5, 5, 5, 6],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[10, 10, 10, 10, 10, 10, 10, 11]]);
  houses[0].addRoom(3,1,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 19],
[7, 16, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 19],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(4,1,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 12, 1, 1, 1, 1, 13, 11],
[4, 15, 1, 1, 1, 1, 14, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(5,1,[
[4, 5, 15, 1, 14, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(6,1,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(0,2,[
[7, 1, 1, 1, 1, 1, 1, 8],
[25, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 16, 19],
[7, 1, 1, 1, 1, 1, 1, 8],
[25, 1, 1, 1, 1, 1, 1, 24],
[7, 1, 1, 1, 1, 1, 1, 24],
[25, 1, 1, 1, 1, 1, 1, 24],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(1,2,[
[4, 5, 5, 5, 5, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 17, 19],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 13],
[7, 23, 1, 1, 1, 1, 1, 8],
[9, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(2,2,[
[4, 5, 5, 5, 5, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[15, 1, 1, 1, 1, 1, 1, 14],
[1, 1, 1, 1, 1, 1, 1, 1],
[12, 1, 1, 1, 1, 1, 1, 13],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(3,2,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[12, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 10, 10, 12, 1, 13, 10, 11]
]);
  houses[0].addRoom(4,2,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 17, 1, 8],
[9, 10, 10, 12, 1, 13, 10, 11]
]);
  houses[0].addRoom(5,2,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 17, 24],
[25, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 19],
[25, 1, 1, 1, 1, 1, 1, 24],
[25, 1, 1, 1, 1, 1, 1, 8],
[7, 23, 1, 1, 1, 1, 1, 24],
[9, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(6,2,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 10, 10, 10, 10, 12, 1, 8],
[4, 5, 5, 5, 5, 15, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 13, 10, 10, 10, 11],
[7, 1, 1, 14, 5, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(0,3,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 10, 12, 1, 1, 13, 10, 11],
[4, 5, 15, 1, 1, 14, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 17, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(1,3,[
[4, 21, 5, 5, 5, 6, 0, 0],
[25, 18, 1, 1, 1, 8, 0, 0],
[7, 1, 1, 1, 1, 14, 5, 6],
[25, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 24],
[9, 10, 12, 1, 1, 1, 1, 8],
[0, 0, 7, 1, 1, 1, 23, 24],
[0, 0, 9, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(2,3,[
[4, 5, 5, 5, 20, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 23, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 13],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 17, 1, 8],
[9, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(4,3,[
[27, 5, 5, 15, 1, 14, 20, 6],
[25, 18, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 17, 14],
[25, 1, 1, 1, 1, 1, 1, 1],
[25, 1, 1, 1, 1, 1, 23, 13],
[25, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 19],
[26, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(5,3,[
[4, 5, 5, 5, 5, 5, 5, 6],
[7, 18, 1, 1, 1, 1, 1, 8],
[15, 17, 1, 1, 1, 1, 1, 14],
[1, 1, 1, 1, 1, 1, 1, 1],
[12, 1, 1, 1, 13, 12, 1, 13],
[7, 1, 1, 1, 8, 7, 1, 8],
[7, 1, 1, 1, 8, 7, 1, 8],
[9, 10, 10, 10, 11, 9, 10, 11]
]);
  houses[0].addRoom(6,3,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[12, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(0,4,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 17, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 13],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(1,4,[
[4, 5, 5, 6, 4, 5, 5, 6],
[7, 1, 1, 8, 7, 1, 1, 8],
[15, 17, 1, 8, 7, 1, 1, 8],
[1, 1, 1, 8, 7, 1, 1, 8],
[12, 1, 1, 8, 7, 1, 1, 8],
[7, 1, 1, 14, 15, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(2,4,[
[4, 5, 5, 5, 5, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[9, 10, 10, 10, 10, 12, 1, 8],
[4, 5, 5, 5, 5, 15, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 13, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(3,4,[
[4, 21, 5, 15, 1, 14, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 16, 19],
[7, 1, 1, 1, 1, 1, 1, 8],
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[12, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(4,4,[
[4, 5, 5, 5, 5, 5, 5, 5],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 4, 5, 5, 5],
[7, 1, 1, 1, 9, 10, 10, 10],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[9, 10, 10, 12, 1, 13, 10, 10]
]);
  houses[0].addRoom(5,4,[
[5, 5, 5, 5, 5, 5, 5, 6],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[5, 5, 5, 5, 6, 1, 1, 14],
[10, 10, 10, 10, 11, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 13],
[1, 1, 1, 1, 1, 1, 1, 8],
[10, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(6,4,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[12, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(0,5,[
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 13, 10, 10, 10, 11],
[7, 1, 1, 14, 5, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 13]
]);
  houses[0].addRoom(1,5,[
[4, 5, 5, 5, 5, 5, 5, 6],
[7, 1, 1, 1, 1, 1, 1, 8],
[7, 1, 1, 1, 13, 12, 1, 8],
[7, 1, 1, 16, 8, 7, 1, 8],
[7, 18, 1, 1, 8, 9, 10, 11],
[15, 1, 1, 1, 14, 5, 5, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[10, 10, 10, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(2,5,[
[7, 1, 14, 5, 5, 5, 5, 6],
[25, 1, 1, 1, 1, 1, 1, 24],
[7, 1, 1, 1, 1, 1, 1, 24],
[25, 1, 1, 13, 12, 1, 1, 8],
[7, 1, 1, 8, 7, 1, 1, 8],
[15, 1, 1, 8, 7, 1, 1, 24],
[1, 1, 1, 8, 7, 1, 16, 8],
[10, 10, 10, 11, 26, 10, 10, 11]
]);
  houses[0].addRoom(3,5,[
[7, 1, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 13, 12, 1, 1, 1],
[7, 1, 1, 8, 7, 1, 1, 1],
[7, 1, 1, 8, 7, 1, 1, 1],
[7, 1, 1, 14, 15, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 13]
]);
  houses[0].addRoom(4,5,[
[5, 5, 5, 15, 1, 14, 5, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 16, 1, 16, 1, 16, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[10, 10, 10, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(5,5,[
[5, 5, 5, 5, 5, 5, 5, 5],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 16, 1, 16, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[10, 10, 10, 10, 10, 12, 1, 13]
]);
  houses[0].addRoom(6,5,[
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 13, 10, 10, 10, 11],
[1, 1, 1, 14, 5, 5, 5, 6],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[12, 1, 1, 1, 1, 1, 1, 8]
]);
  houses[0].addRoom(0,6,[
[7, 1, 1, 1, 1, 1, 1, 14],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[9, 10, 10, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(1,6,[
[5, 5, 5, 5, 6, 4, 5, 5],
[1, 1, 1, 1, 8, 7, 1, 1],
[1, 1, 1, 1, 8, 7, 1, 1],
[1, 13, 12, 1, 8, 7, 1, 1],
[1, 8, 7, 1, 8, 7, 1, 1],
[1, 8, 7, 1, 14, 15, 1, 1],
[1, 8, 7, 1, 1, 1, 1, 1],
[10, 11, 9, 10, 10, 10, 10, 10]
]);
  houses[0].addRoom(2,6,[
[5, 5, 5, 6, 27, 5, 21, 5],
[1, 1, 1, 19, 7, 16, 1, 1],
[1, 1, 1, 8, 7, 1, 1, 1],
[1, 1, 1, 14, 15, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 13, 12, 1, 1, 1],
[1, 1, 1, 8, 7, 1, 1, 1],
[10, 10, 10, 11, 26, 10, 10, 10]
]);
  houses[0].addRoom(3,6,[
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[10, 10, 10, 10, 10, 10, 10, 11]
]);
  houses[0].addRoom(4,6,[
[4, 5, 5, 6, 4, 5, 5, 5],
[7, 1, 1, 8, 7, 1, 1, 1],
[7, 1, 1, 14, 15, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 1, 1, 1, 1, 1],
[7, 1, 1, 13, 12, 1, 1, 1],
[7, 1, 1, 8, 7, 1, 1, 1],
[9, 10, 10, 11, 9, 10, 10, 10]
]);
  houses[0].addRoom(5,6,[
[5, 5, 5, 6, 4, 15, 1, 8],
[1, 1, 1, 8, 7, 1, 1, 8],
[1, 1, 1, 14, 15, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 14],
[1, 1, 1, 13, 12, 1, 1, 1],
[1, 1, 1, 8, 7, 1, 1, 13],
[10, 10, 10, 11, 9, 10, 10, 11]
]);
  houses[0].addRoom(6,6,[
[7, 1, 1, 1, 1, 1, 1, 8],
[25, 1, 1, 1, 1, 1, 1, 24],
[7, 1, 1, 1, 1, 1, 1, 8],
[25, 1, 1, 1, 1, 1, 1, 24],
[15, 1, 1, 1, 1, 1, 1, 8],
[1, 1, 1, 1, 1, 1, 1, 24],
[12, 1, 1, 1, 1, 1, 16, 8],
[26, 10, 10, 10, 10, 10, 10, 11]
]);
}
function loadLetters(){
  letters = new Letters();
  letters.addLetter('l1', 3, 4, 3, 3,
    [
    [
      "December 31st, 2020\n" +
      "Dear Mr. Scrooge-squeak,\n" +
      "    I am Ratford, and I am a rat-squeak squeak.\n" +
      "But am not just any rat you will find squeak-zing\n" +
      "through the filthy subway-tracks of the big cities like\n" +
      "New York, no, no, no, squeak. I am the greatest rat who\n" +
      "cleverly won the great race of twelve animals, all much\n" +
      "larger than I, several thousands of years ago. But you\n" +
      "see, even I, the great rat, encounter problems. \n" +
      "Today, we animals have kidnapped you to this house to\n" +
      "address a particular problem we have-squeak. \n"
    ],
    [
      "Before you close this letter and ignore what I am going\n" +
      "to say, let me remind you of your year in 2020...\n" +
      "I hope you know by now that you have not been a very\n" +
      "good person throughout this year-squeak.\n" +
      "Now, usually, we, animal spirits do not meddle with\n" +
      "individual human affairs. However, this time, it seems\n" +
      "that you somehow managed to do something that \n" +
      "even we cannot overlook. You upset Mr. Ox, \n" +
      "who was supposed to be in charge of this coming\n" +
      "year-squeak. He is now locked up in his room, and\n" +
      "we can’t get him out squeak. He says that only you could\n" +
      "get him out on several conditions: \n"
    ],
    [
      "that you bring all the keys hidden with the 11 other\n" +
      "animal spirits found in this household, and \n" +
      "apologize to Mr.Ox-squeak. \n" +
      "I hate to be relying on you, of all people, \n" +
      "however dire situations call for desperate \n" +
      "measures-squeak. \n\n" +
      "Without Mr. Ox we risk losing, squeak, the new year! \n" +
      "Now, I admit that my year was not the best-squeak.\n" +
      "However, I believe it was a better alternative to the end\n" +
      "of the world-squeak! \n"
    ],
    [
      "I hope you will, at the very least, do one good deed this\n" +
      "year and help save next year-squeak. Go find the animal\n" +
      "spirits in this house, using the WASD keys to move-squeak.\n" +
      "The animal spirits will give you the key once you pass by\n" +
      "them-squeak.\n" +
      "\n" +
      "Sincerely yours, \n" +
      "Ratford \n"
    ]]
    , 'letter' + str(~~random(2))
  );
}
function loadEntities(){
  items = new Items();
  entities = new Entities();
  loadLetters();
  let player_cycles = [
    [
      ['player_face_front', 1]
    ],
    [
      ['player_walk_front_0', 5],
      ['player_walk_front_1', 5],
      ['player_walk_front_2', 5],
      ['player_walk_front_3', 5],
      ['player_walk_front_4', 5],
    ],
    [
      ['player_face_left_0', 25],
      ['player_face_left_1', 23],
    ],
    [
      ['player_walk_left_0', 3],
      ['player_walk_left_1', 3],
      ['player_walk_left_2', 3],
      ['player_walk_left_3', 3],
      ['player_walk_left_4', 3],
      ['player_walk_left_5', 3],
    ],
    [
      ['player_face_right', 25],
    ],
    [
      ['player_walk_right_0', 3],
      ['player_walk_right_1', 3],
      ['player_walk_right_2', 3],
      ['player_walk_right_3', 3],
      ['player_walk_right_4', 3],
      ['player_walk_right_5', 3],
    ],
    [
      ['player_walk_back_0', 3]
    ],
    [
      ['player_walk_back_0', 3],
      ['player_walk_back_1', 3],
      ['player_walk_back_2', 3],
      ['player_walk_back_3', 3],
      ['player_walk_back_4', 3],
    ],
  ];
  entities.addEntity('player', 3*TILE, 2*TILE, player_cycles);

  let ent_cycles = [
    [['ox0', 1]]
  ];
  entities.addEntity('ox', 4*TILE, 4*TILE, ent_cycles, 1, 3);
  ent_cycles = [
    [['rat0', 1]]
  ];
  entities.addEntity('rat', TILE, TILE, ent_cycles, 2, 3);
  ent_cycles = [
    [['dragon0', 6], ['dragon1', 6], ['dragon2', 6]]
  ];
  entities.addEntity('dragon', 4*TILE, 6*TILE, ent_cycles, 5, 4);
  ent_cycles = [
    [['snake0', 1]]
  ];
  entities.addEntity('snake', TILE, TILE, ent_cycles, 2, 4);
  ent_cycles = [
    [['sheep0', 15], ['sheep1', 15], ['sheep2', 15]]
  ];
  entities.addEntity('sheep', 6*TILE, TILE, ent_cycles, 4, 6);
  ent_cycles = [
    [['tiger0', 1]]
  ];
  entities.addEntity('tiger', 6*TILE, 6*TILE, ent_cycles, 5, 2);
  ent_cycles = [
    [['rooster0', 1]]
  ];
  entities.addEntity('rooster', 6*TILE, 2*TILE, ent_cycles, 1, 4);
  ent_cycles = [
    [['pig0', 1]]
  ];
  entities.addEntity('pig', TILE, TILE, ent_cycles, 1, 2);
  ent_cycles = [
    [['dog0', 1]]
  ];
  entities.addEntity('dog', 2*TILE, 3*TILE, ent_cycles, 4, 3);
  ent_cycles = [
    [['monkey0', 1]]
  ];
  entities.addEntity('monkey', TILE, 5*TILE, ent_cycles, 6, 2);
  ent_cycles = [
    [['horse0', 1]]
  ];
  entities.addEntity('horse', 4*TILE, 4*TILE, ent_cycles, 3, 4);
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
