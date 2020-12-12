class boy{
    constructor(x,y,r){
    var options={isStatic:true,restitution:0.6,friction:1,density:1.2}
    this.x=x
    this.y=y
    this.r=50
    this.body= Bodies.rectangle(this.x,this.y,100,100,options)
    this.image=loadImage("boy.png")
    this.image.scale= 5
    World.add(world,this.body)
    }
    display(){
        var stonePos=(this.body.position) 
    push()
    translate(stonePos.x,stonePos.y)
    imageMode(CENTER)
    fill("red")
    strokeWeight(6)
    stroke("red")
    image(this.image,0,0,200,200)
    pop()
    }
    }