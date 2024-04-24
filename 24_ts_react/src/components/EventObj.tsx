export default function EventObj() {
  // 이벤트 함수 만들어서 event 객체 사용 시 event 타입 지정 필수
  // 현재 이벤트는 클릭 이벤트 -> React.MouseEvent
  // 이벤트가 발생하는 요소는 button이라는 html 요소 -> <HTMLElement>
  const buttonClick = (event: React.MouseEvent<HTMLElement>) => {
    alert(event.target);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.code);
    console.log(e.key);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h2>ts react에서 e 객체 타입</h2>
      <button onClick={() => alert('클릭!')}>event 객체 사용 x</button>
      <button onClick={(event) => alert(event.target)}>
        바로 event 객체 사용
      </button>
      <button onClick={buttonClick}>함수 만들어서 event 객체 사용</button>
      <hr />
      {/* 키보드 이벤트 */}
      <div>키보드 이벤트</div>
      <input type="text" onKeyDown={handleKeydown} />
      <hr />
      <div>변경 감지 이벤트</div>
      <input type="text" onChange={handleChange} />
    </>
  );
}
