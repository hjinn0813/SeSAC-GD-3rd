// 1. for문
/* for (for문 내에서 사용할 변수 선언; 조건식(얼마나 반복할지); 증감식) {
  반복할 코드 작성
} */
// i + 1 = i, i += 1, i++ (모두 같은 의미)
// i++: 변수 i에서 값을 꺼낸 뒤, 1을 더함 (i--는 반대 개념)
// i += 5 -> i를 5씩 늘리고 싶다는 의미

for (let i = 0; i < 10; i++) {
  // console.log('안녕', i);
  console.log(`안녕 ${i}`);
}
for (let i = 0; i < 10; i += 3) {
  console.log(i);
}
console.log('------------------------------');

// 1부터 5까지 1씩 증가하면서 출력하는 방법
// 1. i <= 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// 2. i < 6
for (let i = 1; i < 6; i++) {
  console.log(i);
}
// 5부터 1까지 1씩 감소하면서 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log('------------------------------');

// 1~n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;
for (let i = 1; i <= n; i++) {
  // result = result + i;
  result += i;
  console.log(result); // 실시간으로 숫자 더해지는거 확인 가능
}
console.log(result);
console.log('------------------------------');

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ['americano', 'latte', 'espresso', 'tea'];
console.log(cafe.length); // 배열의 길이 출력
for (let i = 0; i < cafe.length; i++) {
  console.log('cafe menu', cafe[i]);
  // 배열의 0번(i=0)부터 3번까지 순서대로 추출
}

// 배열 요소의 총합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  // numSum = numSum + numArr[i];
  numSum += numArr[i];
  console.log(numSum);
}
console.log(numSum);

// if문과 for문 같이 사용, 짝수만 출력
// 1. for문만 사용
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}
// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.clear();

// 2단 만들기
// const number = Number(prompt('구구단을 계산할 숫자 입력'));
const number = 2;
console.log(number + '단');
for (let i = 1; i < 10; i++) {
  // console.log(number + '*' + i + '=' + number * i);
  console.log(`${number} * ${i} = ${number * i}`);
}

// 이중 for문
// 'i 먼저 한번 찍고, j가 10이 될때까지 돌기' 반복
for (let i = 0; i < 5; i++) {
  console.log('i :', i);

  for (let j = 0; j < 10; j++) {
    console.log(`현재 i는 ${i}이고, J는 ${j}이다`);
  }
}

console.clear();
// -----------------------------------------------------------------------------
// 2월 28일 학습내용
// 2. while문
/* while(조건){조건에 만족하는 동안 실행될 코드}
- 조건을 제어하는 구문이 없기 때문에 무한반복되지 않도록 주의해야 한다
*/

// while문 기본 형태
let num = 1;
while (num <= 5) {
  console.log(num);
  num++; // 여기가 없으면 무한대로 1이 찍힘
}
console.log('----------------------------------');

// while로 9부터 4까지 콘솔에 찍기
num = 9;
while (num >= 4) {
  console.log(num);
  num--;
}
console.log('----------------------------------');

// 1부터 10까지 짝수만 출력
num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
console.log('----------------------------------');

// 10부터 1까지 홀수 출력
num = 10;
while (num >= 1) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num--;
}
console.log('----------------------------------');

// 무한반복: 조건식이 참이면 while문을 계속 반복
let num2 = 0;
while (true) {
  console.log(num2);
  num2++;

  // break로 빠져나가야 할 조건 설정
  // num2가 11이 되면 아래의 조건이 참이 되면서 while문 종료
  if (num2 > 10) {
    break;
  }
}

num2 = 0;
// confirm의 확인은 true, 취소는 false를 반환
// 취소 클릭시 조건이 false가 되어 반복문 종료
// while (confirm('계속 할까요?')) {
//   num2++;
//   alert(`${num2}번째 알림`);
// }
console.log('----------------------------------');

// 실습1 - 합계 구하기 (for, while 둘 다 사용)
let result1 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 || i % 2 === 0) {
    result1 += i;
  }
}
console.log(result1);

let i = 0;
let result2 = 0;
while (i <= 100) {
  if (i % 5 === 0 || i % 2 === 0) {
    result2 += i;
  }
  i++;
}
console.log(result2);

// 실습2 - 13의 배수이면서 홀수 찾기
// let input = Number(prompt('숫자 입력'));
for (i = 0; i <= 10000; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

// 실습3 - 이중 for문으로 구구단 출력
// i는 구구단의 단, j는 단에 곱해줄 숫자
for (i = 2; i <= 9; i++) {
  console.log(`---${i}단---`); // 2단~9단 변경
  for (j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`); // *1, *2 변경
  }
}
