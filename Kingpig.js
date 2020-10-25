class Kingpig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
   
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/king.png")
      this.visibility=255;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed>5){
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        push();
        tint(255, this.visibility);
    
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }else{
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(85, 255, 0);
        image(this.image,0, 0, this.width, this.height);
        pop();
        
      }
    }
  }