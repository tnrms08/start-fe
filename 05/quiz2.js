// var board = document.getElementById('board');
// for (var i = 0; i < 4; i++) {
//   for (var j = 0; j < 4; j++) {
//     // TODO : 여기에 필요한 코드를 작성해주세요.
      
//   }
// }

function printBoards() {
  var $board = document.getElementById('board');
  var boardLength = 4;

  let isWhite = false;
  let className = '';
  let str = '';

  for (let i = 0; i < boardLength; i++) {
    for (let j = 0; j < boardLength; j++) {
      if (isWhite) className = 'white';
      else className = 'black';

      str += `<span class="` + className + `"></span>`;
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }

  $board.innerHTML = str;

}

let $click = null;
function select(event) {

  if ($click) {
    $click.className = $click.className.replace(' select', '');
  }

  var element = event.currentTarget;
  element.className += ' select';
  $click = element;
}

function addEvent() {
  const $boards = document.querySelectorAll('span');
  const boardsLength = $boards.length;

  for (let i = 0; i < boardsLength; i++) {
    $boards[i].addEventListener('click', select);
  }
}

printBoards();
addEvent();