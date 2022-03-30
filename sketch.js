let arr = [];
let dataBar = [];

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  arr = [11,12,13,14,15,16,17,18]; 

  for (var i = 0; i < 10; i++){
    dataBar[i] = random(0,100)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(20)
  stroke(255,255,255)
  strokeWeight(3)
  line(0, 
       windowHeight/2, 
       windowWidth, 
       windowHeight/2);
  line(windowWidth/2, 
        0, 
        windowWidth/2, 
        windowHeight);
  
  // menampilkan bar plot
  var dx = 25
  var x = 10
  var margin = 10
  var lebarBar = windowWidht/2 - 2*margin;
  var dx = lebarBar / dataBar.lenght
  for (var i=0; i<dataBar.length; i++){
    rect(x,
      y=100,
      width=20,
      height=dataBar[i]
      ); 
    x = x + dx //x += dx
  }
      
  //console.log("panjang array = ", arr.length)
 
}