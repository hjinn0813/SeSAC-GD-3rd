/* 1. 태그 내부 컨텐츠 다루기
innerText: 요소 안의 텍스트를 가져오거나 수정 (입력된 문자열로 변경)
innerHTML: 요소 안의 코드를 가져오거나 수정

innerText, innerHTML: (앞,뒤에) 남는 공백 문자를 제거함
*/
let div1 = document.getElementById('div1');
console.log(div1);
console.log(div1.innerText); // 글자만 가져옴
console.log(div1.innerHTML); // 태그까지 가져옴

// 해당 요소 내부의 텍스트 변경
div1.innerText = '여기는 첫번째 div 태그이면서 js에서 수정했습니다';

// 해당 요소 내부에 태그 적용 안됨
div1.innerText = '여기는 첫번째 div 태그이면서 js에서 <b>수정</b>했습니다';

// 해당 요소 내부의 html을 변경
div1.innerHTML = '여기는 첫번째 div 태그이면서 innerHTML로 수정했습니다.';

// 해당 요소 내부에 태그 적용 가능
div1.innerHTML =
  '여기는 첫번째 div 태그이면서 <b>innerHTML로 수정</b>했습니다.';

// ===================================================================
/* 2. 속성 접근
요소의 속성 가져오기 -> 요소.getAttribute('속성명');
요소의 속성 수정 -> 요소.setAttribute('속성명', '속성값');
*/

let naver = document.getElementById('naver');
console.log(naver);

// a 태그의 href 속성 가져오기
console.log(naver.getAttribute('href'));

let imgEl = document.getElementById('beach');
console.log(imgEl.getAttribute('src'));
// console.log(imgEl.src); 점 접근법

// 속성 수정
naver.setAttribute('href', 'https://www.google.co.kr');
imgEl.setAttribute('src', '../img/beach2.jpg');

naver.href = 'https://github.com'; // 점 접근법

// ===================================================================
// 3. 스타일 변경
let flowers = document.querySelectorAll('#flower li');
for (let li of flowers) {
  // style 속성 지정
  // li.style.backgroundColor = 'skyblue';
  // li.style.color = 'green';

  li.classList.add('changeStyle');
  // changeStyle 이라는 클래스에 있는 코드 전부 실행
}

// 클래스 목록 가져오기
console.log(flowers[0].classList);

// 클래스 삭제하기
flowers[0].classList.remove('changeStyle');

/* 클래스 갖고 있는지 확인하기 
-> true, false로 반환 (조건문에서 사용) */
console.log(flowers[0].classList.contains('changeStyle'));

// 클래스 토글하기 -> 해당 클래스가 있으면 제거, 없으면 추가
flowers[0].classList.toggle('changeStyle');
flowers[1].classList.toggle('changeStyle');

// ===================================================================
// 4. 부모 자식 node
const parentEl = document.querySelector('#flower'); // ul
const childEl = document.querySelector('#flower .pink'); // ul > li.pink

// 자식 node 접근하기
console.log(parentEl.children); // ul의 자식 li들 유사배열로 불러온다
console.log(parentEl.children[2]);
// 특정 자식요소 불러올 때 배열처럼 인덱스로 접근, 자식이 하나여도 동일

// 부모 node 접근하기 -> 요소 자체에 접근한다
console.log(childEl.parentNode); // childEl의 부모를 선택

// 형제 node 접근하기
console.log(childEl.previousElementSibling); // 위 노드 접근이기 때문에 'null'
console.log(childEl.parentNode.children[2].previousElementSibling);
console.log(childEl.nextElementSibling); // 아래 노드 접근이라서 '장미'

// ===================================================================
// 5. 요소 추가, 생성, 삭제
const container = document.querySelector('.container');

// 요소 생성
const pEl = document.createElement('p');
pEl.innerHTML = 'JS로 만든 p 태그';
pEl.style.fontSize = '30px';
pEl.id = 'append-p';
console.log(pEl);

/* pEl 요소 html에 추가
append: 선택된 요소의 자식으로 매개변수 요소가 삽입됨
마지막 자식요소로 추가됨, 여러 자식요소 한번에 삽입 가능, 텍스트 삽입 가능
createElement로 만든 요소는 여러 번 삽입해도 한 번만 들어간다 */
// 기본형태: 부모요소.append(자식요소)
container.append(pEl);

const pEl2 = document.createElement('p');
pEl2.innerHTML = 'JS로 만든 p 태그 2';
// container.append(pEl2);

container.append(pEl, pEl2); // 한 번에 추가하기

// div 3개, "안녕"
const divArr = [];
for (i = 0; i < 3; i++) {
  /* for문 안에서 반복되는 동일한 이름의 변수 생성 가능
  해당 스코프를 돌 때마다 새로운 newDiv 변수가 생성되기 때문
  해당 newDiv 변수는 스코프를 돌면 사라진다 */
  const newDiv = document.createElement('div');
  newDiv.innerHTML = '안녕';
  divArr.push(newDiv);
  // container.append(newDiv);
}
console.log(divArr);

// ===================================================================
// 3월 6일 학습내용
// append로 텍스트 넣기
const p1 = document.createElement('p');
p1.innerHTML = '2024년 3월 6일 추가된 p태그입니다!';
// p1.innerText = '2024년 3월 6일 추가된 p태그입니다!';
// p1.append('2024년 3월 6일 추가된 p태그입니다!'); --> 셋 다 같은 의미

container.append(p1, '텍스트 넣기 실험');
// 텍스트를 바로 넣으면 부모 요소에 들어감

/* appendChild(): 선택된 요소의 자식요소로 매개변수 요소가 추가됨
가장 뒤의 자식요소로 추가되고, 한 번에 하나의 요소만 추가할 수 있음 */
const p2 = document.createElement('p');
p2.innerText = 'appendChild 사용해서 추가한 첫번째 p태그';
const p3 = document.createElement('p');
p3.innerText = 'appendChild 사용해서 추가한 두번째 p태그';
const p4 = document.createElement('p');
p4.innerText = 'appendChild 사용해서 추가한 세번째 p태그';

// container.appendChild(p3, p4); -> p4는 추가되지 않음
container.appendChild(p2);
container.appendChild(p3);
container.appendChild(p4);
// container.append(p2, p3, p4); -> 3개 한 번에 넣기
// container.appendChild('텍스트 넣기 실험2'); -> 텍스트 추가 안 됨

/* prepend(): 선택된 요소의 '가장 첫번째' 자식으로 추가됨
append와 반대되는 개념 */
const div2 = document.createElement('div');
div2.classList.add('prepend');
div2.innerText = 'prepend로 추가한 첫번째 요소';
container.prepend(div2);

const div3 = document.createElement('div');
div3.classList.add('prepend');
div3.innerText = 'prepend로 추가한 두번째 요소';
container.prepend(div3);

// before, after
// before: 선택된 요소의 앞에 추가됨
const h1 = document.querySelector('#h1');
const h3 = document.createElement('h3');
h3.innerText = 'before로 추가한 h3';
h1.before(h3);

// after: 선택된 요소의 뒤에 추가됨
const h2 = document.createElement('h2');
h2.innerText = 'after로 추가한 h2';
h1.after(h2);

// 요소 삭제
const deleteDiv = document.querySelector('.container div');
deleteDiv.remove(); // 선택한 요소 삭제

// #flower의 두번째 li인 '장미' 삭제하기 (nth-child)
const rose = document.querySelector('#flower li:nth-child(2)');
rose.remove();
