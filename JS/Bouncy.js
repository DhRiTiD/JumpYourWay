class Bouncy {
  constructor(x,y,width) {
    var options = {
       isStatic: true
    }
    this.width = width;
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x,y,width,40,options);
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    noStroke();
    fill("pink");
    rect(pos.x, pos.y, this.width, 40);
  }
};