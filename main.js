nosex=0;
nosey=0;
rightWristx=0
leftWristx=0
difference=0

function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas=createCanvas(550,550)
  canvas.position(560,150)

  poseNet=ml5.poseNet(video,modelLoad)
  poseNet.on("pose",gotPoses)
}
function modelLoad(){
    console.log("posenet esta inicializado")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
 rightWristx=results[0].pose.rightWrist.x
 leftWristx=results[0].pose.leftWrist.x
 difference=floor(leftWristx-rightWristx)
    }
    
}
function draw(){
    background("blue")
    fill("darkblue")
    stroke("white")
    square(nosex,nosey,difference)
    
}