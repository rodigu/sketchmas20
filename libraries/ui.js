class Ui{
  constructor(background_ = color(0,0,0)){
    this.background_color = background_;
  }
  draw(){
    background(this.background_color);
  }
}


class Button{
  constructor(text_ = 'start', shape_ = 'rect', positions_ = [width/2, height/2], dimentions_ = [100, 50]){
    this.x = positions_[0];
    this.y = positions_[1];
    if (shape_ == 'rect'){
      this.width = dimentions_[0];
      this.height = dimentions_[1];
    }
    else if (shape_ == 'circle')
      this.radius = dimentions_;
    this.pressed = false;
    this.text = text_;
    this.shape = shape_;
    this.color = color(255);
    this.text_color = color(0);
    this.stroke = 0;
    this.hit_box = new HitBox(this.x, this.y, this.width, this.height);
  }
  draw(){
    fill(this.color);
    if (this.hit_box.pointHit(mouseX, mouseY)) fill(200,100,100);
    if (this.shape == 'circle')
      circle(this.x, this.y, this.radius);
    else if (this.shape == 'rect')
      rect(this.x - (this.width/2), this.y - (this.height/2), this.width, this.height);
    textAlign(CENTER,CENTER);
    fill(this.text_color);
    text(this.text,this.x, this.y);
  }
}
