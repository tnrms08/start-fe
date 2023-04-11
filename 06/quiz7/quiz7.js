const $box = document.querySelector('.box');
const $bug = document.querySelector('#bug');
const $point = document.querySelector('#point');
const $life = document.querySelector('#life');

const boxRect = $box.getBoundingClientRect();
let point = parseInt($point.innerText);
let life = parseInt($life.innerText);

function pointUp() {
  point++;
  $point.innerText = point;
}

function pointDown() {
  point--;
  $point.innerText = point;
  if (life == 0) {
    gameOver();
  }
  if (point <= 0) {
    restart();
  }
}

function restart() {
  $point.innerText = 0;
  life--;
  $life.innerText = life;
}

function gameOver() {
    alert('게임이 종료되었습니다.');
}

function randomPosition() {
  event.stopPropagation();

  const x = Math.floor(Math.random() * (boxRect.width + 1));
  const y = Math.floor(Math.random() * (boxRect.height + 1));

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';

  pointUp();
}

function init() {
  $bug.addEventListener('click', randomPosition);
  $box.addEventListener('click', pointDown);
}

init();
