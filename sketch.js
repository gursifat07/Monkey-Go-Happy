var PLAY = 1;
var END = 0;
var gameState = PLAY;
var jungle,jungleImg
var monkey,monkeyAni
var ground 
var banana, banana1
var stone
var bananaGroup
var stoneGroup
var score =0;
var health = 0
function preload() {
 monkeyAni = loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  jungleImg= loadImage("jungle2.jpg")
  
  stone1= loadImage("stone.png")
  
  banana1=loadImage("banana.png")
}

function setup() {
  createCanvas(400,400);
  jungle= createSprite(200,200)
  jungle.addImage("jungle",jungleImg)
       jungle.scale=0.6;

    monkey = createSprite(60,380,20,50);
  monkey.addAnimation("monkeyg",monkeyAni);
     monkey.scale=0.09;
  ground = createSprite(200,380,800,20);

  bananaGroup = new Group()
  stoneGroup = new Group()
score=0

}


function draw() {
  background(220);
if(gameState === PLAY){
  ground.velocityX = -4;
    jungle.velocityX = -4;
  
  if(jungle.x<0){
     jungle.x=jungle.width/4;
     }
       if(keyDown("space") && monkey.y >= 339){
    monkey.velocityY = -15 ;
  }
    monkey.velocityY = monkey.velocityY + 0.8;
if(monkey.isTouching(bananaGroup)){
  banana.destroy()
     score=score+1
     }
  
}
  else if(gameState === END) {
    ground.velocityX = 0;
    jungle.velocityX = 0;
    stone.velocityX =  0;
    banana.velocityX = 0;
    stoneGroup.destroyEach();
    bananaGroup.destroyEach();
    fill("red")
    stroke("black")
    textSize(30);
    text("GAMEOVER!!!", 220, 170);
    fill("black");
    textSize(15);
    text("Press 'R' to play again", 240, 200);
    if (keyDown("r")){
      score = 0;
      gameState = PLAY; 
    }
  }
  monkey.collide(ground);
  ground.visible= false
    
  if(ground.x<0){
     ground.x=ground.width/2;
     }
 
  monkey.collide(stoneGroup)
  
  monkeyHealth()
  drawSprites()
  spawnBanana()
spawnStone()
    fill("white");
textSize(20);
    text("Your Score: "+ score, 250, 50);
}
function spawnStone() {
   if(World.frameCount % 200 === 0) {
    stone = createSprite(400,340,10,40);
    stone.addImage("Stone",stone1);
    stone.velocityX = -6;
    stone.scale = 0.15;
    stone.lifetime = 70
     stoneGroup.add(stone)
     

  }
}
function spawnBanana() {
  
   if(World.frameCount % 80 === 0) {
     banana = createSprite(400,300,20,50)
     banana.x=400;
    banana.y=random(300,250);
   banana.addImage("banana",banana1)
     banana.velocityX = -6;
    banana.scale = 0.05;
    banana.lifetime = 70;
    bananaGroup.add(banana);
    

  
}
  
}
function monkeyHealth(){
  if (monkey.isTouching(stoneGroup)){
    gameState=END
  }
  
  switch(score){
    case 10: monkey.scale=0.10;
       break;
    case 20: monkey.scale=0.12;
       break;
    case 30: monkey.scale=0.14;
       break;
    case 40:monkey.scale=0.16;
       break; 
    case 50:monkey.scale=0.18;
       break;
    case 60:monkey.scale=0.20;  
       break;
    case 70:monkey.scale=0.22;
       break;
    case 80:monkey.scale=0.24;
       break;
         }
  

}