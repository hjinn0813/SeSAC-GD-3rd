console.log("connected");

/* var 키워드
1. 변수 선언하고 값을 할당
2. 변수 선언과 값 할당 동시에 가능 */

// 1. 변수 선언
var varName; // undefined 상태
varName = "layla";
// 변수 할당

console.log(varName);
console.log("varName");

// 변수 재할당
varName = "Yuki";
console.log(varName);

// 2. 변수 선언과 값 할당 동시에
var varName2 = "layla2";

// var의 단점
// 1. 변수를 동일한 이름으로 재선언할 수 있음
var varName = "lily";
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
letName = "홍길동";
console.log(letName);

// 2. 변수 선언과 값 할당 동시에
let letName2 = "심청이";
console.log(letName2);

// let letName2 = "심봉사";
// 재선언 불가 (에러 발생)

letName2 = "심봉사";
console.log(letName2);
// 재할당은 가능
