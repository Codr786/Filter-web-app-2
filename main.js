function preload(){

}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    canvas.position(570,200);
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    save('myFilterImage.png');
}
function take_snapshot(){
    save('myFILTERImage.png')
}
function modelLoaded(){
    console.log('poseNet Is Initializing');
}
function gotPoses(results)
{
    if(results.length >0)
    {
        console.log(results);
        console.log("lips x =" + results[0].pose.nose.x);
        console.log("lips y =" + results[0].pose.nose.y);

    }
}
