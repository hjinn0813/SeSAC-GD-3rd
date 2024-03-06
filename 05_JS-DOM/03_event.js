const btn1 = document.querySelector('.btn-black');
const btn2 = document.querySelector('.btn-pink');
const btn3 = document.querySelector('.btn-gold');
const btn4 = document.querySelector('.btn-skyblue');
const container = document.querySelector('.container');

// addEventListener 사용
// btn1: 익명함수와 함수 표현식 사용해 변수에 저장하지 않고 작성
btn1.addEventListener('click', function () {
  alert('버튼1을 클릭했습니다!');
});

// 하나의 요소에 여러 이벤트 등록 가능
/* mouseover는 마우스가 해당 요소 위에 올라갔을 때 실행, 마우스 떼도 계속 적용.
hover(css)는 마우스가 요소에 올라가있을 때에만 적용됨 */
btn1.addEventListener('mouseover', function () {
  // 선택된 요소 자신을 수정하고 싶은 경우 this 키워드 사용
  this.style.backgroundColor = 'red';
});

// btn2: 화살표 함수 사용해 container에 요소 추가
btn2.addEventListener('click', () => {
  const div = document.createElement('div');
  div.style.backgroundColor = 'yellowgreen';
  div.style.marginBottom = '10px';
  div.innerText = '버튼2를 클릭해 추가된 div';
  container.append(div);
});

/* btn3: 함수 선언해서 이벤트 등록
같은 기능을 재사용하는 경우에 함수를 선언하고 addEventListener로 불러와서 사용한다.
addEventListener에 함수를 불러올 때, 괄호 작성 안 함
-> 괄호 작성 시 JS를 파싱하면서 해당 코드와 만나면 이벤트 진행 전에 함수부터 실행시키기 때문
*/
btn3.addEventListener('click', changeColor);
function changeColor() {
  let divs = document.querySelectorAll('.container div');

  // 만약 div 요소가 없으면 alert 띄우는 예외 처리
  if (divs.length !== 0) {
    for (let div of divs) {
      div.style.color = 'red';
    }

    // 마지막 요소만 배경을 파란색으로 변경
    divs[divs.length - 1].style.backgroundColor = 'blue';
  } else {
    alert('버튼2를 클릭해 div를 추가해주세요!');
  }
}

// btn4: 이벤트 적용된 자신을 선택하는 this 키워드 사용
btn4.addEventListener('click', changeBtnColor);
function changeBtnColor() {
  this.style.backgroundColor = 'orange';
  this.style.color = 'white';
}

// 매개변수 이벤트 (click 이외에 다양한 이벤트가 있음)
// scroll 이벤트는 브라우저 전체에 실행되는 동작이라서 window에 걸어준다
console.log(window);
// window.addEventListener('scroll', (event) => {
//   console.log(event); // 이벤트가 무엇인지 확인
//   console.log(event.target);
//   // 이벤트가 실행되는 곳이 어딘지 확인 (여기서는 document 자체를 의미)

//   console.log(scrollY);
//   if (scrollY > 700) {
//     document.body.style.backgroundColor = 'lightgray';
//   }
// });

// ============================================================================
// form 이벤트
const todoForm = document.querySelector('#todo-form');
const todos = document.querySelector('.todos');

// form이 제출되는 이벤트
todoForm.addEventListener('submit', (event) => {
  /* preventDefault: 
  브라우저에서 기본적으로 동작하는 이벤트 동작을 제거
  (여기서는 submit가 먼저 되지 않도록) */
  event.preventDefault();
  console.log('submit');

  const todoInput = document.querySelector('input[name=todo]');
  console.log(todoInput);
  console.log(todoInput.value); // input에 입력된 value 가져오기

  // input 요소 자체의 value 수정 가능
  // todoInput.value = '안녕'

  // input의 value 변수에 저장
  const todo = todoInput.value;

  // if문 사용해서 빈 문자열 추가하지 않기
  if (todo !== '') {
    const newTodo = document.createElement('li');
    // newTodo.innerText = todo;
    newTodo.append(todo);
    todos.append(newTodo);

    // 입력창 초기화
    todoInput.value = '';
  }
});

// ============================================================================
// 변경 이벤트
const changeInput = document.querySelector('#change-input');
changeInput.addEventListener('input', (e) => {
  console.log('changed!');

  const div = document.querySelector('.change-input-value');
  div.innerHTML = e.target.value;
  /* e: 이벤트 객체
  target: 이벤트가 발생한 요소 자체
  value: input의 value 값 */
});
