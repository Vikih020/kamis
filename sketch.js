//let j;
function setup() {
  // put setup code here
  createCanvas(800,400);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);
  strokeWeight(8)
  stroke(245,90,50)
  point(200,100)
  line(200,200,200,10)
  line(10,10,50,50)

  fill(128,0,0)
  rect(200,100, 20, 100)

  strokeWeight(2)
  fill(255,215,0)
  ellipse(150,80,20,20)
  ellipse(200, 120, 20, 50)

  //strokeWeight(0)
  //noStroke()
  
  fill(90, 2,2)
  strokeCap(ROUND)
  strokeJoin(ROUND)
  triangle(20, 20, 20, 40, 60, 20)
  arc(50,50, 40, 40, radians(0), radians(270))

  strokeWeight(5)
  beginShape();
  vertex(300,50)
  vertex(350,100)
  vertex(300,15)
  vertex(250,150)
  vertex(300,90)
  endShape(CLOSE);

  for (var i=0; i<=400; i++){
    x = i 
    y = 300 + 20*Math.sin(PI*j/20)
    point(x,y)
  }
 
  var y = 200 + 20*Math.sin(PI*j/20)
  var r = 50 + 10*Math.sin(PI*j/20)
  j += 1
  fill(240, 192, 35)
  ellipse(300, y, r, r)
}