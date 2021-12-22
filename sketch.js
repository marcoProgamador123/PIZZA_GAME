var canvas
var fundo
var menina,meninaIMG;

function preload() {
  fundo = loadImage("images/pizzaria.png");
  meninaIMG = loadImage("images/pizza2.png");
}
function setup(){
    canvas = createCanvas(600,800);
    menina = createSprite(300,700,20,20);
    menina.addImage(meninaIMG);
  }
function draw(){
  background(0)
  //image(fundo,0,0,width,height);
  drawSprites()
}