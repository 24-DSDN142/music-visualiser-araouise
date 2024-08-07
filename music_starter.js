
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(230, 183, 237)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  

  stroke(235, 216, 52)
  strokeWeight(4)
  fill(230, 183, 237)
  rect(300, 300, 300, 100)

  let buttonSize = map(vocal, 0, 100, 10, 50)
  fill (255)
  strokeWeight(0)
  rect(300, 300, buttonSize, buttonSize) // middle

  let buttonSize2 = map(bass, 0, 100, 10, 50)
  rect (250, 300, buttonSize2, buttonSize2) //left

  let buttonSize3 = map(other, 0, 100, 10, 50)
  rect (350, 300, buttonSize3, buttonSize3) // right

  fill(235, 216, 52)
 rect(300, 400, 500, 200)

  let speakerSize = map(drum, 0, 100, 50, 200)
  fill (255)
  stroke(235, 216, 52)
  ellipse(150, 400, speakerSize, speakerSize)
  ellipse(450, 400, speakerSize, speakerSize)
  fill (235, 216, 52)
  ellipse(150, 400, speakerSize/2, speakerSize/2)
  ellipse(450, 400, speakerSize/2, speakerSize/2)





}
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
// 