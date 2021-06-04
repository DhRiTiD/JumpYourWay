class Ad {
    constructor(x,y,width
      ) {
      var options = {
         isStatic: true
      }
      this.width = width;
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      noStroke();
      fill("#8CCAF7");
      rect(pos.x, pos.y, this.width, 15);
    }
  };