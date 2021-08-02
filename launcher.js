class Launcher{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           length:50,
           stiffness:1 
        }
    this.launcher=Matter.Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.launcher)
    }
    display(){
    strokeWeight(3);
    if(this.launcher.bodyA){
        if(this.launcher.bodyA){
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,
             this.pointB.x,this.pointB.y)
        }
    }

    }
   fly(){
       this.launcher.bodyA=null
   } 
   attach(body){
    this.launcher.bodyA=body
   }
}