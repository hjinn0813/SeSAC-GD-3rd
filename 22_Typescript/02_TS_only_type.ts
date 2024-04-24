// tuple: 개수와 데이터타입, 순서가 정해져있는 배열
let drink: [string, number] = ['americano', 4500];
/* drink = ['라떼', 5100, true] -> ERROR: 

Type '[string, number, boolean]' is not assignable to type '[string, number]'.
Source has 3 element(s) but target allows only 2. */

drink[0] = '라떼'; // 배열의 요소에 index로 접근 가능
// drink[0] = 5100; -> ERROR: 정해진 타입이 아니면 수정 불가

drink.push('push하기');
console.log(drink);

// drink[3]= '수정불가' -> ERROR: 타입을 미리 지정하지 않은 요소의 수정은 불가능

// spread 연산자로 배열 요소 전부 보여주기
console.log(...drink);

// ==========================================================================
// readonly: 길이를 특정하고 타입과 순서를 완벽히 고정하려고 사용
let drink2: readonly [string, number] = ['바나나우유', 2000];
// drink2[0] = '딸기우유' -> ERROR: 값 수정 불가
// drink2.push() -> ERROR: 추가 불가능

// ==========================================================================
// 회원 권한 enum으로 정의 (숫자형 enum)
console.log('--- enum ---');

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

// 객체는 아니지만 점 접근법으로 접근 가능
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

const userType: number = 2;

if (userType !== Auth.admin) {
  console.log('관리자 권한 없음');
  if (userType !== Auth.user) {
    console.log('게스트 계정입니다');
  }
}

// enum 값 자동 할당
enum productType {
  food,
  clothes,
  shoes,
}
console.log(productType.food); // 0 출력

// 문자형 enum
enum Cafe {
  americano = '아메리카노',
  latte = '라떼',
}

enum cola {
  coca, // 0
  pepsi, // 1
  zero, // 2
  sprite = '스프라이트',
  // 숫자와 문자 같이 사용할 수 있지만 권장하진 않음
}

// ==========================================================================
// any: 어떤 데이터 타입이든 오류 발생 x
// js에서 변수를 선언하고 사용할 때와 동일하게 마음대로 값을 할당하고 수정 가능
// any를 사용하는 경우 ts를 사용하는 의미가 없어서 사용 지양함
// 하지만 빈 배열이 필요하거나, 받아오는 데이터 타입이 확실하지 않은 경우,
// 할당해야하는 타입을 모르는(외부 라이브러리 사용 등) 경우에 사용한다.
console.log('--- any ---');

let myVal: any = 1;
console.log(myVal);

myVal = '문자열로 바꿈';
console.log(myVal);

myVal = [1, 2, '배열', true, ['안녕', null, { name: '객체' }]];
console.log(myVal);

// ==========================================================================
// 실습: tuple 만들기
let olympic_newgame: readonly [object, boolean] = [
  { name: '쇼트트랙', type: '혼성계주' },
  true,
];

// ==========================================================================
// interface:
console.log('--- interface ---');

// 개발자가 직접 정의한 객체의 상세 타입을 선언
interface Student {
  name: string;
  isPassed: boolean;
}

// 아래에서 확장했기 때문에 ERROR 발생하여 주석 처리
// const Student1: Student = {
//   name: 'layla',
//   isPassed: true,
//   // age: 1 -> ERROR: 위에 선언된 것만 출력 가능
// };

// interface 확장하기
// 특정 키워드 필요없이 확장할 key: value 입력하면 됨
interface Student {
  age: number;
}

const Student2: Student = {
  name: 'layla',
  isPassed: true,
  age: 1,
};

//  interface 상속하기
interface BaseballPlayer extends Student {
  readonly position: string;
  height: number;
  backNumber?: number;
  // key 뒤에 물음표 작성하면 있어도 없어도 문제없는 옵셔널한 키 지정 가능
}

const Ryu: BaseballPlayer = {
  name: '류현진',
  isPassed: true,
  age: 37,
  position: '투수',
  height: 183,
  backNumber: 1,
};
console.log(Ryu);

const Lee: BaseballPlayer = {
  name: '이정후',
  isPassed: false,
  age: 27,
  position: '외야수',
  height: 185,
  // backnumber는 옵셔널한 키라서 작성하지 않아도 에러 없음
};

// Lee.position = '타자' -> readonly여서 변경 불가능

// ==========================================================================
// type: 지정한 값만 넣을 수 있는 커스텀 '데이터 타입'
console.log('--- type ---');

type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
interface HighSchoolStudent extends Student {
  // student에서 name, isPassed, age 키 상속
  score: Score;

  // key의 값을 해당 인터페이스 사용하는 객체를 선언할 때 지정하는 경우,
  // key를 지정하지 않은 상태에서 해당 key의 타입을 지정할 수 있음
  // -> grade는 숫자 타입(객체)이고 여기에 성적이 value로 들어감
  [grade: number]: Score;
}

const Tom: HighSchoolStudent = {
  name: 'Tom',
  age: 17,
  isPassed: true,
  score: 'A+',
  1: 'B', // [grade: number]: Score;
};

// ==========================================================================
// 함수 interface
console.log('--- 함수 interface ---');
interface Calc {
  // 소괄호는 해당 함수의 인자와 인자의 타입 작성
  // 소괄호 다음의 콜론에는 반환값의 타입 작성
  (a: number, b: number): number;
}

const sum: Calc = (a, b) => {
  return a + b;
};

// interface 사용하지 않고 함수 선언
// 인자에 바로 해당 인자의 타입을 작성, 인자 뒤에 리턴 값의 타입을 작성
const sum2 = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(1, 2));

// ==========================================================================
// type
console.log('--- type ---');

// type으로 객체의 타입 지정 (등호 사용)
type Toy = {
  name: string;
  price: number;
};

const barbie: Toy = {
  name: 'barbie',
  price: 34000,
};

// 값을 특정짓는(한계를 두는) type 생성
type Gender = 'female' | 'male';
const layla: Gender = 'female';
// const lily: Gender = 'Female'; -> ERROR: 대소문자 구분

// 값의 타입을 제한하는 type 생성
type name = string;
const laylaName: name = 'layla';

type NumAndStr = number | string;
const numAndSrtVal1: NumAndStr = 1;
const numAndSrtVal2: NumAndStr = '1';

/*
[ interface, type의 차이 ]

interface
- 주로 객체의 타입을 지정할 때 사용
- 확장 가능 (interface 선언하듯이 추가 key 작성)
- 상속 가능 (extends 키워드로 해당 interface 가져오고 새로운 interface 생성)

type
- 훨씬 자유롭게 사용
- 해당 타입의 value를 제한 (지정한 value만 입력 가능)
- 타입의 확장 불가
*/
