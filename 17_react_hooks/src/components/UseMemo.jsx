import { useState, useMemo } from 'react';

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState('');

  // calc 함수는 inputVal state가 업데이트 될 때도 함수가 실행됨
  // -> 콘솔이 출력되는 것을 확인할 수 있다
  /* const calc = () => {
    console.log('..calc');
    return count * 2;
  }; */

  // useMemo 사용해서 count의 값이 변화하면 콜백함수 실행
  // 렌더링 과정에서 두번째 인자로 받은 의존성 배열 내 요소의 값이 바뀌는 경우
  // 첫번째 인자로 받은 콜백함수가 실행됨 -> 리턴값 반환
  // inputVal state가 변경되면 컴포넌트는 리렌더링되지만 calc 함수는 재실행 안됨
  // 해당 함수의 반환값을 기억하다가 의존성 배열의 값(count) 변경시 재실행
  const calc = useMemo(() => {
    console.log('..calc');
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>useMemo hook</h2>
      <div>inputVal: {inputVal}</div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button onClick={() => setCount(count + 1)}>count +1 버튼</button>
      <div>count: {count}</div>

      {/* useMemo 사용하지 않는 경우 */}
      {/* <div>calc: {calc()}</div> */}

      {/* useMemo 사용하는 경우 */}
      <div>calc: {calc}</div>
    </>
  );
}

/*
useMemo는 메모이제이션으로 수행한 연산의 결과값을 기억하여 
불필요한 계산을 최소화하고, 리렌더링을 방지할 수 있음

~ useEffect, useMemo의 차이 ~
useEffect: 해당 컴포넌트 렌더링 완료된 이후 실행
- 렌더링 후에 상태 업데이트되었을 떄를 감지하여 동작 -> 리렌더링을 방지할 수 없다
useMemo: 렌더링 과정 중에 실행된다
- 렌더링 과정 중에 의존성 배열의 값이 변경되는지 확인하고
만약 값이 변경되었다면 이전에 저장한 값이랑 비교해서 값이 다른 경우에만 리렌더링함
- 메모이제이션을 통해 불필요한 계산 최소화, 리렌더링을 막아 렌더링 성능 최적화 시에 사용
*/
