
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
function preload()
{
  boyImage=loadImage("boy.png")
  treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

boy= new boy(200,450)
stone= new Stone(100,200,10)
ground= new Ground(250,500,width,40)
sling= new Slingshot(stone.body,{x:150,y:370})
tree= new Tree(600,300)
mango= new Mango(600,200,19)
mango2= new Mango(800,200,19)
mango3= new Mango(700,200,19)
mango4= new Mango(750,150,19)
mango5= new Mango(650,150,19)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  tree.display();
  boy.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display()
  mango5.display();
  stone.display();
  ground.display();
  sling.display();
  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
    sling.attach(stone.body)
  }
}
function detectCollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=Lmango.r+Lstone.r){
    Matter.Body.setStatic(Lmango.body,false)
  }
}