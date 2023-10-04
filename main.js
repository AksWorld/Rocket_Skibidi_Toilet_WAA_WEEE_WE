Nose_for_MustacheX=0;
Nose_for_MustacheY=0;
function preload(){
    Nose=loadImage("https://i.postimg.cc/L6LsVhjV/mustache-removebg-preview.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.background(200,255,255);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
 function modelLoaded(){
    console.log('PoseNet Is Initialized');
 }
 function gotPoses(results)
 {
    if(results.length>0)
    {
        console.log(results);
        Nose_for_MustacheX= results[0].pose.nose.x;
        Nose_for_MustacheY= results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
 }
function draw()
{
 image(video,0,0,300,300);
 image(Nose, Nose_for_MustacheX-15,Nose_for_MustacheY+6,30,30)

}
function Operation_G_Man(){
    save("Scientist_Toilet_filters.png");
}