class Dropdown {
    constructor(x,y,width) {
      var options = {
         isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,60,options);
      this.width = width;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight("5");
      stroke("white");
      fill("#6BF1E1");
      rect(pos.x, pos.y, this.width, 60);
    }
  };