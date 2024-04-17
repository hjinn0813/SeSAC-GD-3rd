import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function Box() {
  // context api로 전역적으로 접근 가능한 context에 접근하겠다 선언
  // 작성되어 있는 context 중에 인자로 전달된 ThemeContext에 접근하겠다 선언
  const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <>
      <h2>Theme Context 사용하기</h2>
      <div style={isDark ? { backgroundColor: '#000', color: '#fff' } : {}}>
        Theme: {isDark ? 'night' : 'day'}
      </div>
      <button onClick={() => setIsDark(!isDark)}>테마 변경하기</button>
    </>
  );
}
