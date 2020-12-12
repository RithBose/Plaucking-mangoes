class Stone{
constructor(x,y,r){
var options={isStatic:false,restitution:0.6,friction:1,density:1.2}
this.x=x
this.y=y
this.r=50
this.body= Bodies.circle(this.x,this.y,3,options)
this.image=loadImage("stone.png")
this.image.scale= 16
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
image(this.image,0,0,this.r,this.r)
pop()
}
}