const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops=100;


var batman

function preload(){
    batmanimg = loadImage("images/Walking frame/walking_1.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

   createCanvas(400,600);
   batman = createSprite(200,500,50,200);
   batman.addImage(batmanimg);
    batman.scale = 0.3;
    
    
}

function draw(){
    background(0,0,0);
    for (var i=0; i<maxDrops; i++) {
        drop = new Drops(random(0,400),random(0,400),1);
    }
    drop.display();
    drawSprites();
}   

