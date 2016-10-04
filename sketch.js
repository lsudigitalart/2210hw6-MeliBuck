//Melinda Buckner Copyright 2016

var GreenHill, sonicrunning, eggman, arnold;
var sonic1st;
var song;
var pokemon, chicken, peter, soup, geisha, timon, daffy;
var i = 0;
var t = 0;
var p = 0;
var bDir = 1;
var ty = 0;
var h = 0;
var d = 0;

function preload(){
  // song = loadSound('sounds/SonicGreenHillZone.mp3');
  GreenHill = loadImage("images/sonicmap-green.png");
  sonicrunning = loadImage("images/runningsonic.png");
  eggman = loadImage("images/eggman.png")
  arnold = loadImage("images/shutup.png")
  pokemon = loadImage("images/badlydrwnpoke.png")
  chicken = loadImage("images/maurychicken.png")
  peter = loadImage("images/pp.png")
  soup = loadImage("images/soupmin.png")
  geisha = loadImage("images/geishadino.png")
  timon = loadImage("images/Gimme a hugtimon.png")
  daffy = loadImage("images/daffyd.png")

}

function setup() {
  createCanvas(600,600);
  noCursor()
  // sonic1st = loadGif('images/sonic-1stsprite.gif');
  // song.setVolume(0.1);
  // song.play();
}

function draw(){
  background(65,225,255)
  textSize(20)
  text("Try the middle row of keys", 0,500)

  translate(0,0);
  image(GreenHill,i,-350, width*15, height*2);
  i = i-0.25;
  // image(sonic1st, mouseX, mouseY)

  if(mouseIsPressed){
    image(sonicrunning, random(width),random(height),random(width),random(height))
    image(eggman, p, 100, width/5, height/5)
    textSize(50)
    text("You're too slow!", mouseX, height/2)
    p = p-.05
    } else {
  }
  if(key =="j"){
    image(chicken,0,0,600,600)
    image(pokemon, random(width), random(height), width/5, height/5)

    push()
    translate(0,0);
    if(t >600){
      bDir =0;
      ty = (400);
    }
    if(t<-300){
      bDir = 1;
      ty = (200);
    }
    if(bDir==1){
      t++;
    }else{
      t--;
    }
    translate(t,ty)
    image(peter, 0, 0)
    pop()

    push()
    translate(0,0);
    if(t>600){
      bDir =0;
      ty = (100);
    }
    if(t<-200){
      bDir = 1;
      ty = (200);
    }
    if(bDir==1){
      t++;
    }else{
      t--;
    }
    translate(t,ty)
    image(peter, 0, 0, width/2, height/2)
    pop()

    push()
    translate(0,0);
    if(t>600){
      bDir=0;
      ty=(50);
    }
    if(t<-100){
      bDir = 1;
      ty= (200);
    }
    if(bDir==1){
      t++;
    }else{
      t--;
    }
    translate(t,ty)
    image(peter, 0,0, width/4,height/4)
    pop()

  }
  if(key =="s"){
    background(0)
    image(soup, 150, 200)
  }
  if(key=="g"){
    background(255)
    image(geisha, mouseX,mouseY)
  }
  if(key=="k"){
    fill(random(150,255), random(150,255), random(150,255));
    textSize(50)
    text("HAKUNA MATATA", mouseX, height/2)
    image(timon,h,mouseY)
    h =h+2
  }
  if(key=="a"){
    background(255,0,0)
    fill(255)
    textSize(100)
    text("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", -10,100)
  }
  if(key=="d"){
    background(0)
    image(daffy, d,100)
    d = d-.25
    fill(0)
    textSize(20)
    text("the sound of silence", 300,450)

  }
}

//localhost:8000
