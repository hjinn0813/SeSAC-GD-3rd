import { Component } from 'react';

class MyComponent extends Component {
  // 컴포넌트 마운트 되었을 떄
  componentDidMount() {
    console.log('클래스형 컴포넌트에서 mount!');
  }

  // 컴포넌트 업데이트(리렌더링) 된 경우
  componentDidUpdate() {
    console.log('클래스형 컴포넌트에서 update~');
  }

  // 컴포넌트 unmount
  componentWillUnmount() {
    console.log('클래스형 컴포넌트에서 unmount!!');
  }

  render() {
    return <div>MyComponent Class형: {this.props.number}</div>;
  }
}

export default class ClassLifecycle extends Component {
  state = {
    number: 0,
    visible: true,
  };

  render() {
    return (
      <>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          number+1 버튼
        </button>
        <button onClick={() => this.setState({ visible: !this.state.visible })}>
          MyComponent visible 버튼
        </button>

        {/*
        visible 값에 따라 컴포넌트의 보임 여부 달라짐
        보이는 경우는 생성(mount)
        안 보이는 경우는 제거(unmount)
        props로 number 전달 -> state 변경(업데이트)
        */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}
