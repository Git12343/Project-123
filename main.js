noseX=0;
noseY=0;
function preload()
{
    clown_nose = loadimage('https://st2.depositphotos.com/1194063/6307/i/600/depositphotos_63079503-stock-photo-clown.jpg');

}
function setup()
{
    canvas = createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('PoseNet Is Initialised');

}
function gotPoses(results)
{
    if(results.length >0);
    
}
