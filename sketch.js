
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, ObstaclesGroup
var score;
var forestimg;
var background1;

function preload(){
  
  forestimg = loadImage("forest2.jpg")
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

//canvas dimensions needed change
  createCanvas(800,400);
  // background sprite created
  background1=createSprite(0,0,800,400);
  background1.addImage(forestimg);
  background1.scale=2.5;
  background1.x=background1.width/2;
  background1.velocityX=-4;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  FoodGroup = new Group();
  ObstaclesGroup = new Group();

  score = 0;
 
  
}


function draw() {

  background("white");

  if (ground.x < 0){
     ground.x = ground.width/2;
   }
  
  if(background1.x<100){
    background1.x=background1.width/2;
  }
 
  
   if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
         }
     
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
   monkey.collide(ground);   
  
  
  if(FoodGroup.isTouching(monkey)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
  
  
   if(ObstaclesGroup.isTouching(monkey)){
       
      monkey.scale=0.08;
    
    
    }
    spawnfood();
  spawnObstacles();
  
  
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  

  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
}



//pls create spawnfood and spawnobstacles here and submit the project.
function spawnfood(){
  if (frameCount%100===0) {
    banana = createSprite(400,165,10,40);
    banana.y = Math.round(random(100,250));
    banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 144;
    
     
    //adding cloud to the group
   FoodGroup.add(banana);
  
  }
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    obstacle = createSprite(800,350,10,40);
    //not required
    //obstacle .y = Math.round(random(30,60));
    obstacle .addImage(obstacleImage);
    obstacle .scale = 0.2;
    obstacle .velocityX = -3;
    
     //assign lifetime to the variable
    obstacle .lifetime = 300;
    
    //adding cloud to the group
   ObstaclesGroup.add(obstacle);
    
    }
}



