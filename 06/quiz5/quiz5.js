const $box = document.querySelector('.box');
const $box1 = document.querySelector('.box1');
let isDown = false;

function startDrag($component) {
  isDown = true;
}

function stopDrag($component) {
  isDown = false;
}

function drag($component) {
  if (isDown) {
    $component.style.left = `${event.clientX - 50}px`;
    $component.style.top = `${event.clientY - 50}px`;
  }
}


function addEvent($component) {
  $component.addEventListener('mousedown', () => {
    startDrag($component);
  });
  $component.addEventListener('mousemove', () => {
    drag($component);
  });
  $component.addEventListener('mouseup', () => {
    stopDrag($component);
  });
}

function init() {
  addEvent($box);
  addEvent($box1);
}

init();
