const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var lama;
var tarzan; 
var foodtruck;
var fiodental; 

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  lama = new Chao(200, 690, 600, 20);

  tarzan = new Rope (6, {x: 245, y: 30});

  foodtruck = Bodies.circle (300, 300, 15);
  Matter.Composite.add(tarzan.body, foodtruck);

  fiodental = new Food (tarzan, foodtruck);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  lama.draw();
  tarzan.draw();
  ellipse(foodtruck.position.x, foodtruck.position.y, 15, 15);
}



