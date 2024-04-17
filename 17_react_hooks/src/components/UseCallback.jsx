import { useEffect, useState, useCallback } from 'react';

export default function UseCallback() {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  /* 일반적으로 선언된 함수의 경우 컴포넌트가 리렌더링 될 때마다 함수가 재선언됨
  -> 그러므로 isTrue state의 변경이 있어도 func1 함수는 재선언됨
  -> useEffect에서 의존성배열로 func1에 변경이 생기면 
  내부 로직 실행하도록 작성시 매번 useEffect 의 콜백함수가 실행됨 */
  const func1 = () => {
    console.log(`number state: ${number}`);
  };

  // 의존성 배열에 전달한 number의 값이 변하지 않으면 콜백함수 그대로 사용,
  // number의 값이 바뀌면 콜백함수(hook의 첫번째 인자)를 다시 메모이제이션함
  const func2 = useCallback(() => {
    console.log(`number state: ${number}`);
  }, [number]);

  useEffect(() => {
    console.log('func1 함수 변경');
  }, [func1]);

  useEffect(() => {
    console.log('func2 함수 변경!!');
  }, [func2]);

  return (
    <>
      <h2>useCallback 사용 1</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <br />
      <button onClick={func1}>func1 실행</button>
      <button onClick={func2}>func2 실행</button>
      <button onClick={() => setIsTrue(!isTrue)}>{isTrue.toString()}</button>
    </>
  );
}

/* useEffect에 의존성 배열에 함수가 들어가는 경우 useCallback을 사용하면 성능에 도움이 된다 
const [data, setData] = useState(null)

const fetchData = useCallback(() => {
  fetch(`~~~/${postId}`).then((response) => response.json());
}, [postId]);

useEffect(() => {
  fetchData().then((data) => setData(data));
}, [fetchData]);

// 처음 컴포넌트 mount시 fetchData 실행과 동시에 메모리에 콜백함수 자체가 저장
// postId 값에 변경이 없으면 fetchData 함수는 컴포넌트가 리렌더링되어도 재선언 안됨
// 계속 사용되지 않는 함수나 연산이 너무 복잡한 함수는 useCallback으로 저장한다
*/
