
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,900 );


  paper=new paper(200,200,70);
  
	engine = Engine.create();
	world = engine.world;




 

	

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  

  
paper.display();

 
}
function keyPressed(){
	 if(keyCode=== UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{ x:85,y:-85 })
	 }
}

 