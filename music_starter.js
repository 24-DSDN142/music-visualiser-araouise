
let Xmove = 1
let Xmove2 = 2
let Xmove3 = 3

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(135, 206, 235) // pastel blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter)
  //handle
  //stroke(235, 216, 52)
  strokeWeight(0)
  //fill(135, 206, 235)
  //rect(300, 300, 300, 100)

//   // buttons
//   let buttonSize = map(vocal, 0, 100, 10, 50)
//   fill (255)
//   strokeWeight(0)
//   rect(300, 300, buttonSize, buttonSize) // middle

//   let buttonSize2 = map(bass, 0, 100, 10, 50)
//   rect (250, 300, buttonSize2, buttonSize2) //left

//   let buttonSize3 = map(other, 0, 100, 10, 50)
//   rect (350, 300, buttonSize3, buttonSize3) // right

//   //speaker body
//   fill(235, 216, 52)
//  rect(300, 400, 500, 200)

//  //speaker
//   let speakerSize = map(drum, 0, 100, 50, 200)
//   fill (255)
//   stroke(235, 216, 52)
//   ellipse(150, 400, speakerSize, speakerSize)
//   ellipse(450, 400, speakerSize, speakerSize)
//   fill (235, 216, 52)
//   ellipse(150, 400, speakerSize/2, speakerSize/2)
//   ellipse(450, 400, speakerSize/2, speakerSize/2)

  // let y = 70
  // let speakerSize2 = map(vocal, 0, 100, 40, 20)
  // for( let i = 1; i < 4; i++){
  // let loopyY = y * i;
  // fill (255)
  // ellipse(100, loopyY, speakerSize2, speakerSize2)
  // ellipse(200, loopyY, speakerSize2, speakerSize2)
  // ellipse(300, loopyY, speakerSize2, speakerSize2)
  // ellipse(400, loopyY, speakerSize2, speakerSize2)
  // ellipse(500, loopyY, speakerSize2, speakerSize2)
  // }

  let cloudSize2 = map(other, 0, 100, 160, 80);
  fill (232, 237, 237);
  ellipse(width - Xmove, 55, cloudSize2, 60); //middle
  ellipse(width - 30 - Xmove, 65, cloudSize2, 60); //right
  ellipse(width + 30 - Xmove, 65, cloudSize2, 60); //left

  fill(255);
  ellipse(width - Xmove, 60, cloudSize2, 60); //middle cloud
  ellipse(width - Xmove, 80, cloudSize2, 60); //middle cloud - bottom
  ellipse(width + 30 - Xmove, 70, cloudSize2, 60); //left cloud
  ellipse(width - 30 - Xmove, 70, cloudSize2, 60); // right cloud
  
  let cloudSize3 = map(other, 0, 100, 200, 140)
  
  fill (255);
  ellipse(width - Xmove2, 250, cloudSize3, 100)
  ellipse(width + 30 - Xmove2, 270, cloudSize3, 100);
  ellipse(width - 30 - Xmove2, 270, cloudSize3, 100);
  ellipse(width - Xmove2, 300, cloudSize3, 100); //middle cloud
  ellipse(width + 60 - Xmove2, 300, cloudSize3, 100); //middle cloud - right
  ellipse(width - 60 - Xmove2, 300, cloudSize3, 100); //middle cloud - left
 

  Xmove = Xmove + 0.5;
  if (Xmove > 600){
    Xmove = 0;
  }

  // Xmove2 = Xmove + 30;
  // if (Xmove2 > 650){
  //   Xmove2 = 5;
  // }

  Xmove2 = Xmove - 150;
  if(Xmove2 > 700){
    Xmove2 = 10;
  }

 let cloudSize = map(other, 0, 100, 160, 80)

  fill (232, 237, 237); //shadow
  ellipse(50, 400, 200, cloudSize, cloudSize);
  ellipse(130, 430, 200, cloudSize, cloudSize);
  ellipse(210, 480, 200, cloudSize, cloudSize);

  
  fill (255); //front
  ellipse(50, 450, 200, cloudSize, cloudSize);
  ellipse(150, 480, 200, cloudSize, cloudSize);
  ellipse(20, 540, 200, cloudSize, cloudSize);
  ellipse(150, 535, 200, cloudSize, cloudSize);
  ellipse(230, 535, 200, cloudSize, cloudSize);

  // let cloudSize = map (other, 0, 100, 150, 70);
  // ellipse(300, 300, 200, cloudSize, cloudSize);
  // ellipse(350, 310, 200, cloudSize, cloudSize);


  // textAlign(CENTER);
  // fill(255)
  // textSize(vocal);
  // text(words, width/2, height/3);



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