class Boy {
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
            pointB: point2,
            stiffness: 0.08,
            length: 20
        }
        this.man = Constraint.create(options);
        World.add(world, this.man);
    }
    fly(){
        this.man.bodyA = null; 
    }
    display(){
        if(this.man.bodyA){
            var anchorA = this.man.bodyA.position;
            var anchorB = this.man.pointB;
            strokeWeight(4);
            line(anchorA.x, anchorA.y, anchorB.x, anchorB.y);
        }  
    }

}