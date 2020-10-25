const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Gamestate, abcd
function preload(){
    
    getBg();




}

async function getBg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    var hour = responseJSON.datetime.slice(11,13);

   if(hour>07 && hour<17){

    abcd=loadImage("sprites/angrybirdground.png");
   }
    else{
        abcd=loadImage("sprites/bg2.jpg");
    }
}

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;
Gamestate = "ready"
  //  log1 = Bodies.circle(100,100,20);
  //  World.add(world,log1);

    box1 = new Box(500,565,50,50);
    box2 = new Box(650,565,50,50);
    box3 = new WideBox(575,530,200,20);
    box4 = new Box(500,495,50,50);
    box5 = new Box(650,495,50,50);
    box6 = new WideBox(575,450,200,20);
    box7 = new Box(575,425,50,50);
    pig1 = new Pig(575,565,50,50);
    pig2 = new Pig(575,495,50,50);
    egg1 = new Egg(800,565,50,50);
    egg2 = new Egg(850,565,50,50);
    egg3 = new Egg(900,565,50,50);
    bird = new Bird(mouseX,mouseY,50,50);
    ground = new Ground(500,height,1000,20)
    platform = new Ground(75,550,150,250);
    kingpig = new Kingpig(575,400,90,100);
    
    slingshot = new Slingshot(bird.body,{
        x: 130,
        y:335

        
    })
}

function draw(){
  if(abcd){
    background(abcd);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();  
    pig1.display();
    pig2.display();
    bird.display();
    egg1.display();
    egg2.display();
    egg3.display();
    kingpig.display();
    ground.display();
    slingshot.display();
    platform.display();
  }
   
    Engine.update(engine);
  //  console.log(box2.body.position.x);
   // console.log(box2.body.position.y);
   // console.log(box2.body.angle);
    
   
   // ellipseMode(RADIUS);
  //  ellipse(log1.position.x,log1.position.y,20)


}
function mouseReleased() {
  
     
        Gamestate = "released"
        console.log("Inside Mouse Released "+ Gamestate)
        
        slingshot.fly();   
  
}

function mouseDragged(){

   
}