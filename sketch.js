
var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=-5

  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY=5;
  
  
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 //movingRect.y = World.mouseY;
  bounceOff(movingRect,fixedRect);


 /* if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }*/
 
  drawSprites();
}
 
 




