var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var silver,gold,bronze;
var silverImg,goldImg,bronzeImg;
var track, car1_img, car2_img, car3_img, car4_img;
var f1,f1Img;
var carMp3,slidingMp3;
var obstacles;
var i;
var passedFinish;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  silverImg = loadImage("../images/silver.png");
  bronzeImg = loadImage("../images/bronze.png");
  carMp3 = loadSound("../sound/car.mp3");
  goldImg = loadImage("../images/gold.png");
  slidingMp3 = loadSound("../sound/sliding.mp3")
  f1Img = loadImage("../images/f1.png"); 
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  
  obstacles = createGroup();
  for(i=0;i<10;i++){
    w = random(250,900)
    h = random(-height*4,height-300);
    f1 = createSprite(w,h); 
    f1.addImage("f1",f1Img); 
    obstacles.add(f1);
  }
  
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0 ) {
     game.update(1);
   }

 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (finishedPlayers === 4) {
     game.update(2);
     //console.log("End");
   }
   if (gameState === 2 && finishedPlayers === 4) {
    game.displayRanks();
  }
}
 
  
