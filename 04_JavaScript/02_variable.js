console.log('connected');

/* var 키워드
1. 변수 선언하고 값을 할당
2. 변수 선언과 값 할당 동시에 가능 */

// 1. 변수 선언
var varName; // undefined 상태
varName = 'layla';
// 변수 할당

console.log(varName);
console.log('varName');

// 변수 재할당
varName = 'Yuki';
console.log(varName);

// 2. 변수 선언과 값 할당 동시에
var varName2 = 'layla2';

// var의 단점
// 1. 변수를 동일한 이름으로 재선언할 수 있음
var varName = 'lily';
console.log(varName);

// 2. 변수를 선언하기 전에 값을 할당할 수 있다
// 장점 같아 보일 수 있지만 유지+보수할 때 최악의 단점
aa = 123;
console.log(aa);

/* let 키워드
1. 변수 선언하고 값을 할당
2. 변수 선언과 값 할당 동시에 가능 */

// 1. 변수 선언
let letName;
letName = '홍길동';
console.log(letName);

// 2. 변수 선언과 값 할당 동시에
let letName2 = '심청이';
console.log(letName2);

// let letName2 = "심봉사";
// 재선언 불가 (에러 발생)

letName2 = '심봉사';
console.log(letName2);
// 재할당은 가능

// --------------------------------------------------------------------
// 2월 23일 학습내용
/* const: 반드시 변수 선언과 값 할당이 동시에 이루어져야 한다.
변수 재선언 재할당 불가능. 변하지 않는 값을 변수에 저장할 때 사용한다. */
// const constName; 선언과 동시에 값 할당 필요해서 error 발생

const constName = 'layla';
console.log(constName); // layla 출력

/* 정리:
- var: ES6 이전에 사용되던 변수 선언 키워드 > 현재는 사용 지양하자!
- let: 변수 선언 키워드.
변수 선언한 이후에 값 할당. 중복선언 불가능, 재할당 가능(값 수정 가능).
- const: 상수 선언 키워드. (상수 = 변하지 않는 값)
변수 선언과 값 할당 동시에 해야한다. 재선언, 재할당 모두 불가능.

식별자 규칙 (변수명, 함수명 등 이름 지정 규칙):
- JS에서 이미 의미가 있는 단어인 '예약어' 사용 불가.
- 숫자가 첫 글자가 될 수 없다.
- 특수문자는 _ , $ 만 허용
- 공백 사용 불가

사용 가능한 식별자: Fruit, name1, name$, myName
사용 불가능한 식별자: var, let, const, 1st, my name, my-name
*/
