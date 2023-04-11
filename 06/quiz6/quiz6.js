const $num = document.querySelector('#num');
const $btn = document.querySelector('#btn');
const $result = document.querySelector('#result');

$btn.addEventListener('click', () => {
    let value = $num.value;
    let resultHtml = '';
    if(isNaN(value)) {
        alert('숫자를 입력하세요.');
    } else {
        for (let i = 1; i < 10; i++) {
        resultHtml += `${value} x ${i} = ${value * i}<br>`;
        }
        $result.innerHTML = resultHtml;
    }
});
