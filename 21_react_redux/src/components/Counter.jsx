import { useSelector, useDispatch } from 'react-redux';
// useSelector(): store에서 관리되는 스테이트를 가져오는 hook
// useDispatch(): reducer 함수에 담겨있는 액션을 가져오는 hook?

export default function Counter() {
  const number = useSelector((state) => state);
  console.log(number);

  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux로 store에서 관리되는 state 가져오고 사용하기</h2>
      <div>전역관리되는 state value: {number}</div>
      <hr />
      <div>전역관리되는 state값 변경하기</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>리셋</button>
    </>
  );
}
