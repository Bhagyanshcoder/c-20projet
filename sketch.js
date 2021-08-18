var bg,brush,sleep,gym,bath,move,astronaut,drink,eat;



function preload(){
  bg=loadImage("iss.png");
  brush=loadAnimation("brush.png");
  sleep=loadAnimation("sleep.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  bath=loadAnimation("bath1.png","bath2.png");
  move=loadAnimation("move.png","move1.png");
  gym=loadAnimation("gym1.png","gym2.png","gym3.png","gym4.png");
  }

function setup() {
  createCanvas(600,600);

  
  
astronaut=createSprite(300, 300, 50, 50);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;
}


function draw() {
  background(bg);  

if(keyDown(UP_ARROW)){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

}

if(keyDown(LEFT_ARROW)){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

}

if(keyDown("A")){
  astronaut.addAnimation("drinking",drink);
  astronaut.changeAnimation("drinking");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

}

if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

}

if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("W")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving");
  astronaut.y=200;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  astronaut.scale=1;
}


  drawSprites();
}