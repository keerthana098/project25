class Dustbin{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
        }
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.image = loadImage("dustbingreen.png")
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
//rotate(angle);
angleMode(RADIANS);
//rectMode(CENTER);
imageMode(CENTER);
image(this.image, 0, 0, this.width, this.height);
//strokeWeight(5);
//stroke("white");
fill("white");
//rect(0,0,this.width,this.height);
pop();
    }
}