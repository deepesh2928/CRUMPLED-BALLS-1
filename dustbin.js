class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:true, 
          'restitution':0.0,
          'friction':2.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
  
    }
    display(){
      var pos =this.body.position;
     
     translate(0,0);
      rectMode(CENTER);
      fill("red");
      
      rect(pos.x,pos.y,this.width,this.height);
      
    }
  };