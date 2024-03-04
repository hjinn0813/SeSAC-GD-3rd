/* JS 표준 내장객체: 자바스크립트가 기본적으로 가지고 있는 객체
string, number, array, date, math 등 */

// 1. Date 객체
// 시간, 날짜에 대한 정보를 얻기 위해 사용한다.

// 현재 날짜 (시간까지 출력)
let now = new Date();
console.log(now); // Mon Mar 04 2024 11:48:10 GMT+0900 (한국 표준시)

// 1000ms === 1s
// 1000ms * 3600 === 1000ms * 60 * 60 === 1h
// 1000ms * 3600 * 24 === 24h
// 1970년 1월 1일 기준으로 해당 ms만큼 지난 시간
let Jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(Jan_02_1970); // Fri Jan 02 1970 09:00:00 GMT+0900 (한국 표준시)

/* new Date(year, month, date, hour, minute, seconds, ms)
year: 4자리; month: 0이 1월이고 11이 12월; date: 1~31, 값이 없으면 1로 처리;
hour, min, sec, ms: 값이 없으면 0으로 처리 */
console.log(new Date(2021, 2, 15)); // Mon Mar 15 2021 00:00:00 GMT+0900 (한국 표준시)
console.log(new Date(2021, 2, 15, 18, 30, 15)); // Mon Mar 15 2021 18:30:15 GMT+0900 (한국 표준시)

// date 객체 메소드: 년월일 등의 값을 얻을 수 있음
console.log(now.getFullYear()); // 2024
console.log(now.getMonth()); // 2 (0부터 시작하기 때문에 3월이라는 의미)
console.log(now.getDate()); // 4
console.log(now.getHours()); // 시간만 뽑아냄
console.log(now.getMinutes()); // 분
console.log(now.getSeconds()); // 초
console.log(now.getMilliseconds()); // ms
console.log(now.getDay()); // 요일 (0~6), 일요일이 0

// 오늘 날짜 기준으로 평일, 주말 구분하기 (switch, if)
function checkWeekend() {
  switch (now.getDay()) {
    // 매개변수에 0(일) ~ 6(토)까지의 값이 들어감
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return '평일';
    // break; 리턴하면 거기서 scope가 끝나니까 break 쓸 필요 없음
    case 0:
    case 6:
      return '주말';
    default:
      return '알 수 없음';
  }
}
console.log(checkWeekend()); // checkWeekend 함수의 반환값을 콘솔에 출력

// if문
if (now.getDay() === 0 || now.getDay() === 6) {
  console.log('주말');
} else {
  console.log('평일');
}

// 삼항연산자
const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? '주말' : '평일';
console.log(todayStatus);

// 2. math 객체: 수학적인 상수와 함수를 위한 속성과 메소드
console.log(Math.E); // 자연로그
console.log(Math.PI); // 원주율 출력
console.log(Math.SQRT2); // 2의 제곱근

// 메소드
console.log(Math.min(10, 2, 6, -50)); // 인자로 전달받은 값 중에 최소값 출력
console.log(Math.max(10, 2, 6, -50)); // 인자 중에 최대값 출력
console.log(Math.random()); // 인자 없음. 0<= x < 1 사이의 난수 생성. (소수점)
console.log(Math.round(3.4)); // 3, 소수를 반올림하여 정수로 변환
console.log(Math.floor(3.4)); // 3, 소수를 버려서 정수로 변환
console.log(Math.ceil(3.4)); // 4, 소수를 올려서 정수로 변환

// Math.random() 응용 -> 곱하는 수: 원하는 범위 숫자 + 1
// 0~9까지의 난수 생성
console.log(Math.floor(Math.random() * 10));
// 0~10까지의 난수 생성
console.log(Math.floor(Math.random() * 11));
// 1~100까지의 난수 생성
console.log(Math.floor(Math.random() * 100) + 1);
// 20~22사이의 난수 생성
console.log(Math.floor(Math.random() * 3) + 20);
