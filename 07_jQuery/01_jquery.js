// jquery 기본형태: $('css선택자').메소드();
/* - $(): html 요소를 선택하는 함수. 해당하는 모든 요소 선택됨.
-> querySelectorAll과 비슷 */
console.log($('.testSelector'));

/* $() 선택자는 제이쿼리를 사용하기 위해 만들어진 함수라서
document~ 의 방식처럼 요소를 선택할 수 없다.
그러므로 아래 코드는 에러 발생함. */

/* $('.testSelector').addEventListener('click', () => {
  alert('클릭되었습니다!');
}); */

// --------------------------------------------------------------------------
function useVal() {
  // 1. val(): input의 값을 가져오기
  // jquery 사용
  const value = $('input').val();
  console.log(value);

  // js 사용
  /* const value2 = document.getElementsByTagName('input').value; */

  // 2. val(): input의 값을 수정하기
  // jquery 사용
  $('input').val('수정할 값 작성');

  // js 사용
  /* document.querySelector('input').value = 'js로 값 수정하기' */
}

// --------------------------------------------------------------------------
// 3. attr('속성', '속성값'): 요소의 속성 추가, 수정
function useAttr() {
  // jquery 사용
  $('input').attr('placeholder', '이름을 입력하세요'); // 속성 추가
  console.log($('input').attr('placeholder')); // 속성 가져오기
  $('input').attr('type', 'checkbox'); // 속성 변경

  /* js에서는 getAttribute(), setAttribute() 사용 */
}

// --------------------------------------------------------------------------
// 4. text(): 요소의 텍스트만 가져오거나 수정
function useText() {
  // 텍스트 가져오기
  console.log($('#span').text());

  // 텍스트 수정하기 (innerText와 동일)
  console.log($('#span').text('text 메소드로 수정함'));
}

// --------------------------------------------------------------------------
// 5. html(): 요소의 컨텐츠(html 형식)를 가져오거나 수정
function useHtml() {
  // html 가져오기
  console.log($('#span').html());

  // html 수정하기 (innerHTML과 동일)
  console.log($('#span').html('html 메소드로 <b>수정함</b>'));
}

// --------------------------------------------------------------------------
// .css(): css(스타일) 변경
function useCss() {
  // 변수에 담아서 사용하기
  const span = $('#span');
  span.css('font-size', '30px');

  // js 사용
  /* document.querySelector('#span').style = 'font-size: 30px;' */

  // 모든 자식요소 배경색 변경
  // $('.container').children().css('background-color', 'yellow');
}

// --------------------------------------------------------------------------
// append(), prepend(), before(), after()
function useAppend() {
  /* append() 사용해서 .container의 마지막 자식으로 요소 추가
  텍스트 작성 가능, html 형식으로 작성시 반영됨*/
  // $('.container').append(`<div class="box red"></div>`);

  /* prepend() 사용해서 첫번째 자식으로 추가 */
  // $('.container').prepend(`<div class="box yellow"></div>`);

  /* before(): 선택된 요소의 앞에 인자로 전달된 요소 추가 */
  /* 모든 red 클래스를 가진 요소의 앞에 orange 클래스를 가진 요소 추가됨
  -> jquery 사용하면 반복문 사용하지 않고도 모든 요소에 지정할 수 있음 */
  $('.red').before(`<div class="box orange"></div>`);

  /* $('.container .red:first-child').before(`<div class="box orange"></div>`);
  -> css 선택자를 자세하게 작성해서 첫번째 요소만 지정 가능 */

  /* after(): 선택된 요소의 뒤에 인자로 전달된 요소 추가 (형제) */
  $('.orange').after(`<div class="box yellow"></div>`);
}

// --------------------------------------------------------------------------
// remove(), empty()
function useRemove() {
  /* remove(): 선택된 요소 삭제 */
  $('#red').remove();

  // empty(): 선택된 요소의 모든 컨텐츠(자식요소, 텍스트 모두) 삭제
  $('.container').empty();
  /* js에는 empty 메소드 없고, innerHTML 속성을 빈 문자열로 하면 동일함
   document.querySelector('.container').innerHTML = ''
  */
}

// --------------------------------------------------------------------------
// parent(), parents(), next(), prev()
function useParent() {
  // parent() === js parentNode, 직계 부모요소 찾기
  console.log('parent :', $('#red').parent());

  // parents(): 부모와 조상을 포함한 모든 상위요소 찾기
  console.log('parents :', $('#red').parents());

  // next() === js nextElementSibling, 자신의 다음 형제요소 찾기
  console.log('next :', $('#red').next());

  // prev() === js previousElementSibling, 자신의 이전 형제요소 찾기
  /* container 클래스를 가진 두번째 자식이면서
  박스 클래스를 가진 요소를 선택하여 해당 요소의 이전 형제요소 불러오기 */
  console.log('prev :', $('.container .box:nth-child(2)').prev());

  // children() === js children, 자신의 모든 자식요소 찾기
  console.log('children :', $('.container').children());
}

// --------------------------------------------------------------------------
// addClass(), removeClass(), hasClass(), toggleClass()
function controlClass() {
  $('#controlClass').addClass('red'); // 추가
  $('#controlClass').removeClass('text'); // 특정 클래스 삭제
  // $('#controlClass').removeClass(); // 모든 클래스 삭제
  console.log($('#controlClass').hasClass('red')); // 불리언 값 반환
  $('#controlClass').toggleClass('red'); // 토글하기
  // document.querySelector('#controlClass').classList.toggle('red')
}
