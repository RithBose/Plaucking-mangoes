class Mango{
    constructor(x,y,r){
    var options={isStatic:true}
    this.x=x
    this.y=y
    this.r=50
    this.body= Bodies.circle(this.x,this.y,18,options)
    this.image=loadImage("mango.png")
    this.image.scale= 16
    World.add(world,this.body)
    }
    display(){
        var mangoPos=(this.body.position) 
    push()
    translate(mangoPos.x,mangoPos.y)
    imageMode(CENTER)
    fill("red")
    strokeWeight(6)
    stroke("red")
    image(this.image,0,0,this.r,this.r)
    pop()
    }
    }