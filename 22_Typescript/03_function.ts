// return 값이 없는 함수
// return값 있는 경우 void 선언 불가
function consoleStr(str: string): void {
  console.log(str);
}

function returnStr(str: string) {
  return str;
}

// ==================================================================
// 옵셔널한 인자
console.log('--- optional ---');

/* at JS */
// function jsPrint(a, b) {
//   console.log(a)
//   console.log(b)
// }
// jsPrint(1, 2);
// jsPrint('1', '2');
// jsPrint(['1', '2'], [1,2]);
// jsPrint('두번째 인자 없음') -> TS에서는 에러 발생

function tsPrint(a: number, b?: number): void {
  console.log(a);
  console.log(b);
}
tsPrint(1, 2);
tsPrint(1); // 옵셔널한 인자여서 에러 발생 없음

// 함수 다른 방식으로 선언하기
function myFunc(a: number): void {
  console.log('function keyword 사용한 함수');
}

const myFunc2 = (a: number): void => {
  console.log('함수 표현식으로 작성한 함수');
};

// ==================================================================
// interface에서 함수
interface Greet {
  name: string;
  hi(): void; // 호출 시 hi라는 문자열을 콘솔에 출력, 리턴값 x
  bye(str: string): string;
  // 인자로 문자열을 받아서 해당 문자열 리턴하기 떄문에 타입을 str으로 작성
}

const user: Greet = {
  name: 'layla',
  hi() {
    console.log('hi!!');
  },
  bye(str: string) {
    return `bye ${str}`;
  },
};
user.hi();
user.bye('안녕');

// ==================================================================
// never: 함수의 끝에 절대 도달하지 않는 경우에만 사용 (무한루프)
console.log('--- never ---');

function neverEnd(): never {
  while (true) {
    console.log('ever after');
    // if (a>5) break; -> ERROR: 인자가 조건이 충족되면 무한루프 중지됨
    // break 가능성이 있으면 never 키워드 선언 못 함
  }
}

/*
  인자의 타입은 함수 선언시 인자에 바로 할당
  함수의 타입(리턴이 있다면 해당 리턴값의 타입)은 인자를 받는 소괄호 뒤에 작성
  함수에 리턴값이 없으면 void 타입,
  무한루프 함수라면 never 타입 선언
*/
