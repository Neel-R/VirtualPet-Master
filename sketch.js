var dog, happyDog, database, foodS, foodStock, dogImg;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  dog = createSprite()
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250);
  dog.addImage(dogImg);
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

  textSize(25);
  text("foodStock: " + foodStock.val(), 100,130);
}

function readStock(data){
  foodS=data.val();
}

function writeStock () {
  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
   database.ref('/').update({
     Food:x
   })
  
}


