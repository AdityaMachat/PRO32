class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.visiblity=255;
    
 this.image=loadImage("sprites/img1.png");
  }
  display(){
    if(this.body.speed<3){
      super.display();
    }else {
      World.remove(world,this.body);
      push();
      this.visiblity=this.visiblity-5;
      tint(255,this.visiblity);
      image(this.image,this.body.position.x,this.body.position.y,30,40);
      pop();
    }
  }
  score(){
    if(this.visiblity<0 && this.visiblity>-1000){
      score++;
    }
  }
} 
