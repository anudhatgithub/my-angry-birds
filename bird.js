class Bird extends BaseClass {
    constructor(x, y, width, height) {
      super(x,y,50,50);
      this.image = loadImage("sprites/bird.png");
      this.smokeimage =  loadImage("sprites/smoke.png");
      this.array = [];
    }
    display(){
      if (Gamestate === "ready"){
        Matter.Body.setPosition(this.body,{
          x:mouseX,
          y:mouseY
        });
        console.log(Gamestate);

      }
      // bird x,y  position[0]
      if(this.body.velocity.x>5 && Gamestate==="released"){

        var position = [this.body.position.x,this.body.position.y];
        this.array.push(position);
      }

      for (let index = 0; index < this.array.length; index++) {
        const pos = this.array[index];
        image(this.smokeimage,pos[0],pos[1],10,10);
      }

      super.display(); 
    }
  };