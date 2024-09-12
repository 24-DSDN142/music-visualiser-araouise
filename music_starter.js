
let Xmove = 1
let Xmove2 = 1
let Xmove3 = 3
let Xmove4 = 4
let Xmove5 = 1
let Xmove6 = 3

let Ymove = 0
let Ymove1 = 0
let Ymove2 = 0
let Ymove3 = 0
let Ymove4 = 0
let Ymove5 = 0

let whaleMoveX = 0
let whaleMoveY = 0

let Sky = [];
let Sky1 = [];
let Sky2 = [];
let whale = []
let firstRun = true;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

if (firstRun){
  rectMode(CENTER);
  Sky = loadImage('bluesky.png');
  Sky1 = loadImage('sunset.png');
  Sky2= loadImage('night.png'); 
  whale = loadImage('whale.png');
  firstRun = false
}
  background(135, 206, 235) // pastel blue
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER);
  textSize(24);

  console.log(counter);
  strokeWeight(0)

// blue sky
if(counter < 3200 ){
  push();
rectMode(CENTER);
image(Sky,0, 0);
pop();
}

// sunset
if(counter > 3201 && counter < 4700){
  push();
rectMode(CENTER);
image(Sky1,0, 0);
pop();
}

// night
  if(counter > 4701){
    push();
    rectMode(CENTER);
    image(Sky2,0, 0);
    pop();
  }

  //whale
if(counter >= 115 && counter <=300){
  PopUp = PopUp + 0.5;
}else if (counter>= 301  && counter <=2000){
  PopUp = PopUp + 0.7
}else 
PopUp = 0.1


if(counter > 4700){ //stars
strokeWeight(0);
 let y = 200
  let stars = map(vocal, 0, 100, 20, 4)
  for( let i = 1; i < 4; i++){
  let loopyY = y * i;
  fill (245, 242, 230)
  ellipse(100, loopyY, stars, stars)
  ellipse(300, loopyY - 50, stars, stars)
  ellipse(500, loopyY, stars, stars)
  ellipse(700, loopyY - 50, stars, stars)
  ellipse(900, loopyY, stars, stars)
  }

}

// balloon
  if(counter > 1800){
    noFill();
    strokeWeight(2);
  beginShape();
  vertex(101, height - Ymove4);
  vertex(101, height + 70 - Ymove4);
  endShape(CLOSE);
  
  
    fill (38, 66, 166);// blue
  ellipse(100, height - Ymove4, 40, 50);
  
  
  Ymove4 = Ymove4 + 0.6;
  
  }
strokeWeight(0);
  let cloudSize4 = map(other, 0, 100, 70, 20);
  fill (218, 221, 227); //shadow for far clouds - grey
  ellipse(width - Xmove3, 205, 50, cloudSize4, 1); // mid (far clouds)
  ellipse(width - 10 - Xmove3, 215, 50, cloudSize4, 1); // left
  ellipse(width  + 10 - Xmove3, 210, 50, cloudSize4, 1); // right

fill (237, 240, 245);
  ellipse(width - Xmove3, 200, 50,cloudSize4, 1); // mid (far clouds)
  ellipse(width - 10 - Xmove3, 210, 50, cloudSize4, 1); // left
  ellipse(width + 10 - Xmove3, 205, 50, cloudSize4, 1); // right

  fill (218, 221, 227); //shadow for far clouds - grey
  ellipse(width - Xmove6 /3, 435, 50, cloudSize4, 1); // mid (far clouds)
  ellipse(width - 10 - Xmove6 /3 , 445, 50, cloudSize4, 1); // left
  ellipse(width  + 10 - Xmove6 /3 , 440, 50, cloudSize4, 1); // right

fill (237, 240, 245);
  ellipse(width - Xmove6 /3, 430, 50,cloudSize4, 1); // mid (far clouds)
  ellipse(width - 10 - Xmove6 /3, 440, 50, cloudSize4, 1); // left
  ellipse(width + 10 - Xmove6 /3, 435, 50, cloudSize4, 1); // right

  if(counter > 2500){
    noFill();
    strokeWeight(2);
  beginShape();
  vertex(1001, height - Ymove5);
  vertex(1001, height + 70 - Ymove5);
  endShape(CLOSE);
  
  
    fill (166, 38, 38);// red
  ellipse(1000, height - Ymove5, 40, 50);
  
  
  Ymove5 = Ymove5 + 0.6;
  }

  strokeWeight(0);
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
  fill (232, 237, 237)
  ellipse(width - Xmove2, 255, cloudSize3, 100)
  ellipse(width + 70 - Xmove2, 275, cloudSize3, 100);
  // ellipse(width + 90 - Xmove2, 245, cloudSize3, 100);
  ellipse(width - Xmove2, 305, cloudSize3, 100); //middle cloud
  ellipse(width + 90 - Xmove2, 305, cloudSize3, 100); //middle cloud - right
  ellipse(width - 60 - Xmove2, 305, cloudSize3, 100); //middle cloud - left

  fill (255);
  ellipse(width - Xmove2, 250, cloudSize3, 100)
  ellipse(width + 70 - Xmove2, 270, cloudSize3, 100);
  // ellipse(width + 90 - Xmove2, 245, cloudSize3, 100);
  ellipse(width - Xmove2, 300, cloudSize3, 100); //middle cloud
  ellipse(width + 90 - Xmove2, 300, cloudSize3, 100); //middle cloud - right
  ellipse(width - 60 - Xmove2, 300, cloudSize3, 100); //middle cloud - left

  //balloon
  if(counter > 3000){
    noFill();
    strokeWeight(2);
  beginShape();
  vertex(501, height - Ymove3);
  vertex(501, height + 70 - Ymove3);
  endShape(CLOSE);
  
  
    fill (212, 193, 102);// yellow
  ellipse(500, height - Ymove3, 40, 50);
  
  
  Ymove3 = Ymove3 + 0.6;
  
  }

  strokeWeight(0);
  
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
  fill (232, 237, 237)
  ellipse(width - Xmove5, 545, 200, cloudSize6, cloudSize6);
  ellipse(width - 30 - Xmove5, 575, 200, cloudSize6, cloudSize6);
  ellipse(width + 30 - Xmove5, 580, 200, cloudSize6, cloudSize6);  
  
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
  if (Xmove3 > 1100){
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

Xmove6 = Xmove6 + 0.3;
  if (Xmove6 > 1100){
    Xmove6 = 0;
  }

push();
rectMode(CENTER);
image(whale, width - PopUp, height - PopUp);
pop();



 let cloudSize = map(other, 0, 100, 160, 80)

  fill (255); //white
  ellipse(50, 400, 200, cloudSize, cloudSize); //clouds (back)
  ellipse(130, 430, 200, cloudSize, cloudSize);
  ellipse(210, 480, 200, cloudSize, cloudSize);

  fill (237, 238, 240);
  ellipse(250, 535, 200, cloudSize, cloudSize); //shadow (farthest back)

  fill (255); // white
  ellipse(255, 530, 200, cloudSize, cloudSize); //lower right cloud



//neck
fill (214, 202, 193);
beginShape();
vertex(220, 325);
vertex(205, 400);
vertex(195, 400);
vertex(200, 325);
endShape();


//head
strokeWeight(0);
fill (230, 218, 209);
ellipse(210, 330, 35, 50);

fill (227, 161, 218); // girl's body
ellipse(200, 410, 50, 80);
 fill (0)


//hair
beginShape();
vertex(183, 325);
bezierVertex(181, 290, 235, 290, 235, 324);
endShape();


rect (193, 345, 20, 50);

//headphones
let headphones = map(bass, 0, 100, 30, 20);
fill (168, 45, 45);
ellipse(193, 338, headphones, headphones, 25);

beginShape();
vertex(212, 299);
bezierVertex(200, 353, 172, 357, 200, 299);
endShape();

let headphones2 = map(bass, 0, 100, 20, 5);
fill (112, 29, 29);
ellipse(193, 338, headphones2, headphones2, 10);

//arm
fill (230, 218, 209);
beginShape();
vertex(225, 470);
vertex(210, 400);
vertex(195, 415);
vertex(220, 470)
endShape();

//shoulder
fill (196, 132, 188)
beginShape();
vertex(193, 423);
bezierVertex(175, 383, 216, 382, 215, 411);
endShape();

//leg
stroke(0);
strokeWeight(1);
fill (40, 72, 128);
beginShape();
vertex(211, 458);
bezierVertex(299, 445, 257, 525, 262, 520);
endShape();

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
  ellipse(50, 450, 200, cloudSize, cloudSize); //clouds (front)
  ellipse(150, 480, 200, cloudSize, cloudSize);
  ellipse(20, 540, 200, cloudSize, cloudSize);
  ellipse(150, 535, 200, cloudSize, cloudSize);
  ellipse(230, 535, 200, cloudSize, cloudSize);

  push();
  scale(5);
  image(Sky, 600 , 500);
  pop();

if(counter > 1600 ){
  noFill();
  strokeWeight(2);
beginShape();
vertex(601, height - Ymove);
vertex(601, height + 150 - Ymove);
endShape(CLOSE);


  fill (166, 38, 38);// red
ellipse(600, height - Ymove, 70, 80);


  Ymove = Ymove + 0.8;

}

if(counter > 1900 ){
  noFill();
  strokeWeight(2);
beginShape();
vertex(301, height - Ymove1);
vertex(301, height + 150 - Ymove1);
endShape(CLOSE);


  fill (38, 66, 166);// blue
ellipse(300, height - Ymove1, 70, 80);


  Ymove1 = Ymove1 + 0.6;

}

if(counter > 2300 ){
  noFill();
  strokeWeight(2);
beginShape();
vertex(901, height - Ymove2);
vertex(901, height + 150 - Ymove2);
endShape(CLOSE);


  fill (212, 193, 102);// yellow
ellipse(900, height - Ymove2, 70, 80);


  Ymove2 = Ymove2 + 0.6;

}



// push();
// rectMode(CENTER);
// image(Sky1, 500, 300);
// pop();


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
  // let stars = map(vocal, 0, 100, 40, 20)
  // for( let i = 1; i < 4; i++){
  // let loopyY = y * i;
  // fill (255)
  // ellipse(100, loopyY, stars, stars)
  // ellipse(200, loopyY, stars, stars)
  // ellipse(300, loopyY, stars, stars)
  // ellipse(400, loopyY, stars, stars)
  // ellipse(500, loopyY, stars, stars)
  // }