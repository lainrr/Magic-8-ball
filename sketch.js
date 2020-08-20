// this query selector isn't working
const shakeButton = document.querySelector('shake');
console.log(shakeButton); //returns 'null'

const answers = ['yes.', 'no.', 'maybe?'];
let answer = ''

function pickRandomAnswer () {
  answerIndex = Math.floor(Math.random() * 2);
  answer = answers[answerIndex];
  console.log(answer);
}

// event listener won't work until query selector on line 1 works
// shakeButton.addEventListener('click', pickRandomAnswer);


function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    noStroke();
    fill('#2D5D7B');
    ellipse(210, 210, 300);
    fill('#457EAC');
    ellipse(200, 200, 300);
    
    stroke('#E7C5C5');
    strokeWeight(2);
    strokeJoin(ROUND);
    fill('#F1DEDE');
    triangle(200, 105, 120, 255, 280, 255);
    
    noStroke();
    fill('#2D5D7B');
    textSize(20);
    textAlign(CENTER, CENTER);
    text(answer, width/2, height/2);
    
    
  }