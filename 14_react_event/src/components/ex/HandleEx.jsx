// 실습 1 - 버튼 클릭시 메시지 변경

// import { Component } from 'react';

// export default class HandleEx extends Component {
//   constructor(props) {
//     super(props);

//     this.changeMsg = this.changeMsg.bind(this);
//   }

//   state = {
//     msg: 'Hello World!',
//   };

//   changeMsg() {
//     this.setState({ msg: 'Goodbye World!' });
//   }

//   render() {
//     return (
//       <>
//         <div>{this.state.msg}</div>
//         <button onClick={this.changeMsg}>변경하기!</button>
//       </>
//     );
//   }
// }

/* 함수형 */
import { useState } from 'react';

export default function HandleEx() {
  const [msg, setMsg] = useState('Hello World!');

  return (
    <>
      <div>{msg}</div>
      <button onClick={() => setMsg('Goodbye World!')}>변경하기!</button>
    </>
  );
}
