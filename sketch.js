const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box1 = new Box(200, 100, 40, 50);

    box2 = new Box(150, 100, 20, 30);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill('brown');
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    box1.display();

    box2.display();
}