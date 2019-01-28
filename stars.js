function Star(r){
  this.x=random(-width/2,width/2);
  this.y=random(-height/2,height/2);
this.z=random(width);


this.show=function(){
  fill(255,230,255)
  noStroke();
    this.sx=map(this.x/this.z,0,1,0,width);
  this.sy=map(this.y/this.z,0,1,0,width);
  this.r=map(this.z,0,width,8,0);
  ellipse(this.sx,this.sy,this.r);
  this.z-=10;
  
  
}
this.update=function(){
if(this.z<1){
this.z=width;
  this.x=random(-width/2,width/2);
  this.y=random(-height/2,height/2);
}

}

}
