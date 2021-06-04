const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var  ball, bg;
var engine, world;

function preload(){
  BgI = loadImage("Images/lev 2.png");
}

function setup(){
    
  engine = Engine.create();
  world = engine.world;

  createCanvas(900, 652);
  invPlt = new Box (450, 640, 900, 12);

  c1 = new Connected (170, 100, 52, 40);
  c2 = new Connected (260, 180, 52, 40);

  b1 = new Box(68, 0, 90, 10);
  b2 = new Box(68, 100, 90, 12);
  b3 = new Box(335, 99, 62, 12);
  b4 = new Box(545, 80, 65, 15);
  b5 = new Box(430, 75, 65, 15);
  b6 = new Box(549, 142, 65, 15);
  //..
  b7 = new Box(643, 368, 110, 15);
  b8 = new Box(660, 470, 72, 15);
  b9 = new Box(313.5, 338, 388, 15);
  b10 = new Box(443, 431, 100, 15);
  b11 = new Box(162, 645, 103, 15);
  b12 = new Box(225, 420, 103, 15);
  b13 = new Box(413, 542, 161, 15);
  b14 = new Box(413, 655, 161, 15);

  //horizontal normal boxes
  h1 = new Box(500, 500, 15, 312);
  h2 = new Box(210, 544 , 15, 238);


  //dropDown
  d1 = new Dropdown(754, 175, 60, 60);
  d2 = new Dropdown(68, 358, 60, 60);

  //moving
  m1 = new Moving(235, 188, 55, 12);
  m2 = new Moving(70, 215, 55, 12);
  m3 = new Moving(645, 554, 50, 12);

  //destruction platfrm'
  p1 = new Destruction(270, 240, 555, 15);
  p2= new Destruction(225, 593, 15, 150);
  p3= new Destruction(280, 650, 100, 15);

  //destruction boxes
  /*x1 = new Destruction(405, 320, 15, 15);
  x2 = new Destruction(315, 320, 15, 15);
  x3 = new Destruction(225, 320, 15, 15);
  x4 = new Destruction(135, 320, 15, 15);*/

  //appear/dissappear
  a1 = new Ad(420, 60, 55, 15);
  a2 = new Ad(622, 125, 60, 15);
  a3 = new Ad(720, 190, 60, 15);
  a4 = new Ad(622, 250, 60, 15);
  a5 = new Ad(242, 510, 50, 15);

  //bouncy
  o1 = new Bouncy(483, 183, 60, 30);

  ball = new Ball(65, 65, 40);

}
function draw() {  
    Engine.update(engine);  
    background(BgI);
    text(mouseX+","+mouseY,mouseX-5,mouseY-5);
  
      //gravity
    //ball.velocityY = 1;
    //ball.velocityY += 0.5; 
     
    invPlt.display();

    c1.display();
    c2.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
   /* b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();

    h2.display();
    h1.display();

    d1.display();
    d2.display();

    m1.display();
    m2.display();
    m3.display();
*/
    p1.display();
  /*  p2.display();
    p3.display();

    x1.display();
    x2.display();
    x3.display();
    x4.display();*/

    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();

    o1.display();

    ball.display();
}

function keyPressed(){
    if(keyDown(RIGHT_ARROW)){
      ball.body.position.x += 5;
    }else if(keyDown(LEFT_ARROW)){
      ball.body.position.x -= 5;
    }
}