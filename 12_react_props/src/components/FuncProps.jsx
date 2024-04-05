// 1. props 매개변수(인자)

// export default function FuncProps(props) {
//   // 부모 요소에서 props로 전달한 데이터가 props 내부에 객체 형태로 저장
//   console.log(props);

//   return (
//     <>
//       <h1>함수형 컴포넌트에서 props 사용</h1>
//       <div><b>전달받은 props 객체를 점 접근법으로 바로 접근해 사용</b></div>
//       <div>weather props로 전달받은 데이터 : {props.weather}</div>
//       <div>feeling props로 전달받은 데이터 : {props.feeling}</div>
//     </>
//   );
// }

// -------------------------------------------------------------------------
// 2. 컴포넌트 내에서 props 매개변수 구조분해

// export default function FuncProps(props) {
//   // props를 구조분해할당해서 weather, feeling으로 바로 값을 사용할 수 있도록 하기
//   const { weather, feeling } = props;

//   console.log(weather);
//   console.log(feeling);

//   return (
//     <>
//       <h1>함수형 컴포넌트에서 props 사용하기</h1>
//       <div>
//         <b>전달받은 props 객체를 구조분해하여 사용</b>
//       </div>
//       <div>weather props로 전달받은 데이터 : {weather}</div>
//       <div>feeling props로 전달받은 데이터 : {feeling}</div>
//     </>
//   );
// }

// -------------------------------------------------------------------------
// 3. 매개변수로 props 받아올 때부터 구조분해하기

// export default function FuncProps({ weather, feeling }) {
//   console.log(weather);
//   console.log(feeling);

//   return (
//     <>
//       <h1>함수형 컴포넌트에서 props 사용하기</h1>
//       <div>
//         <b>매개변수로 props를 받아올 때부터 구조분해하여 사용</b>
//       </div>
//       <div>weather props로 전달받은 데이터 : {weather}</div>
//       <div>feeling props로 전달받은 데이터 : {feeling}</div>
//     </>
//   );
// }

// -------------------------------------------------------------------------
// 4. props handling
/*
import PropTypes from 'prop-types';

export default function FuncProps({ weather, feeling, date }) {
  console.log(weather);
  console.log(feeling);
  console.log(date);

  return (
    <>
      <h1>함수형 컴포넌트에서 props 사용하기</h1>
      <div>
        <b>default props로 weather props만 보여주기</b>
      </div>
      <div>오늘의 날짜는 {date}</div>
      <div>weather props로 전달받은 데이터 : {weather}</div>
      <div>feeling props로 전달받은 데이터 : {feeling}</div>
    </>
  );
}

// weather props의 기본값 설정
// 만약 weather props가 전달되지 않으면 여기서 지정한 값을 출력
FuncProps.defaultProps = {
  weather: 'cloudy',
};

// props의 타입 지정
// 전달받을 props의 타입을 지정해 예기치 못한 에러를 줄이기 위함
// isRequired : 필수로 해당 props를 전달하도록 제한, 전달 안하면 콘솔에 에러
// 이외 props는 전달되지 않으면 undefined일뿐 에러 없음 -> JS 유연성 때문
FuncProps.propTypes = {
  weather: PropTypes.string,
  feeling: PropTypes.string,
  date: PropTypes.number.isRequired,
};
*/

// -------------------------------------------------------------------------
// 5. props.children
// 부모 컴포넌트에서 해당 컴포넌트가 import되어 사용될때
// 이 컴포넌트의 컨텐츠를 가지고 와야 하는 경우에 사용한다

// 문자열 전달
/*
export default function FuncProps(props) {
  return <div>{props.children}</div>;
} */

// 함수 전달
/* 
export default function FuncProps(props) {
  return <div onClick={props.children}>클릭!</div>;
} */

// 요소 전달
export default function FuncProps(props) {
  return <>{props.children}</>;
}
