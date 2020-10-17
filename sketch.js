var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  go1 = createSprite(800, 100, 50, 80);
  go1.shapeColor = "green";
  go1.debug = true;
  go2 = createSprite(800, 800,80,30);
  go2.shapeColor = "green";
  go2.debug = true;

  go2.velocityY = -5;
  go1.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,fixedRect);
 bounceOff(go1,go2);
  drawSprites();
}
