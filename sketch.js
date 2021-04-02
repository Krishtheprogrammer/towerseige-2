const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var polygon;

function preload(){
  polygon=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(2000,600);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(300,550,2600,30);
    stand=new Stand(700,400,320,20);
    block1=new Block(600,390,30,40);
    block2=new Block(630,390,30,40)
    block3=new Block(660,390,30,40)
    block4=new Block(690,390,30,40)
    block5=new Block(720,390,30,40)
    block6=new Block(750,390,30,40)
    block7=new Block(780,390,30,40)
    block8=new Block(810,390,30,40)
    sblock1=new Block(630,320,30,40)
    sblock2=new Block(660,320,30,40)
    sblock3=new Block(690,320,30,40)
    sblock4=new Block(720,320,30,40)
    sblock5=new Block(750,320,30,40)
    sblock6=new Block(780,320,30,40)
    tblock1=new Block(660,280,30,40)
    tblock2=new Block(690,280,30,40)
    tblock3=new Block(720,280,30,40)
    tblock4=new Block(750,280,30,40)
    fblock1=new Block(690,250,30,40)
    fblock2=new Block(720,250,30,40)
    fiblock=new Block(705,220,30,40)
    ball=Bodies.circle(300,400,40)
    World.add(world,ball)
    sling=new SlingShot(ball,{x:200,y:200})
}
function draw(){
    Engine.update(engine)
    background("white")
    ground.display()
    stand.display()
    fill("orange")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    fill("lightblue")
    sblock1.display()
    sblock2.display()
    sblock3.display()
    sblock4.display()   
    sblock5.display()
    sblock6.display()
    fill("pink")
    tblock1.display()
    tblock2.display()
    tblock3.display()
    tblock4.display()
    fill("yellow")
    fblock1.display()
    fblock2.display()
    fill("lime")
    fiblock.display()
    imageMode(CENTER)
    image(polygon,ball.position.x,ball.position.y,40,40)
    sling.display()


}

function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(ball)
    }
}