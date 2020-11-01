class paper {
    constructor(x,y,radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.1
        }
        this.body = Matter.Bodies.circle(x,y,20,options);
        this.radius=radius;
        World.add(world, this.body);
        this.image = loadImage("paper.png");
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255,0,255);
        ellipse(0, 0, this.radius);
        pop();
    }
    
    keyPressed() {
        var pox=this.body.position.x;
        var poy=this.body.position.y;
        Matter.Body.applyForce( this.body, {x:pox, y:poy}, {x:90, y:90});
    }
};
