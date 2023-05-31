const $form = document.querySelector('.new-task');
const $input = $form.querySelector('input');
const $ul = document.querySelector('ul');

function addTodo(text) {
  const $li = document.createElement('li');
  const $deleteButton = document.createElement('button');
  const $checkbox = document.createElement('input');
  const $span = document.createElement('span');

  $span.innerText = text;
  $span.classList.add('text');

  $deleteButton.innerText = '×';
  $deleteButton.classList.add('delete');
  $deleteButton.addEventListener('click', deleteTodo);

  $checkbox.type = 'checkbox';
  $checkbox.classList.add('toggle-checked');
  $checkbox.addEventListener('change', toggleChecked);

  $li.appendChild($deleteButton);
  $li.appendChild($checkbox);
  $li.appendChild($span);

  $ul.appendChild($li);
}

function deleteTodo(event) {
  const $li = event.target.parentNode;
  $ul.removeChild($li);
}

function toggleChecked(event) {
  const $li = event.target.parentNode;
  $li.classList.toggle('checked');
}

$form.addEventListener('submit', function(event) {
  event.preventDefault();
  const text = $input.value.trim();
  if (text !== '') {
    addTodo(text);
    $input.value = '';
  }
});