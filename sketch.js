var car,car2,car3,car4,wall;
var rect1,rect2,rect3,rect4;
var g1,g2,g3,g4;
var speed,weight,s,p,t;

function setup() {
  createCanvas(800,400);
 wall=createSprite(200,100,10,800);
 car=createSprite(650,90,30,30);
 car2=createSprite(650,150,30,30);
 car3=createSprite(650,200,30,30);
 car4=createSprite(650,280,30,30);
 rect1=createSprite(50,50,2000,5);
 rect2=createSprite(50,125,2000,5);
 rect3=createSprite(50,225,2000,5);
 rect4=createSprite(50,325,2000,5);
 g1=createSprite(700,87,60,50);
 g2=createSprite(700,150,50,30);
 g3=createSprite(700,200,50,30);
 g4=createSprite(700,280,60,50);


 //random 
  speed=random(-55,-90);  
  s=random(-55,-80);
  t=random(-50,-85);
  p=random(-60,-95);

  weight=random(400,1500);

  car.velocityX=speed;
  car2.velocityX=s;  
  car3.velocityX=t;  
  car4.velocityX=p;


  wall.shapeColor = color ("black");
}

function draw() {
  background("black");


//shape color
car.shapeColor="white";
car2.shapeColor="white";
car3.shapeColor="white";
car4.shapeColor="white";
g1.shapeColor=("red");
g2.shapeColor=("yellow");
g3.shapeColor=("yellow");
g4.shapeColor=("red");

//is touching 
if(wall.x-car.x>(car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/56342;
  if(deformation>180){
car.shapeColor=color("green");
  }
  if(deformation<180 && deformation>100){
  car.shapeColor=color("red");
  }
if(deformation<100){
  car.shapeColor=color("blue");
}
}
if(wall.x-car2.x>(car2.width+wall.width)/2){
  car2.velocityX=0;
  var deformation=0.5 * weight * speed * speed/623832;
  if(deformation>180){
car2.shapeColor=color("blue");
  }
  if(deformation<180 && deformation>100){
  car2.shapeColor=color("yellow");
  }
if(deformation<100){
  car2.shapeColor=color("red");
}
}
if(wall.x-car3.x>(car3.width+wall.width)/2){
  car3.velocityX=0;
  var deformation=0.5 * weight * speed * speed/23455;
  if(deformation>180){
car3.shapeColor=color("red");
  }
  if(deformation<180 && deformation>100){
  car3.shapeColor=color("blue");
  }
if(deformation<100){
  car3.shapeColor=color("yellow");
}
}
if(wall.x-car4.x>(car4.width+wall.width)/2){
  car4.velocityX=0;
  var deformation=0.5 * weight * speed * speed/664252;
  if(deformation>180){
car4.shapeColor=color("yellow");
  }
  if(deformation<180 && deformation>100){
  car4.shapeColor=color("red");
  }
if(deformation<100){
  car4.shapeColor=color("blue");
}
}
  drawSprites();
}
