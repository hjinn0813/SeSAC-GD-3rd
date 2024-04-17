import { createContext } from 'react';

// createContext에 들어갈 기본값 설정
const defaultAge = {
  age: 0,
  setAge: () => {},
  // 나이를 변경하는 age state의 setter 함수가 될 예정
};

export const AgeContext = createContext(defaultAge);
