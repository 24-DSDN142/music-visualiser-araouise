
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true

let Snail = [];
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (firstRun) {
    rectMode(CENTER);
    Snail.push(loadImage('happySnail_0.png'));
    Snail.push(loadImage('happySnail_1.png'));
    Snail.push(loadImage('happySnail_2.png'));


    firstRun = false
  }

  background(255);


  var VocalFrame = int(map(vocal, 0,100, 0,3));

  console.log(VocalFrame);
  push();
  scale(0.5);
  image(Snail[VocalFrame], width/2, height/2)
  pop();

}