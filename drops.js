class Drops {
constructor(x,y,RADIUS){
  
    var options = {
        restitution: 1,
        friction: 0,
        
    }
   
    this.body = Bodies.circle(x, y,RADIUS, options);
    
    World.add(world, this.body);
}
display() {

    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill("lightBlue");
    ellipseMode(RADIUS);
    ellipse(0,0,3);
    pop();
}
    
    };