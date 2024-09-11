
let Xmove = 1
let Xmove2 = 1
let Xmove3 = 3
let Xmove4 = 4
let Xmove5 = 1
let Sky = bluesky.png
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(135, 206, 235) // pastel blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter);
  strokeWeight(0)


  if(counter > 4700){
    background(42, 34, 51);
  }

  let cloudSize4 = map(other, 0, 100, 70, 20);
  fill (218, 221, 227); //shadow for far clouds - grey
  ellipse(width - Xmove3, 205, 50, cloudSize4, 1); // mid (far clouds)
  ellipse(width - 10 - Xmove3, 215, 50, cloudSize4, 1); // left
  ellipse(width  + 10 - Xmove3, 210, 50, cloudSize4, 1); // right

fill (237, 240, 245);
  ellipse(width - Xmove3, 200, 50,cloudSize4, 1); // mid (far clouds)
  ellipse(width - 10 - Xmove3, 210, 50, cloudSize4, 1); // left
  ellipse(width + 10 - Xmove3, 205, 50, cloudSize4, 1); // right

  let cloudSize2 = map(other, 0, 100, 160, 80);
  fill (232, 237, 237); // shadow top clouds - moving
  ellipse(width - Xmove, 85, cloudSize2, 60); //middle
  ellipse(width - 30 - Xmove, 75, cloudSize2, 60); //right
  ellipse(width + 30 - Xmove, 75, cloudSize2, 60); //left

  fill(255);
  ellipse(width - Xmove, 60, cloudSize2, 60); //middle cloud
  ellipse(width - Xmove, 80, cloudSize2, 60); //middle cloud - bottom
  ellipse(width + 30 - Xmove, 70, cloudSize2, 60); //left cloud
  ellipse(width - 30 - Xmove, 70, cloudSize2, 60); // right cloud
  
  let cloudSize3 = map(other, 0, 100, 200, 140)
  fill (255);
  ellipse(width - Xmove2, 250, cloudSize3, 100)
  ellipse(width + 70 - Xmove2, 270, cloudSize3, 100);
  // ellipse(width + 90 - Xmove2, 245, cloudSize3, 100);
  ellipse(width - Xmove2, 300, cloudSize3, 100); //middle cloud
  ellipse(width + 90 - Xmove2, 300, cloudSize3, 100); //middle cloud - right
  ellipse(width - 60 - Xmove2, 300, cloudSize3, 100); //middle cloud - left

  let cloudSize5 = map(other, 0, 100, 100, 30);
  fill (218, 221, 227); //shadow for far clouds - grey
  ellipse(width - Xmove4, 140, 80, cloudSize5, 30);//mid
  ellipse(width - 15 - Xmove4, 143, 80, cloudSize5, 30);//left
  ellipse(width + 15 - Xmove4, 145, 80, cloudSize5, 30);// right

  fill (237, 240, 245)
  ellipse(width - Xmove4, 133, 80, cloudSize5, 30);//mid
  ellipse(width - 15 - Xmove4, 138, 80, cloudSize5, 30);//left
  ellipse(width + 15 - Xmove4, 140, 80, cloudSize5, 30);// right

  let cloudSize6 = map(other, 0, 100, 150, 100);
  fill (255);
  ellipse(width - Xmove5, 540, 200, cloudSize6, cloudSize6);
  ellipse(width - 30 - Xmove5, 570, 200, cloudSize6, cloudSize6);
  ellipse(width + 30 - Xmove5, 575, 200, cloudSize6, cloudSize6);


  Xmove = Xmove + 0.5;
  if (Xmove > 1100){
    Xmove = 0;
  }

  Xmove2 = Xmove2 + 0.7;
  if(Xmove2 > 1250){
    Xmove2 = 0;
  }

Xmove3 = Xmove3 + 0.3;
  if (Xmove3 > 1130){
    Xmove3 = 0;
  }

Xmove4 = Xmove4 + 0.1;
if (Xmove4 > 1130){
  Xmove4 = 0;
}

Xmove5 = Xmove5 + 0.9;
if (Xmove5 > 1280){
  Xmove5 = 0;
}

 let cloudSize = map(other, 0, 100, 160, 80)

  fill (255); //white
  ellipse(50, 400, 200, cloudSize, cloudSize); //clouds (back)
  ellipse(130, 430, 200, cloudSize, cloudSize);
  ellipse(210, 480, 200, cloudSize, cloudSize);

  fill (237, 238, 240);
  ellipse(250, 535, 200, cloudSize, cloudSize); //shadow (farthest back)

  fill (255); // white
  ellipse(255, 530, 200, cloudSize, cloudSize); //lower right cloud

  // stroke(0)
  // strokeWeight(1)
  // fill (0,0,255);
  // beginShape();
  // vertex(170, 455);
  // vertex(170, 405);
  // vertex(180, 405);

  // endShape();
// stroke(0);
// strokeWeight(1);  
fill (214, 202, 193);
beginShape();
vertex(180, 325);
vertex(175, 400);
vertex(160, 400);
vertex(165, 325);
endShape();



strokeWeight(0);
fill (230, 218, 209);
ellipse(175, 330, 35, 50);

fill (0)
beginShape();
vertex(203, 319);
bezierVertex(187, 254, 88, 330, 167, 360);
endShape();

fill (227, 161, 218); // girl's body
ellipse(170, 410, 50, 80);



strokeWeight(0);
 fill (237, 238, 240); // grey
  ellipse(50, 445, 200, cloudSize, cloudSize);// mid shadow
  ellipse(151, 475, 200, cloudSize, cloudSize);
  ellipse(229, 530, 200, cloudSize, cloudSize);
  ellipse(20, 545, 200, cloudSize, cloudSize);// bottom shadow
  ellipse(150, 540, 200, cloudSize, cloudSize);
  ellipse(220, 540, 200, cloudSize, cloudSize);
  // ellipse(250, 540, 200, cloudSize, cloudSize);

  
  fill (255); //white 
  // if(counter > 4700){
  //   fill (42, 48, 61)
  // }
  ellipse(50, 450, 200, cloudSize, cloudSize); //clouds (front)
  ellipse(150, 480, 200, cloudSize, cloudSize);
  ellipse(20, 540, 200, cloudSize, cloudSize);
  ellipse(150, 535, 200, cloudSize, cloudSize);
  ellipse(230, 535, 200, cloudSize, cloudSize);



  // if(counter > 4700){
  //   fill (42, 48, 61)
  // }

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
  //handle
  //stroke(235, 216, 52)
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