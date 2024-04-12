import { useState } from 'react';

export default function FuncEvent() {
  const [msg, setMsg] = useState('힘내세요!!');
  const msgToEng = () => {
    setMsg('fighting~');
  };
  const msgToKor = () => {
    setMsg('힘내세요!!');
  };

  const alertMsg = (msg) => {
    alert(msg);
    // 여기에서는 매개변수일뿐 state랑 관련 없음
  };

  const [menu, setMenu] = useState('');
  const handleEnter = (e) => {
    /* e는 리액트의 합성 이벤트 객체를 의미.
    target은 해당 이벤트가 발생한 요소에 접근할 수 있음
    key는 해당 이벤트가 발생하기 위해 눌려진 키보드 키를 의미
    ->일반 문자는 process(한글)나 알파벳(영어), enter는 enter라는 값을 가짐
    code는 해당 이벤트 발생하기 위해 눌려진 키보드 키를 자세히 확인 가능
    (일반 문자는 KeyA와 같이 key 뒤에 눌려진 키를 확인할 수 있음)
    */
    console.log(e);
    if (e.key === 'enter') {
      alert(`점심 메뉴는 ${menu}로 결정!`);
    }
  };

  return (
    <>
      <h2>함수형 컴포넌트의 이벤트 핸들링</h2>
      <div>{msg}</div>

      {/* 클릭 이벤트 발생시 실행할 함수 자체를 onClick에 전달 -> 함수 호출 아님 */}
      <button onClick={msgToEng}>fighting~</button>
      <button onClick={msgToKor}>힘내세요!!</button>
      <br />
      <hr />

      {/* 함수에 매개변수를 전달하는 경우 */}
      {/* 방법 1. onClick에서 익명함수 선언하여 그 안에서 함수 실행하기 */}
      {/* 익명함수 자체를 전달하는 것이고 alertMsg 함수 자체를 호출한 것이 아님 */}
      <button onClick={() => alertMsg('오늘은 금요일!')}>
        메시지 alert (익명함수 선언)
      </button>
      <br />

      {/* 방법 2. bind 메서드 사용하기 */}
      <button onClick={alertMsg.bind(null, '끝까지 불태워봅시다!')}>
        메시지 alert (bind 메서드)
      </button>
      <br />

      {/* 1. input에서 변경사항 발생시 해당 input의 value를 콘솔에 출력 */}
      {/* 2. input에서 엔터 누르면 입력한 값을 alert으로 보여주기 */}
      <input
        type="text"
        value={menu}
        placeholder="오늘 점심 뭐 먹지?"
        onChange={(e) => {
          // 여기서 사용되는 e는 브라우저의 native 이벤트가 아니라 리액트의 synthetic 이벤트 객체
          // console.log(e);
          // console.log(e.target.value);
          setMenu(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
    </>
  );
}
