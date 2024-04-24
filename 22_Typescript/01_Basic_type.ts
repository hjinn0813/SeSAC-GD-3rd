let num: number = 1;
// num = '1' 넘버 타입으로 이미 지정해놔서 문자열로 작성 불가
num = 2;
console.log(num);

let srt: string = '안녕';
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

// 원시타입은 타입 작성하지 않아도 ts가 알아서 타입을 추론
let isTrue2 = true;
let undef2;
let empty2 = null;
// isTrue2 = 'aa'
// 타입을 작성하지 않아도 true를 보고 불리언임을 추론해 error 발생

// array
// 요소의 개수를 명시할 필요없지만, 요소가 어떤 타입인지는 명시 필요
// 1. 요소가 한 가지 타입인 경우
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ['가', '나', '다', '라'];

// 2. 요소가 여러 타입인 경우
// 숫자 or 문자 혼합 배열이라는 의미
let arr1: (number | string)[] = [1, 2, 3, '가', '나', '다'];
let arr2: Array<number | string> = [1, 2, 3, '가', '나', '다'];

let arr3: (boolean | null | number[])[] = [true, null, false, [4, 22]];
let arr4: Array<boolean | null | number[]> = [true, null, false, [4, 22]];

// 어떤 자료형이든 상관없이 들어갈 수 있는 배열 (any 사용 지양)
let arrAny: any[] = [8, 3, true, 'a', 'b', null];

// ============================================================================
/* 4월 24일 학습내용 */
// object
let obj1: object = {
  name: 'layla',
  gender: 'female',
};

// 타입 추론 (암묵적으로 타입 지정됨)
let aa = 424;
let bb = 'hello';
let cc = true;
let dd = null;
let ee;

// aa = '5' -> ERROR: Type 'string' is not assignable to type 'number'
ee = 5;
ee = 'hello';
/*
  타입 지정 없이 선언만 한 변수는 any 타입으로 자동 지정됨
  any 타입을 사용하면 TS을 쓰는 의미가 없음
*/
