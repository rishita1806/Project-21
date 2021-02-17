var canvas;
var music, sound;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
    sound = loadSound("sound.wav");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(100,580,150,20);
    surface1.shapeColor = "green";

    surface2 = createSprite(300,580,150,20);
    surface2.shapeColor = "red";

    surface3 = createSprite(500,580,150,20);
    surface3.shapeColor = "blue";

    surface4 = createSprite(700,580,150,20);
    surface4.shapeColor = "#A500BF";

    box = createSprite(random(20,750),50,50,50);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 5;

}

function draw() {

    background("#FCE437");

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "green";
        music.play();
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "red";
    }

    if(surface3.isTouching(box)){
        box.shapeColor = "blue";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "#A500BF";
    }

    drawSprites();
}
