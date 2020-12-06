const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground;

function setup() {
  createCanvas(400,400);

    engine= Engine.create();
    world= engine.world;  

    var G_option = {
      isStatic :true
    }

    var Ball_option = {
      restitution : 0.6
    }

    ball = Bodies.circle(200,90,25,Ball_option);
    World.add(world,ball);


    ground = Bodies.rectangle(200,380,400,30,G_option);
    World.add(world,ground);

  console.log(ball);
  
  
}

function draw() {
  background("black"); 

  Engine.update(engine);

  ellipseMode(RADIUS);
  rectMode(CENTER);
  fill("red");
  
  rect(ground.position.x,ground.position.y,400,30);


  ellipse(ball.position.x,ball.position.y,25);
  
}
