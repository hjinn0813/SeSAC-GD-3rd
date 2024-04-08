import { Component } from 'react';

// 1. 클래스형 컴포넌트 첫 출시때 state 사용방법
/* 
export default class ClassState extends Component {
  constructor(props) {
    super(props); // comps 클래스에서 props 상속받는 중

    this.state = {
      banana: '바나나',
    };
  }
} */

// ==================================================================================
export default class ClassState extends Component {
  // 2. 현재 클래스형 컴포넌트에서 state 사용방법
  /* constructor 없이 state만 바로 작성
    -> constructor 없으면 아래의 코드가 자동으로 들어감
    constructor(props) {
      super(props)
    } 
  */

  state = {
    banana: '바나나',
    // banana라는 state 선언, 값으로 '바나나' 저장
  };

  render() {
    const { banana } = this.state;

    return (
      <>
        <h2>클래스형 컴포넌트에서 state 사용</h2>
        <button onClick={() => this.setState({ banana: 'yellow' })}>
          영어로 변경!
        </button>
        {/* state 선언을 객체형으로 했으니까 setState 내부에도 객체형으로 작성 */}

        <div>{this.state.banana}</div>
        <div>{banana}</div>
      </>
    );
  }
}
