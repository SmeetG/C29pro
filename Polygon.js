class Polygon {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
          
      }
      this.image = loadImage(Polygon.png);
      this.body = Bodies.rectangle(x, y,50,50,options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4)
      stroke("green")
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
      
      
      polygon = Bodies.circle(50,200,20);
    world.add(world,polygon);
    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    }
  };
   