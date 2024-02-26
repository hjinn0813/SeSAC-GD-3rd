// for문
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

// 1부터 5까지 1씩 증가하면서 출력하는 방법
// 1. i <= 5
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 2. i < 6
for (let i = 0; i < 6; i++) {
  console.log(i);
}
// 5부터 1까지 1씩 감소하면서 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}
// 1~n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;
for (let i = 1; i <= n; i++) {
  // result = result + i;
  result += i;
}
console.log(result);

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
