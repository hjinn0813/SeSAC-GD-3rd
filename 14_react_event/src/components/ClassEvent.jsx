import { Component } from 'react';

export default class ClassEvent extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // handleClick 함수의 this를 클래스 자체를 의미하는 this로 bind
    // 함수 자체의 this가 아님!!
  }

  state = {
    msg: '즐거운 금요일!',
  };

  // 함수 선언문 사용하여 메서드를 정의
  // 함수 내부의 this는 클래스의 this와 다른 자체적인 this
  // 생성자함수 내부에서 this를 원하는 것으로 bind
  // bind 안하면 this가 함수 자체를 의미하게 되어 error
  handleClick() {
    this.setState({ msg: '주말은 짧아 ㅠㅠ' });
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트에서의 이벤트</h2>
        <div>{this.state.msg}</div>
        <button onClick={this.handleClick}>변경하기!</button>
        <br />
        <input
          type="text"
          onChange={(e) => {
            console.log(e);
            console.log(e.target.value);
          }}
        />
      </>
    );
  }
}
