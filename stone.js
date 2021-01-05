class stone {
    constructor(x, y) {
      var options = {
        //'isStatic': true,
        'restitution':0.8,
        'friction':1,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.width = 50;
      this.height = 50;      
  
      this.image = loadImage("stone.png");
      
      World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      fill("red");
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
    