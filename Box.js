class Box{

    constructor(x,y,width,height){
        var options ={
            'restitution':0.8,
            'friction':2,
            'density':1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        //angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green")
        fill("white");
        rectMode(CENTER);
       
        rect(0,0,this.width,this.height);
        pop();
    }
}