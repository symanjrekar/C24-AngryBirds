const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box1,ground;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(myEngine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
}