p5.Image.prototype.resizeNN = function (w, h) {
  "use strict";

  // Locally cache current image's canvas' dimension properties:
  const {width, height} = this.canvas;

  // Sanitize dimension parameters:
  w = ~~Math.abs(w), h = ~~Math.abs(h);

  // Quit prematurely if both dimensions are equal or parameters are both 0:
  if (w === width && h === height || !(w | h))  return this;

  // Scale dimension parameters:
  w || (w = h*width  / height | 0); // when only parameter w is 0
  h || (h = w*height / width  | 0); // when only parameter h is 0

  const img = new p5.Image(w, h), // creates temporary image
        sx = w / width, sy = h / height; // scaled coords. for current image

  this.loadPixels(), img.loadPixels(); // initializes both 8-bit RGBa pixels[]

  // Create 32-bit viewers for current & temporary 8-bit RGBa pixels[]:
  const pixInt = new Int32Array(this.pixels.buffer),
        imgInt = new Int32Array(img.pixels.buffer);

  // Transfer current to temporary pixels[] by 4 bytes (32-bit) at once:
  for (let y = 0; y < h; ) {
    const curRow = width * ~~(y/sy), tgtRow = w * y++;

    for (let x = 0; x < w; ) {
      const curIdx = curRow + ~~(x/sx), tgtIdx = tgtRow + x++;
      imgInt[tgtIdx] = pixInt[curIdx];
    }
  }

  img.updatePixels(); // updates temporary 8-bit RGBa pixels[] w/ its current state

  // Resize current image to temporary image's dimensions:
  this.canvas.width = this.width = w, this.canvas.height = this.height = h;
  this.drawingContext.drawImage(img.canvas, 0, 0, w, h, 0, 0, w, h);

  return this;
};

class GameAssets{
  constructor(sprite_sheet_ = null, sprite_width_ = -1, spacing_ = -1){
    this.sprites = [];
    if (sprite_sheet_ != null){
      if (sprite_width_ < 0) sprite_width_ = 16;
      if (spacing_ < 0) spacing_ = 1;
      this.sprite_sheet = loadImage(sprite_sheet_);
      this.sprite_width = sprite_width_;
      this.sheet_spacing = spacing_;
    }
    this.sounds = [];
  }
  addSound(id_, file_name_){
    this.sounds.push(loadSound(file_name_));
    this.sounds[this.sounds.length - 1].id = id_;
  }
  addSprite(id_, file_name_){
    this.sprites.push(loadImage(file_name_));
    this.sprites[this.sprites.length - 1].id = id_;
  }
  getSoundIndex(id_){
    let counter;
    for (counter = 0; counter < this.sounds.length; counter++)
      if (this.sounds[counter].id == id_) return counter;
    return null;
  }
  getSpriteIndex(id_){
    let counter;
    for (counter = 0; counter < this.sprites.length; counter++)
      if (this.sprites[counter].id == id_) return counter;
    return null;
  }
  playSound(id_){
    this.sounds[this.getSoundIndex(id_)].file.play();
  }
  showSprite(id_, x_, y_){
    let index = this.getSpriteIndex(id_);
    image(this.sprites[index], x_, y_);
  }
  resizeSprite(id_, scale_){
    this.sprites[this.getSpriteIndex(id_)].resizeNN(0, scale_);
  }
  spriteFromSheet(spritex_, spritey_, x_, y_){
    image(this.sprite_sheet.get(spritey_*(this.sprite_width+this.sheet_spacing), spritex_*(this.sprite_width+this.sheet_spacing), this.sprite_width, this.sprite_width), x_, y_);
  }
}
