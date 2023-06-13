const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;

var fruit 
var fruit_con
var rope 

let engine;
let world;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200,680,600,20);

  fruit_con = new Link(rope,fruit);
  rope = new Rope(6,{x:245, y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit );
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  rope.show();
  ellipse(fruit.position.x, fruit.position.y, 30,30);



  ground.show();
   
}




