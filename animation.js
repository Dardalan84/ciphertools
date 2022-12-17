
    function setup() {

    
        var cnv = createCanvas(outerWidth, 120);
        cnv.parent("sketch");
        background(0,22,42);
        fill(0,0,18);
    }


  
  function draw() {
frameRate(10);
      fill(0,0,random(130,150));
   
    textAlign(CENTER);
    textSize(52);
    textStyle(BOLD);
    text("CypherCon Decryption Toolkit",width/2,height/2+10);

    if (mouseIsPressed) {
      fill(255);
    } else {
      fill(0);
    }
    noStroke();
   
    ellipse(mouseX, mouseY, 80, 80);

  }