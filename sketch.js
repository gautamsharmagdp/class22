const Engine=Matter.Engine;
 const World=Matter.World;
  const Bodies=Matter.Bodies;
   var myEngine,myWorld,myBody,mybody1;   
function setup() { 
 createCanvas(400,400);
 myEngine=Engine.create();
myWorld=myEngine.world;
 var option ={ isStatic:true }
 myBody=Bodies.rectangle(200,390,300,30,option);
 World.add(myWorld,myBody);
 var option1={restitution:1.0}
mybody1=Bodies.circle(200,200,20,option1);
World.add(myWorld,mybody1);
 }
 function draw() {
 background("black");
 Engine.update(myEngine); 
 fill("blue") ;
 rectMode(CENTER);
 rect(myBody.position.x,myBody.position.y,300,30);
 ellipseMode(RADIUS);
 ellipse(mybody1.position.x,mybody1.position.y,20,20);
 }