// 실습 2 - 버튼 클릭시 텍스트 컬러 변경
import { useState } from 'react';

export default function Prac2() {
  const [msg, setMsg] = useState({ text: '검정색 글씨', color: 'black' });

  return (
    <>
      <div style={{ color: msg.color }}>{msg.text}</div>
      <button onClick={() => setMsg({ color: 'red', text: '빨간색 글씨' })}>
        빨간색
      </button>
      <button onClick={() => setMsg({ color: 'blue', text: '파란색 글씨' })}>
        파란색
      </button>
    </>
  );
}
