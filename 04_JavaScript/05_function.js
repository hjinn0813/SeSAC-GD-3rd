// 함수 정의
// 1. 명시적 함수 선언 -> 함수 선언문
// 호출 먼저 하고 정의해도 정상적으로 작동함
function helloWorld1() {
  console.log('helloWorld1');
}
helloWorld1(); // 함수 호출하라는 주문

// 2. 함수 표현식 - 반드시 선언이 먼저 진행되어야 함
const helloWorld2 = function () {
  console.log('helloWorld2');
};
helloWorld2();

// 2-2. 화살표 함수
const helloWorld3 = () => {
  console.log('helloWorld3');
};
helloWorld3();

// return 사용 - 함수 내부 코드의 최종 결과 값 출력하기
/* (콘솔을 찍는 것에서 크치지 않고) 함수 내부 코드의 최종 결과값을 저장하고 보관하는 키워드.
함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단.
인자 없이 return 값만 가지고 있는 함수.
*/
function onePlusOne() {
  return 1 + 1;
}
console.log(onePlusOne()); // -> console.log(2)라고 계산됨 -> 2 출력

function numPlusOne(num) {
  return num + 1;
}
console.log(numPlusOne(5)); // num = 5 -> 5+1 계산 -> 6 출력

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(5, 7)); // 숫자들을 num에 대입하여 계산 후 결과 출력

// 함수 반환값 변수에 저장해서 사용
const result = sum(5, 7);
console.log(result);

function hello(name) {
  alert(`hello! ${name}`);
}
const username = 'layla';
hello(username);
