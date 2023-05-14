const openModal = ({ text }) => {
  const $content = document.createElement('div');
  $content.classList.add('content');
  $content.textContent = text;

  const $modal = document.createElement('div');
  $modal.classList.add('modal');

  const $body = document.createElement('div');
  $body.classList.add('body');
    $body.appendChild($content);

    document.body.appendChild($modal);
    
      const $close = document.createElement('div');
      $close.classList.add('close');
      $close.textContent = 'X';
    $close.addEventListener('click', () => { $modal.remove()});
    
    $modal.appendChild($body);
    $modal.appendChild($close);
};

export { openModal };
