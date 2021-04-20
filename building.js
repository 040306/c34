class Building{
    constructor(x,y,width,height){
    var options = {
    'restitution':0.8,
    'density':1,
    'friction':1
    }
    this.body = Bodies.rectangle(x,y,width,height, options)
    this.width = width;
    this.height = height;
    //super(x,y,200,200,angle)
    World.add(world,this.body)
    }
display(){
var angle = this.body.angle
push()
translate(this.body.position.x,this.body.position.y);
rotate(angle);
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop()
}

}