
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(200,200,50)
bob2=new Bob(300,200,50)
bob3=new Bob(400,200,50)
bob4=new Bob(500,200,50)
bob5=new Bob(600,200,50)
roof=new Roof(400,100,500,30)
rope1=new Rope(bob1.body,roof.body,bobDiameter*2,0)
rope2=new Rope(bob2.body,roof.body,bobDiameter*2,0)
rope3=new Rope(bob3.body,roof.body,bobDiameter*2,0)
rope4=new Rope(bob4.body,roof.body,bobDiameter*2,0)
rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
  rope1.display();

  drawSprites();
 
}



