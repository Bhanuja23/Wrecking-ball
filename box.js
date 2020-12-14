class Box{
    constructor(x,y){
            var box_options={
                restitution:0.8,
                friction:0.04,
                density:1
            }
            this.box = Bodies.rectangle(x,y,50,50,box_options)
            this.w=50
        this.h=50
     
        World.add(world,this.box)
    }
    display(){
        var pos=this.box.position;
       
        push()
        translate(pos.x,pos.y)
      
     
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }
}