const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, myworld;

var ball;
var ground;

function setup() {
  createCanvas(800,400);
  
  //creating engine and world
  engine = Engine.create();
  myworld = engine.world;

  var options = {
    isStatic : true,
    friction : 0.05
  };
  
  //create a body for ground
  
  ground = Bodies.rectangle(400, 380, 800, 20, options);
  World.add(myworld, ground);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position);
var ballOptions={
  restitution:0.8,
  density:1
};

  // creating ball object 
  ball=Bodies.circle(400,200,20,ballOptions)
  World.add(myworld,ball);


}

function draw() {
  background(0);  

  Engine.update(engine);
fill('brown')
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);

fill('white');
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20)


  drawSprites();
}