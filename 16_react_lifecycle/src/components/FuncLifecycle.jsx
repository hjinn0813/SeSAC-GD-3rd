import { useState, useEffect } from 'react';

const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState('');

  // 컴포넌트 마운트시 실행 (의존성 배열: 빈 배열)
  useEffect(() => {
    console.log('함수형 컴포넌트: mount!');

    // 컴포넌트 unmount (빈 배열 시에 실행됨)
    // mount, unmount 시점에만 실행되는 로직은 한번에 작성 가능
    return () => {
      console.log('함수형 컴포넌트: unmount!!');
    };
  }, []);

  // 컴포넌트 unmount (리턴문 안에 작성)
  /* useEffect(() => {
    return () => {
      console.log('함수형 컴포넌트: unmount!!');
    };
  }, []);
  */

  // 컴포넌트 update (& mount)시에 실행
  useEffect(() => {
    console.log('함수형 컴포넌트: update~ number');
  }, [number]);

  useEffect(() => {
    console.log('함수형 컴포넌트: update~ text');
  }, [text]);

  // 의존성 배열 내부에 다수의 요소 작성 가능
  useEffect(() => {
    console.log('함수형 컴포넌트: update~ (num + text)');
  }, [number, text]);

  // 컴포넌트 mount & update시 실행 (의존성배열 없음)
  useEffect(() => {
    console.log('함수형 컴포넌트 mount & update');
  });

  return (
    <>
      <div>MyComponent 함수형: {number}</div>
      <hr />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>text state: {text}</div>
    </>
  );
};

export default function FuncLifecycle() {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setNumber(number + 1)}>num+1 버튼</button>
      <button onClick={() => setVisible(!visible)}>컴포넌트 토글</button>
      {visible && <MyComponent number={number} />}
    </>
  );
}
