class Tree{
    constructor(x,y){
    var options={isStatic:true,restitution:0.6,friction:1,density:1.2}
    this.x=x
    this.y=y
    
    this.body= Bodies.rectangle(this.x,this.y,0,0,options)
    this.image=loadImage("tree.png")
    this.image.scale= 20
    World.add(world,this.body)
    }
    display(){
        var treePos=(this.body.position) 
    push()
    translate(treePos.x,treePos.y)
    imageMode(CENTER)
    fill("red")
    strokeWeight(6)
    stroke("red")
    image(this.image,0,0,500,600)
    pop()
    }
    }