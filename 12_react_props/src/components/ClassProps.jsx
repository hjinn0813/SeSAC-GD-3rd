import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClassProps extends Component {
  render() {
    console.log(this.props);
    // 객체 {drink: 'americano', payment: 'card'} 출력

    return (
      <>
        <h1 className="title">클래스형 컴포넌트의 props 사용</h1>
        <div>
          주문하신 음료는 {this.props.drink}이고, 결제는 {this.props.payment}
          입니다.
        </div>
        <div>가격은 {this.props.price}입니다.</div>
      </>
    );
  }

  // 클래스 컴포넌트에서 props 관련 속성 추가 방법 1.
  // static 키워드 사용하여 컴포넌트 선언 내부에서 작성
  static defaultProps = {
    price: 8500,
    // price가 undefined일때 출력됨
  };
}

// 클래스 컴포넌트에서 props 관련 속성 추가 방법 2.
// 클래스 컴포넌트 선언 밖에서 점 접근법으로 props 속성 지정
// drink, payment props는 string, price props는 number로 타입 제한
ClassProps.propTypes = {
  drink: PropTypes.string,
  payment: PropTypes.string.isRequired, // payment는 필수 값으로 지정
  price: PropTypes.number,
};
