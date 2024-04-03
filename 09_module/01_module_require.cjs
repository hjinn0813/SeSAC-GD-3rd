/*
- common js에서 모듈 사용을 위해 
package.json 파일에 "type": "commonjs"를 추가해야 한다.
- (터미널에서) npm init 명령어로 자동으로 해당 프로젝트의 json 생성 가능.
- cjs 확장자 : commonjs 문법을 사용한 파일이라는 의미.
*/

// 01_module01.cjs 불러오기
const person = require('./01_module01.cjs');

// 01_module01.cjs에서 exports한 모든 내용이 저장됨
console.log(person);

// person에 저장된 변수, 클래스, 함수
// 1. 변수와 함수 사용
console.log(person.colors);
console.log(person.sayName('장원영'));

// 2. 클래스 사용
const chaewon = new person.Person('채원', 20);
console.log(chaewon);
console.log(chaewon.getBornYear());

// 원하는 변수, 함수, 클래스만 가져오기
const { sayName } = require('./01_module01.cjs'); // 구조분해할당 사용
sayName('안유진');

// --------------------------------------------------------------------------------
// 01_module02.cjs 사용하기

const { colors2, sayName2 } = require('./01_module02.cjs');
console.log(colors2);
sayName2('강동원');
