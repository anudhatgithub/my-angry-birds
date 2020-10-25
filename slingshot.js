class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
           length:10,
           stiffness:0.01,       
            };
            this.image = loadImage("sprites/slingshot.png");
          this.chain = Matter.Constraint.create(options);
            World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA!= null){

            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x-20,this.chain.pointB.y)
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.pointB.x+20,this.chain.pointB.y)

        }
        image(this.image, 100, 310,70,120)
    }
    fly(){

        this.chain.bodyA = null;

    }
  };


   


