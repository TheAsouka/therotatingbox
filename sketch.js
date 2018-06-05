
function setup() {
  //createCanvas(710, 500);
  var cnv = createCanvas(200, 200, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  y = y + 100;
  cnv.position(x, y);
  //noLoop();
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
  var shapeToDraw = shapeID.split("s_")[1];
  console.log("getShape : "+shapeToDraw);
  return shapeToDraw;
}
setInterval(function() {
  // method to be executed;
  if (typeof shapeToDraw !== 'undefined') {
    // the variable is defined
    console.log(shapeToDraw);
  }
  else{
    console.log("you loose");
  }
}, 5000);



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


