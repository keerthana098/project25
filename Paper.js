class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            resitution:5,
            friction:0.2,
            density:0.2
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image = loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.radius-20/2),options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.radius, this.radius);
        //strokeWeight(5);
        //stroke("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}