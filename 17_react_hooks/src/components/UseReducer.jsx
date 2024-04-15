import { useState, useReducer } from 'react';

/* useReducer Hook
- reducer: state를 업데이트 하는 역할
- dispatch: state를 업데이트 시키기 위한 요구 (state의 setter 함수 같은 역할)
디스패치는 action을 인자로 받아서 reducer로 전달
- action: 요구의 내용 (어떤 업데이트를 할지)
*/

const reducer = (prevState, action) => {
  console.log('dispatch 호출시 reducer 동작함!');
  console.log(prevState, action);

  // reducer 함수 내부에는 조건문 사용 (switch, if else 등)
  // -> 복잡한 state의 관리는 state와 업데이트 로직이 하나가 아니라는 의미
  switch (action.type) {
    case 'deposit':
      return Number(prevState) + Number(action.payload);
    case 'withdraw':
      return Number(prevState) - Number(action.payload);
    case 'withdrawAll':
      return 0;
    default:
      return prevState;
  }
};

export default function UseReducer() {
  // 입금 또는 출금할 금액
  const [number, setNumber] = useState(0);

  // const [스테이트, 디스패치] = useReducer(reducer, 초기값)
  // reducer는 따로 만들어야 함
  // 잔고(money state)를 수정하고 싶은 경우에 reducer가 dispatch를 불러줌
  // 디스패치는 인자로 action을 가지고 있다
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>useReducer 사용</h2>
      <div>잔고: {money}원</div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: 'deposit', payload: number });
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'withdraw', payload: number });
        }}
      >
        출금
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch({ type: 'withdrawAll', payload: null });
          // alert('정말 출금하시겠습니까?')
          setNumber(0);
        }}
      >
        전액 출금하기
      </button>
    </>
  );
}
