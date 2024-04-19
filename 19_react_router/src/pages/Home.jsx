import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false);

  console.log(queryParams.get('mode'));
  /* 
    / -> null
    /?mode=dark -> dark
  */
  const toggleMode = () => {
    // isDark가 true이면 다크모드니까 일반모드로 변경 -> 루트 주소
    // isDark가 false면 일반모드니까 다크로 변경 -> /?mode=dark
    setQueryParams(isDark ? {} : { mode: 'dark' });
    setIsDark(!isDark);
  };

  return (
    <>
      <h1>Welcome, Home 컴포넌트</h1>
      <div style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}>
        현재 모드: {isDark ? '다크 모드' : '라이트 모드'}
      </div>
      <button onClick={toggleMode}>모드 변경</button>
    </>
  );
}
