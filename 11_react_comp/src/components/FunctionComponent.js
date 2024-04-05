// function FunctionComponent() {
//   return <h1>함수형 컴포넌트</h1>;
// }

// export default FunctionComponent;

// --------------------------------------------------------------------------------
// rfc + enter or tab : 파일명과 동일한 이름의 함수형 컴포넌트 만들어준다.
// extension 설치하면 쉽게 만들 수 있다.

// import React from 'react'

// export default function FunctionComponent() {
//   return (
//     <div>FunctionComponent</div>
//   )
// }

// --------------------------------------------------------------------------------
// 4월 5일 학습내용
import cat from '../assets/cat.jpeg';

export default function FunctionComponent() {
  const text = '안녕하세요!';
  const name = 'layla';
  const show = true;
  const textStyle = { backgroundColor: 'navy', color: 'pink', fontWeight: 900 };

  const checkUser = () => {
    if (name === 'layla') {
      return '안녕하세요!';
    } else if (name === 'lily') {
      return '오랜만입니다!';
    } else {
      return '나가주세요..';
    }
  };

  const handleClick = () => {
    alert('클릭했다!!');
  };

  return (
    <>
      {/* 
        1. 하나의 최상위 부모 요소로 감싸서 return
        - virtual DOM에서 컴포넌트의 변화를 감지할 때
        효율적으로 비교 가능하도록 컴포넌트 내부에는 
        하나의 DOM tree 구조로 이루어져야 한다고 react가 정함.
        - div, section, article, header, footer 등
        최상위 부모요소는 어떤 요소든 상관없음.
        - 불필요한 태그를 만들지 않기 위해
        <></>와 같은 태그로 감싸는 경우도 많음.
        (fragment 단축문법 -> react 제공, 공식문서 참고 요망)
      */}
      <div>함수형 컴포넌트 1</div>
      <div>함수형 컴포넌트 2</div>

      {/* 2-1. JS 문법 사용 (변수) */}
      <div>인사는 {text}</div>

      {/* 2-2. JS 문법 사용 (삼항연산자 사용한 조건부 렌더링, 간단ver) */}
      <h3>{name == 'layla' ? `어서오세요, ${name}님!` : '누구세요?'}</h3>

      {/* 2-3. JS 문법 사용 (위에서 함수 만들어 사용, 복잡ver) */}
      <h3>{checkUser()}</h3>

      {/* 2-4. JS 문법 사용 (조건부 렌더링, && 연산자) */}
      <h3>{show && '모달창 넣어주기!'}</h3>

      {/* 3. inline style 적용방법 -> style 속성값으로 객체 전달 */}
      {/* HTML TAG : <div style="color: pink"></div> */}
      <div style={{ backgroundColor: 'pink', color: 'navy', fontWeight: 900 }}>
        Hello!
      </div>
      <div style={textStyle}>
        위에서 객체 지정했기 때문에 중괄호 두 번 묶을 필요없음
      </div>

      {/* 4. class, onclick을 JSX에서 사용하기 */}
      {/* HTML TAG : <div class="text-css" onclick="함수()"></div> */}
      <div className="text-css">JSX에서 CSS 사용하기 (className)</div>
      <button
        onClick={() => {
          alert('클릭');
        }}
      >
        HTML에서는 함수를 호출했지만, JSX에서는 선언해서 사용!!
      </button>
      <button onClick={handleClick}>
        {/* 클릭하기 전에 실행되면 안되니까 괄호 없음 */}
        위에서 선언한 함수 불러오기
      </button>

      {/* 5. 빈 태그도 닫기 필수! (태그, 컴포넌트 동일) */}
      <br></br>
      <br />

      {/* 절대경로는 public부터 잡힌다 */}
      <img src="/logo192.png" alt="react" />

      {/* src 폴더의 이미지 사용은 해당 이미지 import해서 */}
      <img src={cat} alt="cat" style={{ width: 200 }} />
    </>
  );
}
