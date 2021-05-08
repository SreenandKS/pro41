class Umbrella{
    constructor(x,y,width,height){
       var options = {
            'friction':0.1
        }
        this.body = Bodies.rectangle(x,y,width,height,{options,isStatic:true});
        this.width = width;
        this.height = height
        this.image = loadImage("d03ea27a-a2f3-49e6-84cf-a20136e4ed10.png");
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
