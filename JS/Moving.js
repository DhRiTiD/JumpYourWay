class Moving {
    constructor(x,y) {
      var options = {
         isStatic: true
      }
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      noStroke();
      fill("#8C52FF");
      rect(pos.x, pos.y, 53.2, 12);
    }
  };