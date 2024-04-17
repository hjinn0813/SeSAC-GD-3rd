import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import AgeProvider from './components/provider/AgeProvider';
import UserProvider from './components/provider/UserProvider';
import Box from './components/Box';
import Profile from './components/Profile';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <h1>context API 사용하기</h1>
      <div>전역적으로 접근 가능한 값이 있을 때 접근을 쉽게 하려고 사용함</div>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 객체형으로 넣을때 key와 value가 같으면 생략 가능 */}
        {/* 이 내부의 컴포넌트만 ThemeContext가 관리하는 값에 접근 가능 */}
        <Box />
      </ThemeContext.Provider>

      {/* ThemeContext.Provider 내부에 작성되지 않으면
      해당 context의 value에 접근해 사용할 수 없어서 
      isDark 사용하는 곳부터 error 발생.
      context api 사용해서 전역적으로 관리하는 값에 접근하는 컴포넌트는 재사용성이 떨어짐
      -> context api 사용하기 전 해당사항 고려 필요
      */}
      {/* <Box /> */}
      <hr />
      <hr />
      {/* 2. 다수의 context 사용하기 */}
      <AgeProvider>
        <UserProvider>
          <Profile />
        </UserProvider>
      </AgeProvider>
    </div>
  );
}
export default App;
