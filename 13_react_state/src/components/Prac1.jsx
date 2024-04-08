// 실습 1 - 클래스형
// import React, { Component } from 'react';

// export default class Prac1 extends Component {
//   state = {
//     number: 0,
//   };

//   render() {
//     const { number } = this.state;

//     return (
//       <>
//         <h1>{number}</h1>
//         <button onClick={() => this.setState({ number: number + 2 })}>
//           +2
//         </button>
//         <button onClick={() => this.setState({ number: number - 1 })}>
//           -1
//         </button>
//       </>
//     );
//   }
// }

// ================================================================================
// 실습 1 - 함수형
// import { useState } from 'react';

// export default function Prac1() {
//   const [number, setNum] = useState(0);

//   return (
//     <>
//       <button onClick={() => setNum((num) => num + 2)}>+2</button>
//       <button onClick={() => setNum((num) => num - 1)}>-1</button>
//       <div>{number}</div>
//     </>
//   );
// }

// ================================================================================
// 실습 2 - 숫자의 증가와 감소 (함수형)
import { useState } from 'react';

export default function Prac1() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const decrease = () => {
    setNumber(number - 2);
  };

  return (
    <>
      <h1>
        {number} {number < 8 ? '😘' : '👊'}
      </h1>
      <button onClick={increase}>+ 1</button>
      <button onClick={decrease}>- 2</button>
    </>
  );
}
