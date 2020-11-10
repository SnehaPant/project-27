class Rope {
    constructor(body1,body2,offsetX,offsetY){

      this.offsetX=offsetX
      this.offsetY=offsetY
       var option={
           bodyA : body1,
           bodyB : body2,
          pointB:{x:this.offsetX,y:offsetY}
   
       }
       this.Rope=Constraint.create(option)
       World.add(world,this.Rope)
    }
      display(){
          var pointA=this.Rope.bodyA.position
          var pointB=this.Rope.bodyB.position
            line(pointA.x,pointA.y,pointB.x,pointB.y)
      }
}