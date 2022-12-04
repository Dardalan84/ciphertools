
    function setup() {

    
        var cnv = createCanvas(outerWidth, 80);
        cnv.parent("sketch");
        background(0);
        fill(0,0,58);
    }


  
  function draw() {

      fill(0,0,58);
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