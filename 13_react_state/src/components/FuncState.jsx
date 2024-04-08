// 1. JS로 작성하기
/* 
export default function FuncState() {
  let apple = '사과';
  const inEng = () => {
    // .state 요소를 찾아 해당 요소의 컨텐츠를 apple로 바꾸가
    const content = document.querySelector('.state');
    content.innerText = 'apple';
    apple = 'apple';
  };
  console.log(apple);

  return (
    <>
      <h2>함수형 컴포넌트 state 사용</h2>
      <div>이 컴포넌트는 vanilla JS로 작성</div>
      <button onClick={() => inEng()}>영어로 변경!</button>
      <div className="state">{apple}</div>
    </>
  );
} 
*/

// ================================================================================
// 2. useState 사용하기

// import { useState } from 'react';

// export default function FuncState() {
//   /* const [state 변수명, state 변경할 set함수] = useState(초기값) */
//   // useState로 state 선언시 위 예시처럼 배열로 반환,
//   // state와 set함수를 구조분해할당하여 변수에 저장하고 바로 사용.
//   // 하나의 선언문 안에 여러 개의 state를 만들고 사용할 수 있다.

//   const [apple, setApple] = useState('사과');
//   const [number, setNumber] = useState(0);

//   return (
//     <>
//       <h2>함수형 컴포넌트 state 사용</h2>
//       <div>이 컴포넌트는 useState로 작성</div>
//       <button onClick={() => setApple('apple')}>영어로 변경!</button>
//       <div>{apple}</div>
//       <hr />
//       <h2>Number state를 1씩 증가시키는 버튼 만들기</h2>
//       <div>{number}</div>
//       <button
//         onClick={() =>
//           // setNumber(number +1);
//           // alert(number);
//           /* number state를 1 더하는 로직 다음에 alert를 띄우는 로직이 있어도
//           alert에 보이는 값은 1을 더하기 전 number 값이 보임
//           state의 setter 함수는 비동기적으로 동작한다.
//           그래서 number라는 state가 1 더한 값으로 업데이트 되기 전에
//           alert창이 띄워져서 원래 값이 보이게 됨.
//           */

//          /* 이를 해결하기 위한 예시
//          state의 set함수에 인자로 업데이트할 값이 아닌 콜백 전달
//          해당 콜백의 인자는 원래 state값이고, 여기에 1을 더하는 로직
//          -> setNumber((prevNum) => prevNum + 1)
//          */
//         setNumber((prevNum) => {
//             alert(prevNum + 1);
//             return prevNum + 1;
//           })
//         }
//       >
//         +1
//       </button>
//     </>
//   );
// }

// ================================================================================
// 버튼 클릭시 apple/사과 번갈아가며 변경
import { useState } from 'react';

export default function FuncState() {
  const [showEng, setShowEng] = useState(true);

  return (
    <>
      <h2>함수형 컴포넌트 state 사용</h2>
      <div>이 컴포넌트는 useState로 작성</div>
      <button onClick={() => setShowEng(!showEng)}>
        {showEng ? '한글' : '영어'}로 변경!
      </button>
      <div>{showEng ? 'apple' : '사과'}</div>
    </>
  );
}
