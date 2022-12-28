
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var block1_options = {
	restitution:0.5,
	friction:0,
    frictionAir:0.3
}
var block2_options = {
	restitution:0.8,
	friction:1,
    frictionAir:0.1
}
var block3_options = {
	restitution:0.4,
	friction:3,
    frictionAir:0.2
}

	Engine.run(engine);

  block1 = Bodies.circle(220,10,10,block1_options)
  World.add(world,block1)

  block2 = Bodies.rectangle(110,20,15,80,block2_options)
  World.add(world,block2)

  block3 = Bodies.rectangle(350,40,20,50,block3_options)
  World.add(world,block3)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(block1.position.x,block1.position.y,30)
  rect(block2.position.x,block2.position.y,15,80)
  rect(block3.position.x,block3.position.y,20,50)
 
}



