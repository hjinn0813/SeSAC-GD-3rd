// click()
$('.container').click((event) => {
  console.log('event:', event); // 이벤트 객체
  console.log('event target:', event.target); // 이벤트가 발생한 요소 자신을 선택

  // 배경색 바꾸기
  $(event.target).css('background-color', 'skyblue'); // 클릭한 것만 변경됨
  // $('.container').css('background-color', 'skyblue'); // 한번에 변경됨
});

/* mouseover, mouseout:
네비 바에 마우스 올리면 요소가 보이고, 마우스가 나가면 사라지는 기능으로 많이 사용 */
// mouseover(): 요소에 마우스 올라갔을때 실행
$('.container').mouseover(() => {
  console.log('마우스 올라감');
});

// mouseout(): 요소에서 마우스가 나갔을때 실행
$('.container').mouseout(() => {
  console.log('마우스 나감');
});

/* hover(): 마우스 올렸을 때만 이벤트 실행 (css에서 더 많이 사용)
인자로 함수 2개 작성 (mouseover, mouseout 한 번에 작성)
첫번째 콜백함수는 mouseover일때 실행할 코드,
두번째 콜백함수는 mouseout일때 실행할 코드 */
$('.container').hover(
  () => {
    console.log('hover에서 마우스 들어옴');
  },
  () => {
    console.log('hover에서 마우스 나감');
  }
);

// scroll()
$(document).scroll(() => {
  console.log('스크롤 발생됨');
});

// ================================================================================
// 키보드 이벤트
/* 
keydown: 선택한 요소에서 키보드를 누르는 이벤트가 발생한 경우
- 키보드를 누르고 있는 동안에도 계속 이벤트 발생
- 실시간 입력을 처리하거나 특수키 (화살표, 엔터 등) 감지에 사용한다
keyup: 선택한 요소에서 키보드를 떼는 이벤트가 발생한 경우
- 키보드를 누르는 동안에는 발생하지 않음
- 사용자가 입력을 완료하거나 특정 키를 눌렀다가 뗄 때 필요한 동작 처리에 사용한다
*/

// $('input[name=pw]').keydown((e) => {
//   console.log('event:', e);
//   console.log('e.key:', e.key);
//   if (e.key === 'Enter') {
//     console.log('엔터를 입력했습니다');
//     console.log(e.target.value); // 입력값 확인 가능 -> 로그인이나 검색 로직에서 활용
//   }
// });

// keyup 이벤트
// on(): 이벤트를 걸겠다는 의미. addEventListener와 비슷
$('input[name=pw]').on('keyup', (e) => {
  console.log('e.key:', e.key);
  if (e.key === 'Enter') {
    console.log(e.target.value); // 엔터 치면 모든 입력값 보여주기
  }
});
