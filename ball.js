class Ball{
    constructor(x,y){
            var options={
                restitution:1,
                frictionAir:0.004,
                density:2
            }
        this.ball = Bodies.circle(x,y,25,options)
        this.r=25
        World.add(world,this.ball)
    }
    display(){
        var pos=this.ball.position;
       
        push()
        translate(pos.x,pos.y)
        stroke("blue")
        strokeWeight(4)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}