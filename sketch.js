var fixedRect, movingRect
var gameObject1, gameObject2, gameObject3, gameObject4


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityX = 5;

  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -5;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
  
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(fixedRect.y - movingRect.y);

  bounceOff(fixedRect, movingRect);

  drawSprites();
}

