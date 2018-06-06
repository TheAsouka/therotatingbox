
function setup() {
  //createCanvas(710, 500);
  var cnv = createCanvas(200, 200, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //cnv.parent('sketch-holder'); // your sketch will be in <div id="sketch-holder"></div>
}

function rand(min,max){
    return Math.floor(Math.random() * max) + min;
}

var count = -1;
var speed = 0.01;
var isRotate = "Off";
var p1 = rand(0,255);
var p2 = rand(0,255);
var p3 = rand(0,255);
shapeToDraw = "box"; // global


function startRotation(){
  if (count % 2 == 0){
    rotateX(frameCount * speed);
    rotateY(frameCount * speed);
    isRotate = "On";
  }
  if (count % 2 > 0){
    isRotate = "Off";
  }
  return isRotate;
}

function speedUP() {
  speed = speed + 0.01;
  console.log(speed);
  return speed;
}

function speedDown(){

  if (speed <= 0.01){
    speed = 0.01;
  }
  speed = speed - 0.01;
  console.log(speed);
  return speed;
}

function countUP(){
  count = count + 1;
  return count;
}

function changeBG(){
  p1 = rand(0,255);
  p2 = rand(0,255);
  p3 = rand(0,255);
}

function getShape(id) {
  var shapeID = document.getElementById(id).id;
  shapeToDraw = shapeID.split("s_")[1]; // VARIABLE GLOBALE OBLIGATOIRE!! (En tout cas ça marche enfin putain)
  console.log("getShape : "+shapeToDraw);
  return shapeToDraw;
}

/*
function testing() {
  if (typeof shapeToDraw !== 'undefined') {
    // the variable is defined
    console.log("WIN : "+shapeToDraw);
  }
  else{
    console.log("you loose");
    //shapeToDraw = "HELLO"; //Pour réutiliser, obligatoirement faire une variable globale !!
  }
}
*/

function draw() {
  background(p1,p2,p3);
  startRotation();
  this[shapeToDraw]();
}


function menuDeroulant(id){
  var element = document.getElementById(id);
  var etat = element.style.display;

  if (etat == 'none'){
      element.style.display = 'block';
  }
  else{
      element.style.display = 'none';
  }
}


