var hr,mn,sc;
var scAngle,hrAngle,mnAngle;

function setup() {
  createCanvas(900,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  strokeWeight(5)
  stroke("yellow");
  fill("red");
  textSize(30);
  text("Time = "+hr+" : "+mn+" : "+sc,580,100);

  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);

  hrAngle=map(hr%12,0,12,0,360);

  mnAngle=map(mn,0,60,0,360);
  translate(400,200);
rotate(-90);

  push();
  rotate(scAngle);
  stroke(128,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
 
  push(); 
 rotate(mnAngle);
 stroke(139,0,0);
 strokeWeight(7);
 line(0,0,80,0);
 pop();

 push();
 rotate(hrAngle);
 stroke(165,42,42);
 strokeWeight(7);
 line(0,0,60,0);
 pop();
 
 strokeWeight(8)
 noFill();
 stroke(255,0,0);
 arc(0,0,300,300,0,scAngle);

 stroke(0,255,0);
 arc(0,0,280,280,0,mnAngle);

 stroke(0,0,255);
 arc(0,0,260,260,0,hrAngle);



}

