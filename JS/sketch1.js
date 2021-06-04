const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var  ball, bg;
var engine, world;

function preload(){
  BgI = loadImage("Animation/B.G.png");
}

function setup(){
    
  engine = Engine.create();
  world = engine.world;

  createCanvas(900, 652);
  invPlt = new Box (450, 640, 900);

  b1 = new Box(68, 0, 90);
  b2 = new Box(68, 100, 90);
  b3 = new Box(165, 115, 55);
  b4 = new Box(278, 60, 65);
  b5 = new Box(430, 75, 65);
  b6 = new Box(549, 142, 65);
  //..
  b7 = new Box(643, 368, 110);
  b8 = new Box(660, 470, 72);
  b9 = new Box(313.5, 338, 388);
  b10 = new Box(443, 431, 100 );
  b11 = new Box(162, 645, 103 );
  b12 = new Box(225, 420, 103 );
  b13 = new Box(413, 542, 161 );
  b14 = new Box(413, 655, 161);

  //horizontal normal boxes
  /*h1 = new Hbox(500, 500, 15, 312);
  h2 = new Hbox(210, 544 , 15, 238);*/

  //dropDown/ 
  d1 = new Dropdown(754, 175, 60);
  d2 = new Dropdown(68, 358, 60);

  //moving
  m1 = new Moving(235, 188, 55);
  m2 = new Moving(70, 215, 55);
  m3 = new Moving(645, 554, 50);

  //destruction platfrm' 
  /*
  p1 = new Box(367, 230, 682);
  //p2= new Destruction(225, 593, 15, 150);
  p3= new Box(280, 650, 100);*/

  //destruction boxes
  /*x1 = new Destruction(405, 320, 15);
  x2 = new Destruction(315, 320, 15 );
  x3 = new Destruction(225, 320, 15 );
  x4 = new Destruction(135, 320, 15 );*/

  //appear/dissappear
  a1 = new Ad(355, 147, 55 );
  a2 = new Ad(654, 95, 64 );
  a3 = new Ad(178, 532, 50 );
  a4 = new Ad(125, 465, 40 );
  a5 = new Ad(242, 510, 50 );

  //bouncy
  o1 = new Bouncy(539, 560, 50);

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
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();

  /*  h2.display();
    h1.display();
*/
    d1.display();
    d2.display();

    m1.display();
    m2.display();
    m3.display();

    /*p1.display();
    //p2.display();
    p3.display();

   /* x1.display();
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
    if(keyCode === 39){
      ball.body.position.x += 10;
      console.log(ball.body.position.x);
    }else if(keyCode === 37){
      ball.body.position.x -= 10;
    }else if(keyCode === 32){
      ball.body.position.y -= 5;
    }
}