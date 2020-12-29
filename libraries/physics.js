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
  update(boxes){
    let counter;
    for (counter = boxes.length - 1; counter >= 0; counter --){
      let i;
      for (i = boxes.length - 1; i >= 0; i --){
        boxes[i].colliding = arrayRemove(boxes[i].colliding, boxes[counter].id);
        boxes[counter].colliding = arrayRemove(boxes[counter].colliding, boxes[i].id);
        if ((this.boxCollide(boxes[i], boxes[counter]) || this.boxCollide(boxes[counter], boxes[i]))){
          if ((this.boxCollide(boxes[i], boxes[counter]) || this.boxCollide(boxes[counter], boxes[i]))){
            if (boxes[i].colliding.indexOf(boxes[counter].id) == -1)
              boxes[i].colliding.push(boxes[counter].id);
            if (boxes[counter].colliding.indexOf(boxes[i].id) == -1)
              boxes[counter].colliding.push(boxes[i].id);
          }
        }

      }
      if (this.debug){
        noFill();
        stroke(200, 0, 0);
        if (boxes[counter].colliding.length > 0) stroke(0, 0, 200);
        rect(boxes[counter].x, boxes[counter].y, boxes[counter].width, boxes[counter].height);
      }
    }
    return boxes;
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
