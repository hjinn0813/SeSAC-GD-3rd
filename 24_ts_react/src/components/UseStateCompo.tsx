import { useState } from 'react';
import { dataTypes } from '../types/todoData';

// types 디렉토리로 이동해 다른 파일에서도 사용할 수 있도록
// interface dataTypes {
//   id: number;
//   todo: string;
//   done: boolean;
// }

export default function UseStateCompo() {
  // count state 만들기 - 기본값 0
  const [count, setCount] = useState<number>(0);

  // 복잡한 데이터를 저장하는 state를 사용하는 경우
  // 방법 1. any 사용 -> 너무 복잡하면 어쩔 수 없이..
  // const [data, setData] = useState<any[]>();
  // 방법 2. interface 만들어 사용
  const [data, setData] = useState<dataTypes[]>();

  // setData([
  //   {
  //     id: 1,
  //     todo: '할 수 있다 외치기',
  //     done: false,
  //   },
  //   {
  //     id: 2,
  //     todo: 'ts 사용 연습하기',
  //     done: false,
  //   },
  //   {
  //     id: 3,
  //     todo: '힘을 모아 프로젝트 완성하기',
  //     done: false,
  //   },
  // ]);

  return (
    <>
      <h2>ts react에서 useState 사용하기</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </>
  );
}
