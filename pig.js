class Pig extends BaseClass {
  constructor(x, y, width, height) {

    super(x, y, 50, 50);
    this.image = loadImage("sprites/pig.png");
    this.visibility = 255;
  }

display(){
  if (this.body.speed > 3) {
    World.remove(world, this.body);
    this.visibility = this.visibility - 5;
    push();
    tint(255, this.visibility);

    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    pop();
  } else {

    super.display();

  }
}}


