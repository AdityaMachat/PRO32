const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var platform, slingShot;
var polygon;
var score=0;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(890,280 , 300,20);

    box1 = new Box(830,235,30,40);
    box2 = new Box(860,235,30,40);
    box3 = new Box(890,235,30,40);
    box4 = new Box(920,235,30,40);
    box5 = new Box(950,235,30,40);

    box6 = new Box(860,195,30,40);
    box7 = new Box(890,195,30,40);
    box8 = new Box(920,195,30,40);

    box9 = new Box(875,155,30,40);
    box10 = new Box(905,155,30,40);

    box11 = new Box(890,125,30,40);

    polygon= Bodies.polygon(50,200,6,25,{
        'density':1.0
    });
    World.add(world,polygon);
    slingshot = new SlingShot(this.polygon,{x:200, y:50});

}

function draw(){
    background(250);
    text("score: "+ score,width-300,50);
    Engine.update(engine);
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();

    box9.display();
    box10.display();

    box11.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();

    box6.score();
    box7.score();
    box8.score();

    box9.score();
    box10.score();

    box11.score();

   
    line(polygon.vertices[0].x,polygon.vertices[0].y,polygon.vertices[1].x,polygon.vertices[1].y);
    line(polygon.vertices[1].x,polygon.vertices[1].y,polygon.vertices[2].x,polygon.vertices[2].y);
    line(polygon.vertices[2].x,polygon.vertices[2].y,polygon.vertices[3].x,polygon.vertices[3].y);
    line(polygon.vertices[3].x,polygon.vertices[3].y,polygon.vertices[4].x,polygon.vertices[4].y);
    line(polygon.vertices[4].x,polygon.vertices[4].y,polygon.vertices[5].x,polygon.vertices[5].y);
    line(polygon.vertices[5].x,polygon.vertices[5].y,polygon.vertices[0].x,polygon.vertices[0].y);
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
	if(keyCode === 32){
		slingshot.attach(this.polygon);
	}
}
