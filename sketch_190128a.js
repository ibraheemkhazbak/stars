var star;
var stars
function setup() {
createCanvas(window.innerWidth,window.innerHeight);

    star= new Star(8);
     stars=[];
    for (var i=0; i<1000; i++){
      stars[i]=new Star(8);
    
    
}
}

function draw() {
   background(0);
   translate(width/2,height/2);
  for (var i=0; i<stars.length; i++){
  stars[i].show();
  stars[i].update();
  }
   star.update();
  star.show();
 
}
