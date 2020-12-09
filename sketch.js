
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rect1,rect2,rect3;
function preload()
{
	dustbinimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper (50,40,50);
	ground = new Ground(600,690,1200,20);
	/*rect1 =createSprite(20,620,5,100,);
	rect1.shapeColor = ("red");
	rect2=createSprite(450,670,210,5, {isStatic:true});
	rect2.shapeColor =("red");
	rect3=createSprite(550,620,5,100, {isStatic:true});
	rect3.shapeColor=("red");*/
	dustbinsprite=createSprite(450,600)
	dustbinsprite.addImage(dustbinimage)
	dustbinsprite.scale=0.6;
	rect1body=Bodies.rectangle(360,620,5,100,{isStatic:true})
	World.add(world,rect1body)
	rect2body=Bodies.rectangle(450,670,210,5,{isStatic:true})
	World.add(world,rect2body)
	rect3body=Bodies.rectangle(550,620,5,100,{isStatic:true})
	World.add(world,rect3body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
 paper.display(); 
 ground.display();
 dustbinsprite.display();
  
 /* rect1.display();
  rect2.display();
  rect3.display();*/
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:23,y:-10}) 
}

}
