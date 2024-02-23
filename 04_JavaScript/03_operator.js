console.log("connected!");

// 대입연산자: =
// 변수의 값을 할당할때 사용한다.
let a = 1;
const b = "1";

// 비교연산자: 피연산자의(양쪽의) 값이 같은지 비교해준다.
// ==, !=
// 데이터 타입이 달라도 괜찮음. 값만 비교한다.
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 == "1"); // true (타입이 다르지만 값은 같으니까)

console.log(1 != 1); // false (1과 1이 같지 않다 -> 거짓 -> false 출력)
console.log(1 != 2); // true
console.log(1 != "1"); // false

// ===, !==
// 피연산자의 값과 타입까지 모두 비교한다. 엄격한 동등 연산자
console.log("--------------------------");
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 === "1"); // false (데이터 타입이 다르기 때문)

console.log(1 !== 1); //  false (숫자 1과 숫자 1은 같지 않다)
console.log(1 !== 2); // true (숫자 1과 숫자 2는 같지 않다)
console.log(1 !== "1"); // true (숫자 1과 문자 1은 같지 않다)

// 비교연산자: >, >=, <, <=
console.log("--------------------------");
console.log(2 > 1); // true
console.log(1 >= 1); // true
console.log(2 < 1); // false
console.log(1 <= 1); // true

// 산술연산자: +, -, *, /, %, **
console.log("--------------------------");
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(1 * 2); // 2
console.log(1 / 2); // 0.5

// 나머지 연산자: 홀수, 짝수 판단이나 10 단위로 끊을 때 사용
console.log(1 % 2); // 몫: 0, 나머지: 1 -> 1 출력
console.log(8 % 3); // 몫: 2, 나머지: 2 -> 2 출력
console.log(8 % 5); // 몫: 1, 나머지: 3 -> 3 출력
console.log(1 ** 2); // 1

// 논리연산자
// !(not), &&(and), ||(or)
console.log("--------------------------");
console.log(!true); // false
console.log(!false); // true

console.log(!!true); // true (두 번 뒤집음)
console.log(!!false); // false

console.log(true && true); // true (기호 양 옆의 값이 모두 true여야 true 출력)
console.log(1 < 2 && 1 < 5); // true
console.log(1 > 2 && 1 < 5); // false (앞의 값이 false여서 바로 false 출력)

console.log(true || true); // true (둘 중에 하나만 true여도 true 출력)
console.log(true || false); // true
console.log(1 > 2 || 1 < 5); // true
console.log(1 > 2 || 1 > 5); // false (둘 다 false니까)

// 연산자 응용
console.log("--------------------------");
console.log(!(2 > 1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 < 1) || 5 > 3); // true

// Quiz: 코드 결과 작성
console.log("--------------------------");
console.log(3 <= 1); // false
console.log(7 == "7"); // true
console.log(-10 >= -11); // true
