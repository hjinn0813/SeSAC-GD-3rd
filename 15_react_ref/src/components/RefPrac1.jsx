import { useState, useRef } from 'react';

export default function RefPrac1() {
  // 현재 입력되어있는 유저 데이터 (서버에서 받아왔다는 전제)
  // data state는 유저 아이디+이름+메일을 포함한 객체의 배열
  // set data는 새로 들어갈 유저 정보
  const [data, setData] = useState([
    { id: 1, user: '장원영', email: 'wonyoung@gmail.com' },
    { id: 2, user: '안유진', email: 'yujin@gmail.com' },
  ]);

  // 새로운 유저의 정보를 입력받을 input
  // input으로 받은 정보를 보여줄 setter 함수
  // -> setter 함수는 onChange 속성을 통해 input에 입력되는 값을 받아와서 출력
  const [inputUser, setInputUser] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  // input focus를 위한 ref 생성
  const userInputRef = useRef();
  const emailInputRef = useRef();

  // 사용자의 정보를 받는 input에 변경사항이 있을 때 실행되는 함수
  // onChange로 연결되어 있으며 해당 함수가 실행될 때
  // 이벤트가 발생한 input의 value를 inputUser, inputEmail state의 값으로 업데이트
  // e는 event 객체를 의미함 -> react synthetic event 객체
  // e.target: 이벤트가 발생한 요소를 의미 -> 여기서는 input창
  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // 유효성검사 validation
  const validation = () => {
    // 두 가지 조건을 무조건 전부 확인해야할때 if문 2개 작성 가능
    if (inputUser.trim().length === 0) {
      userInputRef.current.focus();
      return false;
    }
    if (inputEmail.trim().length === 0) {
      emailInputRef.current.focus();
      return false;
    }

    return true;
    // 빈칸이 모두 입력되었을 때
  };

  // eventClick():
  // 1. 이메일 input의 onKeyDown 속성에 연결하여 엔터키 누르면 정보 보여짐
  // 2. 새로운 유저의 정보가 브라우저에 보여질 수 있게 '등록' 버튼에 연결
  const eventClick = () => {
    if (!validation) {
      return;
      // validation 함수가 false면 아래 정보출력 코드 작동 안함
    }

    // 새로운 데이터를 기존 데이터 배열에 추가
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // nextData는 새로 업데이트될 유저의 데이터
    // 원래 data state의 값을 spread 연산자로 객체를 각각 불러내고
    // 가장 마지막에 새로 입력받은 유저 정보를 객체 형태로 추가함
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];

    /* 새로운 유저의 정보를 출력하는 영역 */
    // setData는 data state를 위에서 선언한 nextData로 업데이트
    // 새로 추가된 데이터가 가장 마지막에 더해진다
    // 컴포넌트 리렌더링 되면서 브라우저에 추가된 데이터 함께 렌더링
    setNextId(nextId + 1);
    setData(nextData);

    // inputUser, inputEmail state를 setter 함수를 통해 빈 문자열로 업데이트
    // 각 state가 빈 문자열이 되면 input창도 빈 문자열로 바뀜
    // -> input을 초기화하여 다음 데이터 입력 준비
    setInputUser('');
    setInputEmail('');
  };

  // inputEmail에 onKeyDown 속성으로 연결되어있는 함수
  // '등록' 버튼 클릭하지 않고 이메일 입력 후 엔터 눌러도
  // 새로운 유저 정보가 eventClick() 함수를 통해 브라우저에 보여진다
  const onKeyDownEnter = (e) => {
    if (e.key === 'Enter') {
      eventClick();
    }
  };

  // 유저 목록을 보여주는 h2 태그에 onDoubleClick 속성으로 연결된 함수
  // 현재 data state에서 인자로 받은 id와 같지 않은 요소만 배열로 저장해서 data state를 업데이트
  // -> data state에 저장된 유저 정보를 filter 메서드로 순회하면서
  // 등록된 id와 인자로 들어온 id가 같지 않은 것만 모아서 배열로 반환하고,
  // 반환된 새 배열을 NextData 변수에 저장
  // setter 함수를 통해 반환된 NextData 배열의 값으로 data state 업데이트
  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

  // 브라우저에 보여지는 유저 목록
  // data state에 저장된 객체의 배열을 map 메서드로 돌아가며 출력
  // key를 통해 유저의 id값으로 불러와서 보여주고,
  // 유저 정보를 더블클릭하면 id값을 통해서 정보 삭제됨
  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
        ref={userInputRef}
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
        ref={emailInputRef}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </>
  );
}
