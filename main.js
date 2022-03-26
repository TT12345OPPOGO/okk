Mortis_game = "";
Harry_Potter_Theme_Song = "";

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload()
{
    Harry_Potter_Theme_Song = loadSound("oof.mp3");
    Mortis_game = loadSound("pog.mp3");
}

function play()
{
    Harry_Potter_Theme_Song.play();
}

function draw()
{
    image(video, 0, 0, 600, 500)
}