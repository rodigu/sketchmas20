function arrayRemove(arr, value) {
  return arr.filter(function(ele){
      return ele != value;
  });
}
class Physics{
  constructor(){
    this.boxes = [];
    this.debug = false;
  }
  addBox(parent_, x_, y_, width_, height_){
    this.boxes.push(new HitBox(this.boxes.length, parent_, x_, y_, width_, height_));
  }
  boxFromId(id_){
    for (let i = 0; i < this.boxes.length; i++)
      if (this.boxes[i].id == id_) return i;
  }
  update(){
    let counter;
    for (counter = this.boxes.length - 1; counter >= 0; counter --){
      let i;
      for (i = this.boxes.length - 1; i >= 0; i --){
        this.boxes[i].colliding = arrayRemove(this.boxes[i].colliding, this.boxes[counter].id);
        this.boxes[counter].colliding = arrayRemove(this.boxes[counter].colliding, this.boxes[i].id);
        if ((this.boxCollide(this.boxes[i], this.boxes[counter]) || this.boxCollide(this.boxes[counter], this.boxes[i]))){
          if ((this.boxCollide(this.boxes[i], this.boxes[counter]) || this.boxCollide(this.boxes[counter], this.boxes[i]))){
            if (this.boxes[i].colliding.indexOf(this.boxes[counter].id) == -1)
              this.boxes[i].colliding.push(this.boxes[counter].id);
            if (this.boxes[counter].colliding.indexOf(this.boxes[i].id) == -1)
              this.boxes[counter].colliding.push(this.boxes[i].id);
          }
        }

      }
      if (this.debug){
        noFill();
        stroke(200, 0, 0);
        if (this.boxes[counter].colliding.length > 0) stroke(0, 0, 200);
        rect(this.boxes[counter].x, this.boxes[counter].y, this.boxes[counter].width, this.boxes[counter].height);
      }
    }
  }
  updateBox(id_){
    let i;
    let counter = this.boxFromId(id_);
    for (i = this.boxes.length - 1; i >= 0; i --){
      this.boxes[i].colliding = arrayRemove(this.boxes[i].colliding, this.boxes[counter].id);
      this.boxes[counter].colliding = arrayRemove(this.boxes[counter].colliding, this.boxes[i].id);
      if ((this.boxCollide(this.boxes[i], this.boxes[counter]) || this.boxCollide(this.boxes[counter], this.boxes[i]))){
        if ((this.boxCollide(this.boxes[i], this.boxes[counter]) || this.boxCollide(this.boxes[counter], this.boxes[i]))){
          if (this.boxes[i].colliding.indexOf(this.boxes[counter].id) == -1)
            this.boxes[i].colliding.push(this.boxes[counter].id);
          if (this.boxes[counter].colliding.indexOf(this.boxes[i].id) == -1)
            this.boxes[counter].colliding.push(this.boxes[i].id);
        }
      }

    }
    if (this.debug){
      noFill();
      stroke(200, 0, 0);
      if (this.boxes[counter].colliding.length > 0) stroke(0, 0, 200);
      rect(this.boxes[counter].x, this.boxes[counter].y, this.boxes[counter].width, this.boxes[counter].height);
    }
  }
  boxCollide(box1, box2){
    return (box1.pointHit(box2.x, box2.y) || box1.pointHit(box2.x, box2.y + box2.height) || box1.pointHit(box2.x + box2.width, box2.y) || box1.pointHit(box2.x + box2.width, box2.y + box2.height)) ? true : false;
  }
}

class HitBox{
  constructor(id_, parent_, x_ = 0, y_ = 0, width_ = 0, height_ = 0){
    this.id = id_;
    this.parent = parent_;
    this.x = x_;
    this.y = y_;
    this.width = width_;
    this.height = height_;
    this.state = [];
    this.colliding = [];
  }
  pointHit(x_, y_){
    return (x_ > this.x && x_ < this.x + this.width && y_ > this.y && y_ < this.y + this.height) ? true : false;
  }
}
