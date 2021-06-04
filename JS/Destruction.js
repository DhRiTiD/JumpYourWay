class Destruction {
    constructor(x,y,width) {
      var options = {
         isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width, 16.5,options);
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      strokeWeight("5.8");
      stroke("#FFF7AA");
      fill("#FFF064");
      rect(pos.x, pos.y, this.width, 16.5);
    }
  };
  