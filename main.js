img = "";
status = "";
objects = [];

function preload()
{
  img =  loadImage("bedroom.html");
  img =  loadImage("tv and ac.jpg");
}

function setup()
{
canvas= createCanvas(650,430);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
} 

function modelLoaded()
{
  console.log("model loaded");
  status = true;
  objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
 if(error) 
 {
 console.log(error);
 }
  console.log(results);
}

function draw()
{
 image(img, 0,0,650,430);
 if(status !="")
 {
  for ( i=0; i<objects.length; i++)
  {
   document.getElementById("status").innerHTML = " Status : Object Detected " ;
   fill("#FF0000");
   percent = floor(objects[i].confidence * 100);
   text(objects[i].label + "" + percent + "%", objects[i].x +15 ,objects[i].y +15);
   noFill();
   stroke("#FF0000");
   rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height );
  }
 }
 stroke("red");
 noFill();
 rect(30,60,450,350);
 rect(300,50,300,350);
 text("Dog",35,70);
 text("Cat",575,60);
}

function transport()
{
    window.location="homepage2.html";
}

function move()
{
    window.location="bedroom.html";
}
function teleport()
{
    window.location="tv and ac.html";
}
function back()
{
    window.location="homepage2.html";
}

function draw()
{
    image(img,0,0,500,600);
    
}