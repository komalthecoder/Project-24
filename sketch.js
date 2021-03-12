var ball;
var ground;
var rightwall,leftwall,bottomwall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,600,2000,20);

  //creating paper
	ball = new Paper(100,500,20);
	
  //creating dustbin
	rightwall = new DustBin(1352,530,15,100);
  leftwall = new DustBin(1210,530,15,100);
  bottomwall = new DustBin(1281,575,158,15);

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  text(mouseX + "," + mouseY, mouseX, mouseY);
  
  ground.display();
  ball.display();

  //displaying the dustbin
  rightwall.display();
  leftwall.display();
  bottomwall.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95});
  }
}