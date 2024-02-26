console.log('connected');
/* 조건문
- 조건에 따라 논리 구조를 나눔
- 각 조건은 '분기'라고 한다
- 조건에 따라 서로 다른 문장을 실행한다
*/

// if문 기본 형태 (조건이 하나만 있는 경우)
if (5 > 3) {
  console.log('5는 3보다 크다');
}
if (5 > 7) {
  console.log('조건이 false이므로 실행되지 않음');
}

// if ~ else ~ (조건이 참,거짓 2개)
// let number = Number(prompt('숫자를 입력해주세요'));
// 입력받은 값을 숫자로 형변환
let number = 8;
if (number > 10) {
  console.log('입력받은 수가 10보다 크다'); // 조건이 true일때 실행
} else {
  console.log('입력받은 수가 10보다 작다'); // 조건이 false일때(숫자가 작거나 같을때) 실행
}

/* else if 문
- if else 문에 다른 조건을 추가하는 형식
- else문은 하나만 사용 가능 하지만 else if 문은 여러개 사용 가능
- 여러개의 분기로 나누고 싶을때 else if를 여러개 사용해서 조건 추가 가능 */
if (number > 10) {
  console.log('입력받은 수가 10보다 크다');
} else if (number === 10) {
  console.log('입력받은 수가 10입니다');
} else {
  console.log('입력받은 수가 10보다 작다');
}

console.clear(); // 콘솔에 입력했던 내용 전부 삭제하는 명령

// if문으로 작성한 성적 계산 프로그램
// const score = Number(prompt('점수를 입력해주세요'));
/* 조건이 true가 나온다면 해당 코드블럭을 실행하고 나머지 조건문은 실행되지 않음.
위의 조건을 통과하고 다음 조건문을 실행하는 경우,
위의 조건들이 모두 false 였음을 잊지 않기 */
const score = 80;
if (score > 100) {
  console.log('점수가 잘못 입력되었습니다');
  // 100점보다 큰 점수는 없음
} else if (score >= 90) {
  console.log('A'); // 100~90점 사이일 때 실행
} else if (score >= 80) {
  console.log('B'); // 80~89점 사이일 때 실행
} else if (score >= 70) {
  console.log('C');
} else if (score >= 60) {
  console.log('D');
} else {
  console.log('E'); // 59점 이하의 모든 점수에서 실행
}

// 실습과제 - if문으로 콘솔에 연령대별 메시지 출력
const age = 30;
if (age >= 20) {
  console.log('성인입니다!');
} else if (age >= 17) {
  console.log('고등학생');
} else if (age >= 14) {
  console.log('중학생');
} else if (age >= 8) {
  console.log('초등학생');
} else if (age >= 0) {
  console.log('유아');
} else {
  console.log('음수값이 사용됐습니다.');
}

// 다른 입력방법
if (age < 0) {
  console.log('음수 값이 들어왔습니다.');
} else if (age < 8) {
  console.log('유아');
} else if (age < 14) {
  console.log('초등학생');
} else if (age < 17) {
  console.log('중학생');
} else if (age < 20) {
  console.log('고등학생');
} else if (age < 150) {
  console.log('성인');
} else if (age >= 150) {
  console.log('나이로 들어올 수 없는 값입니다.');
}

// 추가 내용
// if (age >= 150 && age < 0) {
//   console.log('나이로 들어올 수 없는 값입니다.');
// }

console.log('---------------------------------------------');
// 조건문 중첩하기
const userId = 'user01';
const userPw = '1234';

// 조건문 함수로 구현
/**
 * @description 아이디와 비밀번호를 확인해 적절한 알림창을 적용 (JS doc)
 * @param id: string
 * @param pw: string
 */
function loginUser() {
  // const inputId = prompt('아이디를 입력해주세요');
  // const inputPw = prompt('비밀번호를 입력해주세요');
  const inputId = 'user02';
  const inputPw = '1004';

  if (userId === inputId) {
    if (userPw == inputPw) {
      console.log('로그인 성공');
      alert(`안녕하세요, ${inputId}님!`);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  } else if (inputId === '') {
    alert('아이디가 입력되지 않았습니다.');
  } else {
    alert('아이디를 다시 입력해주세요.');
  }
}
loginUser();

// switch문
// switch의 괄호 안과 case의 조건으로 비교식이 들어갈 수 없음.
/* 
- 변수 x의 값과 첫번째 case문의 값 3을 비교
- 두 값이 동일하다면 콜론 뒤의 코드가 실행됨
- break문을 통해 해당 스코프에서 빠져나옴
- 만약 첫번째 case문의 값과 x가 다르다면 다음 case문의 값과 비교
- 모든 case문의 값과 x의 값이 다르다면 default문 다음의 코드가 실행
- break는 반드시 작성, default는 생략 가능
- switch문의 소괄호 안에는 조건(불리언)이 아닌 값이 들어감. case에도 조건이 아닌 값을 작성.
*/
let x = 4;
switch (x) {
  case 3:
    console.log('x는 3입니다');
    break;
  case 4:
    console.log('x는 4입니다');
    break; // 브레이크 작성하지 않으면 case 5까지 실행됨.
    console.log('break 이후에 작성된 코드는 실행되지 않음');
  case 5:
    console.log('x는 5입니다');
    break;
  default:
    console.log('x는 3,4,5가 아닙니다');
}

// switch문으로 작성한 성적 계산 프로그램
number = 99;
switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
    break; // default 뒤에는 break 작성하지 않아도 무방함
}

// 삼항연산자 - if문을 한 줄로 작성하는 방법 (if, else)
// 조건식 ? 참일 때 실행될 코드 : 거짓일 때 실행될 코드;
// 홀수, 짝수 판별하기
let num = 5;
if (num % 2 === 1) {
  console.log('홀수');
} else {
  console.log('짝수');
}

// 삼항연산자로 변환
let result = num % 2 === 1 ? '홀수' : '짝수';
console.log(result); // 변수에 담아서 출력

let fruit = 'banana'; // 콘솔에 담아서 출력
console.log(fruit === 'banana' ? '바나나' : '바나나 아님');

let isLoggedIn = true;
isLoggedIn === true
  ? console.log('로그인 유저입니다')
  : console.log('로그인하지 않은 유저입니다');

console.clear;

// 실습 - 오전, 오후 출력하기
let now = new Date().getHours();
console.log(now);
console.log(now < 12 ? '오전' : '오후');
