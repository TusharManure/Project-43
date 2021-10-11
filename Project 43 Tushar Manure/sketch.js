var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

var movesound
var successsound

// Jointer
var join;



function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  spacecraft = createSprite(700,440);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.25;

  
  iss = createSprite(700,200);
  iss.addImage(issimg);
  iss.scale = 0.35;
}

function draw() {
  background(bg);

  successsound= new Audio("sucess.wav");
  movesound= new Audio("sc.wav");

  // To Mantain Jointer With Iss
  iss.x===join.x
  iss.y===join.y

  // Jointer To Joint Iss And SC
  join= createSprite(640,210,20,20)
  join.visible = false;

  spacecraft.addImage(scimg);
  if(!hasDocked){
     // Iss Shaking
     iss.x = iss.x + random(-0.5,0.5);

     //SpaceCraft Shaking
     spacecraft.x = spacecraft.x + random(-2,2);

     

    
     
  // Spacecraft Control   
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
   
    movesound.play();
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 2;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 2;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
      spacecraft.y = spacecraft.y +2;
      
  }
  
 
}



if(spacecraft.isTouching(join)){
  hasDocked = true;
   textSize(25);
   fill("white")
     text("Docking Successful!",displayWidth/2,700);
     iss.x = iss.x + random(0,0);
     //successsound.playbackRate = 2;
     //successsound.play();
   }  else{
     textSize(35);
     text("Docking In Process",displayWidth/2,700);

   }
  drawSprites();
}


