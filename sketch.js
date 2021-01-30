
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,450,70);

	ground = new Ground(400,600,800,20);

	dustbin1 = new Dustbin(675,585,200,10);
	dustbin2 = new Dustbin(580,540,10,100);
	dustbin3 = new Dustbin(780,540,10,100);

	dustbin4 = new Dustbin(600,540,10,100);
	//dustbin5 = new Dustbin(680,540,10,100);
	dustbin6 = new Dustbin(760,540,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display(); 
  //dustbin5.display();
  dustbin6.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}


}



