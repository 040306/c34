
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = new Ball(200,200,70);
mousePos = new MousePos(mouseX,mouseY,1,1);

chain = new Chain(ball.body, mousePos.body)

ground = new Ground(1000, 790, 1200, 30);

building1 = new Building(900,100,70,70);
building2 = new Building(900,100,70,70);  
building3 = new Building(900,100,70,70);
building4 = new Building(900,100,70,70);
building5 = new Building(900,100,70,70);
building6 = new Building(900,100,70,70);
building7 = new Building(800,100,70,70);
building8 = new Building(800,100,70,70);
building9 = new Building(800,100,70,70);
building10 = new Building(800,100,70,70);
building11 = new Building(800,100,70,70);
building12 = new Building(800,100,70,70);
building13 = new Building(700,100,70,70);
building14 = new Building(700,100,70,70);
building15 = new Building(700,100,70,70);
building16 = new Building(700,100,70,70);
building17 = new Building(700,100,70,70);
building18 = new Building(700,100,70,70);
building19 = new Building(700,100,70,70);
building20 = new Building(700,100,70,70);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
mousePos.display()
ball.display()
chain.display()
ground.display()
building1.display()
building2.display()
building3.display()
building4.display()
building5.display()
building6.display()
building7.display()
building8.display()
building9.display()
building10.display()
building11.display()
building12.display()
building13.display()
building14.display()
building15.display()
building16.display()
building17.display()
building18.display()
building19.display()
building20.display()

 
}

function mouseDragged(){
Matter.Body.setPosition(mousePos.body,{x:mouseX,y:mouseY})	
}

