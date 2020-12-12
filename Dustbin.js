class  Dustbin {
    constructor(x,y,r){
        var options={
             isStatic:false,
            'restitution': 0.8,
            'friction': 0.5,
            'density':1.2

        }
        this.body= Bodies.circle(this.x.this.y.this.r/2);
        this.x= x;
        this.y = y;
        this.r = r;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("pink");
        fill(255);
        ellipse(0,0,this.x,this.y.this.r);
        pop();
    }


}