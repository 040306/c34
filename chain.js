class Chain{
constructor(bodyA,bodyB){
var options = {
bodyA: bodyA,
bodyB: bodyB,
'stiffness':1.2,
'length':350
}
this.rope = Constraint.create(options)
World.add(world,this.rope);
}
display(){
var pointA = this.rope.bodyA.position;
var pointB = this.rope.bodyB.position;

push()
strokeWeight(3)
line(pointB.x,pointB.y, pointA.x,pointA.y)
pop()
}
}