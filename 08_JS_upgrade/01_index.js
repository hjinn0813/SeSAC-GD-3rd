// 1. 전개구문 spread
// 1-1. 배열
const lunchMenu = ['국밥', '치킨마요', '파스타', '돈까스'];
const dinnerMenu = ['라면', '볶음밥', '바질페스토파스타', '냉동볶음밥'];
console.log(lunchMenu);
console.log(dinnerMenu);
console.log(lunchMenu, dinnerMenu);

// 반복문으로 요소 하나씩 접근할 수 있음
for (let i = 0; i < lunchMenu.length; i++) {
  console.log(lunchMenu[i]);
}

lunchMenu.forEach((menu) => {
  console.log(menu);
});

lunchMenu.map((menu) => {
  console.log(menu);
});

for (let menu of lunchMenu) {
  console.log(menu);
}

// 전체 요소에 접근하고 싶은 경우 (연산이 필요한 작업이 아닌 경우)
// 전개 연산자 사용 -> 개별 요소에 접근하지 않고 사용할 수 있도록 한다
console.log(...lunchMenu);
console.log(...[1, 2, 3, 4, 5]); // 변수에 저장하지 않고 배열에 바로 사용 가능

// 배열 합치기
// ['국밥', '치킨마요', '파스타', '돈까스', '라면', '볶음밥', '바질페스토파스타', '냉동볶음밥']
const newArr = [];
function usePush() {
  lunchMenu.map((menu) => newArr.push(menu));
  dinnerMenu.map((menu) => newArr.push(menu));
}
usePush();
console.log(newArr);

// concat : 2개 이상의 배열을 연결하는 메소드
const newArr2 = lunchMenu.concat(dinnerMenu);
console.log(newArr2);

// spread 연산자 사용 : 직관적
const newArr3 = [...lunchMenu, ...dinnerMenu];
console.log(newArr3);

const prodData1 = [
  {
    id: 1,
    prod_name: '피크닉',
    price: 700,
  },
  {
    id: 2,
    prod_name: '딸기우유',
    price: 2000,
  },
  {
    id: 3,
    prod_name: '밀키스',
    price: 1100,
  },
];

const prodData2 = [
  {
    id: 4,
    prod_name: '코멧 쿠키',
    price: 500,
  },
  {
    id: 5,
    prod_name: '쌀과자',
    price: 300,
  },
  {
    id: 3,
    prod_name: '마가레트',
    price: 150,
  },
];

const totalData = [...prodData1, ...prodData2];
console.log(totalData);

// --------------------------------------------------------------------------------------------
// 1-2. 문자열
// 전개구문은 객체, 문자열에도 사용 가능
// for of 에서도 문자열 사용 가능

const str = 'fighting!!';
console.log(...str); // 알파벳 하나씩 분리시킨다

const strToArr = [...str]; // 알파벳 분리한걸 배열에 담는다
console.log(strToArr);

// 인자로 전달받은 값을 기준으로 요소를 나누어 배열로 반환
const strToArr2 = str.split(''); // 모든 글자가 전부 나눠진다
console.log(strToArr2);

// --------------------------------------------------------------------------------------------
// 1-3. 객체
let me1 = {
  name: 'layla',
  height: 173,
  married: false,
  pet: null,
};

let me2 = {
  name: '레일라',
  like: ['baking', 'traveling'],
  pet: {
    name: '장화',
    like: ['layla', 'sleeping'],
  },
  greeing: function () {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고, 키는 ${this.height}cm 입니다.`
    );
  },
};

// 객체를 합칠 때 동일한 키가 있으면 뒤에 있는 변수 객체의 키의 value가 들어간다
let me = { ...me1, ...me2 };
console.log(me);

// 객체 내부에 value로 저장된 함수는 사용시 점 표기법만 가능
me.greeing();

// 합치면서 key 추가하기
me = {
  ...me1,
  ...me2,
  status: 'hungry',
};
console.log(me);

me = {
  ...me,
  mbti: 'istp',
};
console.log(me);

// --------------------------------------------------------------------------------------------
// 실습 - 전개연산자 사용하기
const word1 = 'abc';
const word2 = 'xyz';
const words = [...word1, ...word2];
console.log(words);

// 다른 방법 1 - 2개의 문자열을 1개의 문자열로 합친 후 배열로 저장
const newWordArr = (word1 + word2).split('');
console.log(newWordArr);

// 방법 2 - 문자열을 concat으로 연결하고 배열로 저장
const newWordArr2 = word1.concat(word2).split('');
console.log(newWordArr2);

// 방법 3 - 문자열을 배열로 나누고 concat 사용해 연결
const newWordArr3 = word1.split('').concat(word2.split(''));
console.log(newWordArr3);

// --------------------------------------------------------------------------------------------
// 구조 분해 할당
// 2-1. 배열
const icecream = ['민트초코', '엔초', '스크류바'];
/* const mintchoco = icecream[0]
const encho = icecream[1]
const screwbar = icecream[2]
*/

const [mintchoco, screwbar, encho] = icecream;
console.log(mintchoco); // 민트초코
console.log(encho); // 스크류바 -> 순서 중요

// 중간에 변수에 담아 사용하지 않는 요소가 있는 경우 해당 순서를 생략하고 작성
const colors = ['red', 'orange', 'yellow', 'green'];
const [red, oran, , green] = colors;
// console.log(yellow); // error (선언한적 없음)

// 가장 마지막 요소를 변수에 저장하지 않으면 쉼표 없이 생략하면 됨
const [c1, , c3] = colors;
console.log(c1);

// 구조분해하는 배열의 길이를 넘어가는 변수는 자동으로 undefined
const [cc1, cc2, cc3, cc4, cc5] = colors;
console.log(cc5); // undefined

// default 값은 해당 변수에 저장할 값이 없을 때에만 사용된다
// ccc3은 default가 사용되지 않고 배열의 2번 인덱스 받아와서 출력
const [ccc1, ccc2, ccc3 = 'ccc3 default', ccc4, ccc5 = 'maybe undefined'] =
  colors;
console.log(ccc3);
console.log(ccc5);

// --------------------------------------------------------------------------------------------
// 2-1-1. 배열을 사용해 변수 교환
let value1 = 'second';
let value2 = 'first';

let temp; // 임시로 사용되는 값을 위한 변수 (temporary)

// 변수의 값 교환
temp = value1; // temp 변수의 값은 first
value1 = value2; // value1 변수의 값은 second
value2 = temp; // value2 변수의 값은 first
console.log(value1, value2); // first, second

// 구조 분해 할당을 이용한 변수 값 교환
value1 = 'second';
value2 = 'first';

[value2, value1] = [value1, value2];
// [value2, value1] = ['first', 'second']
console.log(value1, value2); // first, second

// --------------------------------------------------------------------------------------------
// 2-2. 객체의 구조 분해 할당
const myPhone = {
  name: '아이폰',
  color: 'white',
  version: 13,
};

// 각 요소에 접근하는 방법
console.log(myPhone.name); // 점 접근법
console.log(myPhone['name']); // 대괄호 접근법

// 기존 방법으로 변수에 담기
/* 
const name = myPhone.name;
const color = myPhone.color;
const version = myPhone.version;
console.log(name, color, version);
*/

// 구조 분해 할당 - 순서에 상관없이 객체의 key와 동일한 변수의 값이 저장
const { color, name, version } = myPhone;
console.log(name, color, version);

// 다른 이름으로 변수 할당 불가능
const { c, n, v } = myPhone;
console.log(c, n, v); // undefined (key와 동일하지 않아서)

// 다른 이름으로 변수를 할당하고 싶다면?
const { name: nn, color: cc, version: vv } = myPhone;
console.log(nn, cc, vv);

// key가 없는 경우를 대비해서 default 지정하기
const { name: nnn, color: ccc, giga: ggg = 256, version: vvv } = myPhone;
console.log(nnn, ccc, ggg, vvv);

// 전개 연산자 추가 사용 예시
const { key1, key5, ...obj } = {
  key1: 'value1',
  key2: 2,
  key3: 'value3',
  key4: 'value4',
  key5: 5,
};
console.log(key1); // 'value1'
console.log(key5); // 5
console.log(obj); // key1, key5 제외한 나머지 key-value 쌍이 전부 저장됨

// --------------------------------------------------------------------------------------------
// 함수에서 전개연산자, 구조분해할당, default 지정
function test(...val) {
  /* ...val의 의미는 인자의 개수를 제한하지 않고 모두 받겠다는 의미
  모든 인자는 배열로 val이라는 별명을 사용해 접근할 수 있다
  v4 변수에 할당할 값이 없을 경우,
  즉 인자가 3개 이하로 들어온 경우 '없음'이라는 default 값이 v4 변수에 저장된다 */

  const [v1, v2, v3, v4 = '없음', ...rest] = val;
  console.log(v1);
  console.log(v2);
  console.log(v3);
  console.log(v4);
  console.log(rest); // 5번째 인자부터 rest 배열에 저장됨
}
test(1, 2, 3, 4, 5, 6, 7, 8);
test(1, 2, 3);

// 실습 - 매개변수 개수 제한하지 않고 모든 매개변수의 합을 구하는 함수
function addNum(...num) {
  console.log(num); // 전달받은 모든 인자 배열에 저장, num = []

  let sum = 0;
  num.forEach((n) => (sum += n));
  // console.log(sum);

  return sum;
}
console.log(addNum(1, 2, 3, 4, 5, 6)); // 21

// --------------------------------------------------------------------------------------------
// 매개변수에 기본값 설정하기
function introduce(name, like = 'money', hate, gender = '여') {
  console.log(
    `안녕하세요, 제 이름은 ${name}이고, 저는 ${like}를 좋아합니다. 하지만 ${hate}를 싫어해요. 저는 ${gender}성입니다.`
  );
}
introduce(); // 그냥 부르면 (설정한) 기본값이 들어감
introduce('a', 'b', 'c', 'd', 'e'); // 넘치는 인자는 문제 발생하지 않음
// introduce('a', ,'c'); 함수 내부에는 인자를 비워둘 수 없다
introduce('a', undefined, 'c'); // 이렇게 사용하는 경우 거의 없음
