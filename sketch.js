var ball;

var mydb;
var myPos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    mydb = firebase.database();

    myPos = mydb.ref("class35/ball");

   // console.log(myPos);

    myPos.on('value', readPos );  //reading of the data

   

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePos(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePos(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePos(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePos(0,+1);
    }
    drawSprites();
}

function readPos(data){

   console.log(data.val());

   ball.x = data.val().x;
    ball.y = data.val().y;

}

function writePos(a , b){

    myPos.set({
        'x': ball.x + a,
        'y': ball.y + b

    })
}
