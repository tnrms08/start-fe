// 1. 문자열 합치기
// const year = 2022;
// const month = 11;
// const day = 3;
// // const dateString = year + '-' + month + '-' + day;
// const dateString = `${year}-${month}-${day}`;
// // 출력: 2022-12-03
// console.log(dateString);

// 2. 문자열 분리
// const dateString = '2022-12-12';
// console.log(dateString.split('-').map(Number));
// 출력: [2022,12,12];

// 3. 문자열 변경
// const text = '나는 XX를 좋아해';
// const item = 'JS';
// console.log(text.replace('XX', item));
// 출력: 나는 JS를 좋아해

// 4. 문자열 검색
// const text = '안녕하세요. 나는 사람입니다.';
// const searchText = '사람';

// console.log(text.includes(searchText));
// 출력: true

// 5. 모든 배열값 더하기
// const point1 = [12, 34, 80, 72];
// const point2 = [1, 80, 94];
// // point3이 생길수도 있을때 대응
// function sumArray(array) {
//   return array.reduce((acc, cur) => acc + cur, 0);
// }
// const sum1 = sumArray(point1);
// const sum2 = sumArray(point2);
// console.log(sum1 + sum2);
// 출력: 373 (모든 배열값들이 합)

// 6. 소수점 이하를 버리고 정수를 구하기
// const a = 1.2;
// const b = 3.4;
// console.log('%d', a + b);
// 출력: 4

// 7. 랜덤수 구하기
// const min = 1;
// const max = 10;
// console.log(Math.floor(Math.random() * (max - min) + min));
//출력: 3 (1~10 포함한 랜덤수)

// 8. 배수 확인
// const target = 10;
// const num = 3;
// target이 num이 배수인지
// if (target % num === 0) console.log(true);
// else console.log(false);
// 출력: false

// 9. 대문자로 변경
// const nick = 'kakao';
// console.log(nick.toUpperCase());
// 출력: KAKAO

// 10. 원시타입 요소만 배열로 만들기
// const items = [1, 'a', true, ['a'], { n: 1 }];
// const primitives = items.filter(
//   (item) => typeof item !== 'object' && typeof item !== 'function'
// );
// console.log(primitives);
// 출력: [1,'a',true]

// 11. 배열값 나누기
// const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// const pageSize = 3;
// let answer = '';
// quiz
// pageSize에 따라 배열값 분리해서 출력
// pageSize=2 일때는 맨끝에 --- 없어야함
// for (let i = 0; i < items.length; i += pageSize) {
//   const arr = items.slice(i, i + pageSize);
//   answer += arr.join(',') + (arr.length === pageSize ? '---' : '');
// }
// console.log(answer);
// 출력: a,b,c---d,e,f---g,h,i---j

// 12. 배열값 나눠서 다시 배열로
// const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// const pageSize = 3;
// const arr = [];
// for (let i = 0; i < items.length; i += pageSize) {
//   arr.push(items.slice(i, i + pageSize));
// }
// console.log(arr);
// pageSize에 따라 배열값 분리해서 출력
// 출력: [ [a,b,c], [d,e,f], [g,h,i], [j] ]

// 13. 페이지의 시작번호 구하기
// const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// const pageSize = 3;
// const getStartIndexByPage = function (page) {
//   console.log((page - 1) * pageSize);
// };
// // 출력
// getStartIndexByPage(1); // 0
// getStartIndexByPage(2); // 3
// getStartIndexByPage(3); // 6

// 14. 전화번호 패턴 검사
// const phoneNumber = `010-1234-1234`;
// // xxx-xxxx-xxxx 패턴찾기
// var regExp = /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/;
// console.log(regExp.test(phoneNumber));
// 출력: true

// 15. 객체 값 변경
// const user = { nick: 'nio', age: 20, location: '제주' };
// user.age = 21;
// user.name = '부산';
// delete user.location;
// console.log(user);
// 출력: {nick:'nio', age:21, name:'부산'}

// 16. 문자열을 객체형으로
// const text = '{a:1, b:2}';
// const json = JSON.parse(text);
// console.log(json);

// 출력: {a:1 , b:2}

// 17. json을 문자열로
// const user = { nick: 'nio', age: 20, location: '제주' };
// const str = JSON.stringify(user);
// console.log(str);
// 출력: string "{ nick: 'nio', age: 20, location: '제주' }"

// 18. 새로운 배열 생성
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = items.filter((index) => index % 2 === 0);
// console.log(arr);
// 출력: 짝수만 [2,4,6,8,10]

// 19. 배열 필터
// const list = [
//   {
//     id: 1,
//     title: 'JS',
//     isPublic: true,
//   },
//   {
//     id: 2,
//     title: '기본',
//     isPublic: true,
//   },
//   {
//     id: 3,
//     title: 'ecma',
//     isPublic: true,
//   },
//   {
//     id: 4,
//     title: 'dom',
//     isPublic: false,
//   },
// ];

// const arr = list
//   .filter((item) => item.isPublic === true)
//   .map((item) => item.title);
// console.log(arr);
// 출력: ['JS','기본','ecma']  isPublic=true 의  title만 뽑기

// 20. 다음일 구하기
// const dday = '2022-02-02';
// const date = new Date(dday);
// date.setDate(date.getDate() + 1);
// const newDate = date.toISOString().slice(0, 10);
// console.log(newDate);
// 출력: '2022-02-03'
