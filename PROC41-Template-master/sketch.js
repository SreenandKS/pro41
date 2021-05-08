const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine = Engine;
var world = World;
var bodies = Bodies;
var body = Body;




var drops,umbrella;
var maxDrops =100;
function preload(){
    
}

function setup(){

    createCanvas(450,700);
  drops = [];
   engine = Engine.create();
	world = engine.world;
   
   
    
    
   umbrella = new Umbrella(300,500,400,400);
    Engine.run(engine);
}

function draw(){
    background("black");
    console.log(drops.length);
    
    if(frameCount%150===0){
   for(var i=0;i<maxDrops;i++){
       drops.push(new Drop(random(0,400),random(0,400),10));
    }
    }
    for(var i=0;i<drops.length;i++){
drops[i].display();
  
    }
    for(var i=0;i<drops.length;i++){
        
        drops[i].updatePosition();    
            }
    umbrella.display();
}   

