class WideBox extends BaseClass{
    constructor(x, y, width, height) {
      super(x,y,width,height);
      this.visibility = 255;
      this.image = loadImage("sprites/log.png");
    }
    display(){
      if (this.body.speed > 3.5) {
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        push();
        tint(255, this.visibility);
    
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      } else {
    
        super.display();
  
    }
    }
  };