// method 메소드 - 문자열에서 사용 가능한 속성과 메소드
/* length, toUpperCase(), toLowerCase(), trim(), split(), 
indexOf(), replace(), replaceAll(), slice(), repeat() */
// 메소드는 JS가 만들어놓은 함수이기 때문에 괄호가 존재.
// 이미 정의되어 있으므로 갖다쓰면 됨

let str = 'Strawberry Moon';
let str2 = '   Strawberry Moon   ';
// 문자열 인덱싱
console.log(str[1]);
console.log(str[0]); // zero-base numbering
console.log(str[0] + str[3]);
console.log(str[0] + str[12] + str[14] + str[14] + str[9]); // Sonny 출력

// length: 속성. 괄호 없음. 공백을 포함한 문자열의 길이 반환
console.log('str 문자열의 길이', str.length);
console.log('str2 문자열의 길이', str2.length);

// 인자가 없는 메소드: xx.method() 형태
// toUpperCase(), toLowerCase(), trim()
let msg = 'Happy Birthday~';
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());

let userId = '   user123';
console.log(userId.length); // 공백 포함된 문자 길이
console.log(userId.trim());
console.log(userId.trim().length); // 공백 제거 후의 문자 길이

// method chaining - 메서드 연달아 사용 가능
// 양 끝 공백을 제거하고 모두 대문자로 변환
console.log(userId.trim().toUpperCase());

// 인자가 있는 메소드: xx.method(arg) 형태
/* indexOf() - 문자열에서 인자로 받은 문자열의 인덱스 반환, 없으면 -1 반환
 replace(a,b) - a의 문자를 b로 변환. 제일 처음에 만난 문자만 변환
 replaceAll() - 해당하는 모든 문자를 교체시킨다
 slice(startIdx[,endIdx]) - startIdx부터 endInx-1까지 자른다. 음수 인덱스 가능
 repeat(n) - 문자열을 n번 반복한다
 split() - 인자로 받은 문자열을 기준으로 해당 문자열을 나누고, 나눈 문자열을 배열로 만들어 반환
 charAt(n) - 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환
*/
let fruit = 'applemango';
console.log(fruit.indexOf('apple')); // 0
console.log(fruit.indexOf('mango')); // 5 (m이 5번째니까)
console.log(fruit.indexOf('e')); // 4
console.log(fruit.indexOf('z')); // -1 (없는 글자니까)

console.log(fruit.charAt(8)); // g (8번째 문자)
console.log(fruit[8]); // charAt과 동일한 의미

console.log(fruit.slice(5)); // mango (5번째 글자부터 출력)
console.log(fruit.slice(3, 6)); // lem (3~5번째 글자)
console.log(fruit.slice(-1)); // o (맨 뒤 글자)
console.log(fruit.slice(-3)); // ngo (맨 뒤 글자)
console.log('fruit의 값에 변화가 있는지 확인', fruit); // 변화 없음

let msg2 = "Wow! it's so amazing!! Wow!";
console.log(msg2.replace('Wow!', 'OMG!'));
console.log(msg2.replaceAll('Wow!', 'OMG!'));
console.log('msg2의 값에 변화가 있는지 확인', msg2); // 변화 없음

let date = '2024.02.28';
console.log(date.replaceAll('.', '-'));

console.log('HelloWorld!'.repeat(5));

console.log(date.split('.')); // 인자로 받은 문자열을 기준으로 나누어 배열로 반환
console.log(date.split('')); // 모든 글자를 하나씩 나누어 배열로 반환
let splitedDate = date.split('.'); // ['2024', '02', '28'] 형식으로 변수에 저장
console.log(typeof splitedDate); // object (넓은 의미)

// -----------------------------------------------------------------
// 배열에서 사용 가능한 속성과 메소드
/* push(), pop(), unShift(), shift(), indexOf(), reverse(), length */
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ['quakka', 'panda', 'dog', 'capybara'];
arr1[5] = 6; // array에 추가하기
arr1[7] = 8; // 이렇게 하면 array 중간에 빈 값은 empty 생길 수 있음

arr1 = [1, 2, 3, 4, 5];
arr1.push(10); // push: 괄호 안의 요소를 배열 맨 끝에 넣기
console.log(arr1); // arr1 변수의 배열에 변화가 생긴다

arr1.pop(); // pop: 배열 맨 끝의 요소 1개 삭제하기
console.log(arr1);

arr2.unshift('bear'); // unshift: 괄호 안의 요소를 배열 맨 앞에 넣기
console.log(arr2);

arr2.shift(); // shift: 배열 맨 앞의 요소 1개 삭제
console.log(arr2);
// push, pop, shift, unshift -> 문자열의 메소드와 다르게 원래의 배열이 변경됨

// includes(): 해당 배열에 인자로 받은 값과 동일한 요소가 있는지 확인 후 t/f를 반환
console.log(arr2.includes('quakka')); // true

//indexOf(): 문자열과 마찬가지로 해당 요소의 인덱스(몇 번째 요소인지)를 반환
console.log(arr2.indexOf('capybara')); // 3

// length: 속성이므로 괄호 작성하지 않음
console.log(arr2.length); // 4

// reverse(): 배열의 순서 뒤집음 -> 배열을 변경시킨다
arr2.reverse();
console.log(arr2);

// join(): 배열을 인자의 문자열 기준으로 합쳐 문자열로 반환
// 원래 배열을 변경시키지 않는다
console.log(arr2.join()); // 인자 작성하지 않으면 배열 안의 쉼표까지 문자열로 변환
console.log(typeof arr2.join());
console.log(arr2.join('')); // 빈 문자열 작성하면 모든 요소 붙어서 문자열로 출력
console.log(arr2.join(' AND '));

// -----------------------------------------------------------------
// 배열에서의 반복
// for문
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('--- for문 사용 ---');
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// for of
/* number는 변수명(무엇을 의미하는지 알 수 있게 작성)
index 번호로 순환하는 것이 아니라 배열 요소에 직접 접근 */
console.log('--- for of문 사용 ---');
for (let number of arr3) {
  console.log(number);
}

for (let alphabet of alphabets) {
  console.log(alphabet);
}

// forEach(): 매개변수 3개를 받는 배열의 반복을 위한 메소드(함수)
/* 매개변수 이름은 마음대로 지어도 되지만 순서에 따른 의미는 항상 동일 (순서 중요!!)
arr.forEach(function(변수명 [, 인덱스를 지칭할 별명 [, array 별명]]){})
*/
console.log('--- forEach 사용 ---');
arr3.forEach(function (num, idx) {
  console.log(num);
  console.log('index:', idx);
});

// -----------------------------------------------------------------
// filter(): 조건을 만족하는 요소들을 배열로 반환
// arr2의 요소 중 5자 이상인 요소만 모아 새로운 배열 만들기
console.log('--- filter() 사용 ---');
let newArr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});
// let newArr3 = arr2.filter((animal) => {
//   return animal.length >= 5;
// });
let newArr3 = arr2.filter((animal) => animal.length >= 5);
// return이 하나 뿐이면 간결하게 작성 가능

console.log(newArr2);
console.log(arr2); // 원래 배열에 영향을 주지 않음

const words = ['미어캣', '라이거', '유니콘', '고질라', '드래곤', '라쿤'];
const newWords = words.filter(function (ani) {
  return ani.charAt(0) === '라' || ani.charAt(0) === '유';
});
console.log(newWords);

/* find(): 배열에서 특정 조건을 만족하는 첫번째 요소만 반환.
filter와 비슷하게 조건을 작성하지만,
배열을 반환하는 것이 아니라 조건을 처음 만족하는 값을 반환 */
console.log('--- find() 사용 ---');
let findResult = words.find(function (ani) {
  return ani.charAt(0) === '드';
});
console.log(findResult);

// map(): 배열 내의 모든 원소에 대해 호출한 함수의 결과를 모아 새로운 배열 반환
/* arr.map(function (value[, index[, arr]]) {})
 배열의 모든 원소를 for문으로 돌려서 바꿀 수 있지만 더 간단히 메소드를 사용해 변경 가능
*/
console.log('--- map() 사용 ---');
let nums = [1, 2, 3, 4, 5];
let mapArray = nums.map(function (n) {
  return n * 100;
});
console.log(mapArray);
