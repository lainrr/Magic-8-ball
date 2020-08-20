
const shakeButton = document.getElementById('shake');
const question = document.getElementById('question');


const answers = ['yes.', 'no!', 'maybe?', 'defo not', 'probs not', 'for sure', 'idk'];
let answer = ''


function shake () {
  if (shakeButton.innerHTML === 'Shake!') {
    answerIndex = Math.floor(Math.random() * 7);
    answer = answers[answerIndex];
    shakeButton.innerHTML = 'Shake again?'
    question.style.backgroundColor = '#f0efeb';
  } else {
    answer = '';
    question.value = '';
    shakeButton.innerHTML = 'Shake!'
    question.style.backgroundColor = 'white';
  }
};

shakeButton.addEventListener('click', shake);

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