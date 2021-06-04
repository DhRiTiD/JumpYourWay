class Box {
    constructor(x,y,width) {
      var options = {
         isStatic: true
      }
      this.width = width;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,12.5,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      noStroke();
      fill("#EAEEF1");
      rect(pos.x, pos.y, this.width, 12.5);
    }
  };