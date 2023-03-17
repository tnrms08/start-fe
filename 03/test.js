// const a = 'a';
// console.log(a);
// a = '11';
// console.log(a);

// array create
// const todos = ['운동'];
// const todo = '공부';
// todos.push(todo);
// console.log(todos);

// // read
// todos.forEach(function (todo) {
//   console.log(todo);
// });

// update
// const updateTodo = '공부';
// const updateIndex = todos.findIndex(function (todo) {
//   return todo === updateTodo;
// });

// todos[updateIndex] = '게임';
// console.log(todos);

// const newTodos = todos.map(function (todo) {
//   if (todo === updateTodo) {
//     return '게임';
//   }
//   return todo;
// });
// console.log(newTodos);

//

// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);

// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);

// const a = { a: 1, b: 1 };
// a.c = 1;
// console.log(a);

// function test() {
//   console.log('test()');
// }

// var id = setInterval(test, 1000); //1초마다 계속 실행

// clearInterval(id);

// var nick = 'aji'; //전역변수

// function test() {
//   var age = 30; //지역변수
//   console.log(nick, age);
// }

// test();
// console.log(age);

// var name = 'global';
// function test() {
//   console.log(name);
//   var name = 'local';
//   console.log(name);
// }
// test();

// test2();

// function test2() {
//   console.log('test');
// }

// var count = [10,20,30,40,50,60,70,100];  배열 count 요소들의 평균값 구하는 코드를 작성하세요
var count = [10, 20, 30, 40, 50, 60, 70, 100];
var sum = 0;

for (var i = 0; i < count.length; i++) {
  sum = sum + count[i];
}
console.log(sum / count.length);

// 구구단을 출력하는 코드를 for구문을 사용하여 작성하세요
for (var i = 1; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}

// 위에서 만든 구구단코드를 함수로 작성하세요
function timesTable() {
  for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      console.log(i + ' * ' + j + ' = ' + i * j);
    }
  }
}
timesTable();

// 메소드가 포함된 객체를 생성하세요
var person = {
  nick: 'misuk',
  age: 24,
  live: 'jeju',
  say() {
    console.log('hello');
  },
};

// window.prompt() 를 사용하여 사용자에게 숫자값을 입력받고 받은 숫자값들의 합을 출력하는 코드를 작성하세요.
var num = undefined;
var sum = 0;

while (true) {
  num = window.prompt('숫자를 입력하세요.');
  if (Number(num)) sum = sum + Number(num);
  else break;
}
console.log(sum);
