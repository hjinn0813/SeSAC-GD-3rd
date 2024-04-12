import { useRef, useState } from 'react';

export default function FuncRef() {
  // react에서 DOM 요소 조작하기
  // react는 가상 DOM을 사용하므로 DOM요소에 직접 접근해 조작하기 금지
  const input = useRef();
  const focusInput = () => {
    console.log(input);
    console.log(input.current);
    input.current.focus();
  };

  // ref를 변수로 사용하기
  const localVar = useRef(0);
  const [state, setState] = useState(0);
  let justVar = 0;

  const increLocalVar = () => {
    localVar.current++;
    console.log(localVar.current);
  };

  const increJustVar = () => {
    justVar++;
    console.log(justVar.current);
  };

  return (
    <>
      {/* useRef를 사용해 만든 ref는 DOM요소와 연결해 사용 */}
      {/* ref 속성으로 만든 ref를 전달 */}
      <input type="text" ref={input} />
      <button onClick={focusInput}>버튼</button>

      <h2>localVar.current: {localVar.current}</h2>
      <h2>state: {state}</h2>
      <h2>justVar: {justVar}</h2>
      <button onClick={increLocalVar}>localVar +1</button>
      <button onClick={() => setState(state + 1)}>state +1</button>
      <button onClick={increJustVar}>justVar +1</button>
    </>
  );
}
