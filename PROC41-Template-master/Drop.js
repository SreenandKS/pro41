class Drop{
    constructor(x,y,radius){
       var options = {
            'friction':0.001,
            'restitution':0.1
        }
        this.body = Bodies.circle(x,y,radius,{options});
        
        this.radius = radius;

        World.add(world,this.body);
    }

    updatePosition(){
        
        if(this.body.position.y>height){
         Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
        
    }

    display(){
        var position = this.body.position;
        // push();
        // translate(position.x,position.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(position.x,position.y,this.radius,this.radius);
        // pop();
    }
}