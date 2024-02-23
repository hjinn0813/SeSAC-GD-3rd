// 기본형 (primitive type)
// 1. string - 문자 데이터
// 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자 데이터가 된다
const myName = "신데렐라";
const email = "glass-shoes@google.com";
const gender = "female";
console.log(myName);
console.log(email);
console.log(gender);
console.log("--------------------------------");

// 문자와 변수를 동시에 사용하기
const aa = "a";
console.log(aa, "쉼표"); // 자동으로 띄어쓰기 들어감
console.log(aa + "+ 연산자"); // 전부 연결해서 출력

const name = "레일라";
console.log("안녕 나는", name + "야");
console.log("name :", name);

/* 템플릿 리터럴: 
더하기나 쉼표 안 쓰고 한번에 입력하여 문자열 내의 변수를 간결하게 표현할 수 있는 방법.
백틱 기호와 달러, 중괄호(${})를 사용한다. */
console.log(`안녕 나는 ${name}야 `);
const printHello = `안녕 나는 ${name}야 `; // 문자열로 저장됨
console.log("--------------------------------");

// 2. number - 숫자 데이터
// 정수, 소수 사용 가능. 연산 가능.
let number = 123;
let opacity = 0.7;
let add = 1 + 2;

// 3. boolean - true, false 중에 하나의 값을 가지는 논리 요소
let checked = true;
let isShow = false;

// 4. undefined - 값과 타입이 지정되지 않은 상태
let undef;
console.log(undef); // undefined 출력

let obj = {
  abc: 123,
};
console.log(obj.abc); // 123 출력
console.log(obj.def); // undefined 출력

// 5. null - 빈 값. unll 타입으로 타입 존재하지만 값이 없음.
// 값이 없다는 것을 의도적으로 명시할 때 사용한다. 개발자가 직접 null 값을 할당.
let empty = null;
console.log(empty); // null 출력

// 6. array - 배열 데이터: 순서가 있는 데이터의 묶음
let fruits = ["apple", "orange", "banana", "grape"];
let fruits2 = new Array("apple", "orange", "banana", "grape");
console.log(fruits);
console.log(fruits[2]); // 2번 index 요소를 추출 = banana 출력

let arr = [1, "str", false, null, undefined]; // 배열에 작성할 수 있는 데이터 타입

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];
console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

// 배열 응용 - 다차원 배열: 배열 안에 배열이 있는 형태
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
  ["다", "댜", "더", "뎌"],
];
console.log(korean[0]);
console.log(korean[1]);
console.log(korean[2]);
console.log(korean[1][1]); // '냐' 출력 (배열 중첩됐을 때 요소 출력하기)

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];
console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

// 7. object - 객체 데이터
// {key1:value1, key2:value2} 형태로 중괄호 안에 작성
let cat = {
  name: "장화",
  age: 13,
  isCute: true,
  mew: function () {
    return "야옹";
  },
};
console.log(cat.name); // 점 표기법 (이걸 더 많이 사용함)
console.log(cat.mew);
console.log(cat["name"]); // 대괄호 사용

// 값의 변경과 추가 가능
cat.like = "layla"; // 추가
console.log(cat);
cat.name = "홍련"; // 변경
console.log(cat);

// JS의 이상한 자동 형변환 (더하기와 다른 연산부호들의 결과가 다름)
let a = "3";
let b = 2;
let c = "10";

// 문자 + 문자 = 문자의 나열
console.log(a + c); // 문자가 합쳐져서 310 출력
console.log(c - a); // 숫자 계산되어 7 출력
console.log(a * c); // 숫자 계산되어 30 출력

// 숫자 + 문자 = 숫자가 문자로 바뀌어 문자의 나열
console.log(b + a); // 문자로 합쳐져서 23 출력
console.log(b - a); // 숫자로 계산되어 -1 출력

// 자기소개하는 object 만들기 실습
const introduce = {
  name: "Hyejin Cho",
  interest: "write articles",
  hobby: "watch movie",
  mbti: "ISFJ",
  favoriteFruit: "peach",
};
console.log(introduce);

// typeof - 피연산자의 데이터 타입을 문자열로 변환.
console.log("----------------------------------------------------");
console.log(typeof "문자열"); // string
console.log(typeof 234); // number
console.log(typeof {}); // object
console.log(typeof []); // object(큰 의미의 객체)
console.log(typeof NaN); // not a number의 약자 -> number 유형 출력
let und;
console.log(typeof und); // undefined 출력

// 데이터 타입 변환시키기
console.log("----------------------------------------------------");

// 1. 문자열로 변환시키기
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str2)); // '123'
console.log(String(str3)); // 'null'

console.log(String(str1)); // 'true'
console.log(typeof String(str1)); // string
console.log(str1.toString());

// 2. 숫자로 변환시키기
let num1 = true;
let num2 = false;
let num3 = "12345";
let num4 = "123.9";
console.log(Number(num1)); // 1 -> true
console.log(Number(num2)); // 0 -> false
console.log(Number(num3)); // 12345
console.log(Number(num4)); // 123.9
console.log(parseInt(num3)); // 12345
console.log(parseInt(num4)); // 123 -> 소수점 아래는 버리겠다는 의미
console.log(parseFloat(num4)); // 123.9 -> 소수점 아래를 버리지 않음

// practice: 평균 점수 구하기
let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

// prompt 사용 - 유저에게 값을 입력받아 활용하는 예시.
// prompt로 받은 값은 문자 데이터라서 숫자로 변환해야 한다.
let mathScore2 = Number(prompt("수학 점수를 입력하세요"));
let engScore2 = Number(prompt("영어 점수를 입력하세요"));
let avgScore2 = (mathScore2 + engScore2) / 2;
console.log(avgScore2);
alert(`당신의 평균 점수는 ${avgScore2}점 입니다!`); // 템플릿 리터럴 사용
