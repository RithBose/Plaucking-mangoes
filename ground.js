class Ground{
    constructor(x,y){
    var options ={isStatic:true}
    
    this.body= Bodies.rectangle(x,y,5000,40,options)
    World.add(world,this.body)
    }
    display(){
    var Pos= this.body.position    
    rectMode(CENTER)
    fill("Brown")
    rect(Pos.x,Pos.y,1570,20)
    
    }
}