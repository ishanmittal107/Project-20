var garden, gardenImg;
var cat, catImg, catrun, catstop;
var mouse, mouseImg,mousetease, mousestop;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg=loadImage("images/cat1.png");
    mouseImg=loadImage("images/mouse1.png");
    catrun=loadAnimation("images/cat2.png","images/cat3.png");
    catstop=loadAnimation("images/cat4.png")
    mousetease=loadAnimation("images/mouse2.png","images/mouse3.png",);
    mousestop=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,370,1000,800);
    garden.addImage(gardenImg);
    cat=createSprite(750,600,20,20);
    cat.addImage(catImg);
    cat.scale=0.1;
    mouse=createSprite(350,600,20,20);
    mouse.addImage(mouseImg);
    mouse.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocity.x=0;
        cat.addAnimation("Stand",catstop);
        cat.changeAnimation("Stand");
        cat.x=390;
        mouse.addAnimation("Stand",mousestop);
        mouse.changeAnimation("Stand");
        
     
        }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    cat.velocity.x=-5;
    cat.addAnimation("tomRunning",catrun);
    cat.changeAnimation("tomRunning");
    
    mouse.addAnimation("jerryTeasing",mousetease);
    mouse.changeAnimation("jerryTeasing");
    mouse.framedelay=25;
    }
    
    }
    


