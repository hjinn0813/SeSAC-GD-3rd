/* 요소 선택
querySelector('CSS선택자')
querySelectorAll('CSS선택자')
getElementById('id값')
getElementsByClassName('class값')
getElementsByTagName('태그명')
*/

// document 객체
console.log(document); // html 문서 전체
console.log(document.documentElement); // html 문서에 있는 모든 요소
console.log(document.head); // head 태그와 그 이하의 모든 요소
console.log(document.body); // body 태그와 그 이하의 모든 요소
console.log(document.URL); // 열려있는 페이지의 전체 주소가 찍힘 (http부터)
console.log(document.domain); // 페이지의 도메인 주소만 찍힘 (ip주소, www)

// 1. getElementById
console.log('getElementById');
console.log(document.getElementById('green'));
console.log(document.getElementById('gold'));

// 2. getElementsByClassName
console.log('getElementByClassName');
console.log(document.getElementsByClassName('pink'));
console.log(document.getElementsByClassName('others'));

// 3. getElementByTagName
console.log('getElementByTagName');
console.log(document.getElementsByTagName('div'));

// 4. querySelector - CSS에서 사용했던 선택자 이용해 요소 선택
// 해당 css 선택자 중에 일치하는 첫번째 요소만 불러온다
console.log('querySelector');
console.log(document.querySelector('#green'));
console.log(document.querySelector('.pink'));
console.log(document.querySelector('div.pink'));
console.log(document.querySelector('body div'));

// 4. querySelectorAll - 해당되는 모든 요소 불러오기
console.log('querySelectorAll');
console.log(document.querySelectorAll('div'));
console.log(document.querySelectorAll('div.pink'));
console.log(document.querySelectorAll('.others'));
console.log(document.querySelectorAll('div.pink')[2]); //인덱스로 접근

/* NodeList와 HTML Collection: 둘 다 '유사 배열'이다.
getElementBy~는 HTML Collection으로 출력 
-> js에서 node를 생성+삭제하는 변경을 감지한다
QuerySelector는 NodeList로 출력 -> 변경 감지 못 함

유사 배열: length 속성을 가짐, [i]로 접근 가능
표준 객체 메소드를 사용 불가(map), 하지만 forEach는 가능
*/

// for of 문으로 pink 클래스 모두 출력하기
console.log('for of 문으로 출력하기');
let pinks = document.querySelectorAll('.pink'); // pink 클래스 모두 배열로 저장
for (let el of pinks) {
  console.log(el);
}
