function setup() {
  //createCanvas(710, 500);
  var cnv = createCanvas(200, 200, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  y = y + 100;
  cnv.position(x, y);

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
  //console.log("WORK");
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

function draw(){
  background(p1,p2,p3);
  startRotation();
  box(50);
}  