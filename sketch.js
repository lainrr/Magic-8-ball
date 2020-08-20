
const shakeButton = document.getElementById('shake');
const question = document.getElementById('question');

const answers = ['yes.', 'no!', 'maybe?', 'defo not', 'probs not', 'for sure', 'idk'];
let answer = ''

function shake () {
  if (shakeButton.innerHTML === 'Shake!') {
    answerIndex = Math.floor(Math.random() * 7);
    answer = answers[answerIndex];
    shakeButton.innerHTML = 'Shake again?'
    question.style.backgroundColor = '#cbf3d2';
    question.style.border = '2px solid white';
  } else {
    answer = '';
    question.value = '';
    shakeButton.innerHTML = 'Shake!'
    question.style.backgroundColor = 'white';
    question.style.border = '2px solid #9CE8AA';
  }
};

shakeButton.addEventListener('click', shake);

/*
const maroon = '#330c2f';
const purp = '#7b287d';
const lilia = '#7067cf';
const ltPurple = '#b7c0ee';
const gree = '#cbf3d2';
*/

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    noStroke();
    fill('#330c2f');
    ellipse(210, 210, 300);
    fill('#7067cf');
    ellipse(200, 200, 300);
    
    stroke('#330c2f');
    strokeWeight(5);
    //strokeJoin(ROUND);
    fill('#9CE8AA');
    triangle(200, 105, 120, 255, 280, 255);
    
    noStroke();
    fill('#7067cf');
    textSize(20);
    textAlign(CENTER, CENTER);
    text(answer, width/2, height/2);
    
    
  }