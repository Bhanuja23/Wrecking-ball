const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box12,box11,box13,box14,box15;
var ball1;
var rope1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
  
    //first
    box1 = new Box(400,100)
    box2 = new Box(400,100)
    box3 = new Box(400,100)
    box4 =new Box(400,100)
    box5 = new Box(400,100)
    box6 = new Box(400,100)
    box7 = new Box(400,100)
   
    //second
    box11 = new Box(470,100)
    box12 = new Box(470,100)
    box13 =new Box(470,100)
    box14 =new Box(470,100)
    box15 = new Box(470,100)
    box16 = new Box(470,100)

    //third
    box21 = new Box(540,100)
    box22 = new Box(540,100)
    box23 =new Box(540,100)
    box24 =new Box(540,100)
    box25 = new Box(540,100)
    //ground

    ground =new Ground(400,height,800,20)

    //ball
     ball1 = new Ball(200,200)
    //
    console.log(ball1)
    rope1 = new Rope(ball1.ball,{x:200,y:10})

 
  
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("cyan")
    stroke("red")
    strokeWeight(2)
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()

    fill("yellow")
    stroke("green")
    strokeWeight(2)
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()

    fill("pink")
    stroke("blue")
    strokeWeight(2)
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()




  ball1.display()


  ground.display()
   
  rope1.display()

}


function mouseDragged(){
  Matter.Body.setPosition(ball1.ball,{x:mouseX,y:mouseY})
}