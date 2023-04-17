
// 입력한 id,pw가 맞을경우엔 success , 아니면 error출력

const form = document.getElementById('form');
var result = document.getElementById('result');

const id = 'hello';
const pw = 'world';

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    var user_id = document.getElementsByName('id')[0].value;
    var user_pw = document.getElementsByName('pw')[0].value;
    
    const text = (id === user_id && pw === user_pw )? 'success' : 'error';

    result.textContent = text;
    result.className = text;
})
