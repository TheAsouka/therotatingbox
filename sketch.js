function setup() {
  //createCanvas(710, 500);
  createCanvas(200, 200, WEBGL);
}

function rand(min,max){
	return Math.floor(Math.random() * max) + min;
}

var count = -1;
var speed = 0.01;
var isRotate = "";

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

var p1 = rand(0,255);
var p2 = rand(0,255);
var p3 = rand(0,255);

function draw(){
  background(p1,p2,p3);
  startRotation();
  box(50);
}




