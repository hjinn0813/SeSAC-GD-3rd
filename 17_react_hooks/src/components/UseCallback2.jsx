import { useCallback, useState } from 'react';

export default function UseCallback2() {
  const [text, setText] = useState('');

  // input 태그에 onChange 속성으로 연결된 함수의 경우
  // 업데이트가 매우 잦아 리렌더링 될 때마다 이벤트 핸들러 함수 생성
  // 로직 자체에는 변화가 없지만 불필요하게 함수가 생성되는 중

  /* const handleChange = (e) => {
    setText(e.target.value);
  }; */

  // useCallback 사용해서 콜백함수 자체를 저장하고 사용
  // 불필요하게 함수가 생성되지 않음
  // 의존성 배열이 비어있으면 useCallback을 사용한 함수는 재선언되지 않음
  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  // 결과는 동일하지만 함수가 메모리에 저장되어
  // 다시 선언되지 않고 불러와 사용하고 있음
  return (
    <>
      <h2>useCallback 사용 2</h2>
      <div>text state: {text || '없음'}</div>
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
}

/*
~~ useMemo, useCallback의 차이 ~~

const memoizationValue = useMemo(()=>{함수}, [의존성배열])
const memoizationCallback = useCallback(()=>{함수}, [의존성배열])

useCallback: useMemo를 기반으로 만들어진 hook
- useMemo에서 값이 아닌 '함수'를 사용할 때의 편의성을 높이기 위해 만들어짐

공통점: 성능 최적화
- useMemo는 값의 재사용을 위해 전달된 함수를 실행하고 그 결과(리턴값)를 메모이제이션
- useCallback은 함수의 재사용을 위해 전달된 함수 자체를 메모이제이션
*/
