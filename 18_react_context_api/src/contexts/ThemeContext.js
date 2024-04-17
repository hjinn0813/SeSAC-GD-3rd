import { createContext } from 'react';
export const ThemeContext = createContext();
/* 
createContext의 인자는 실제로 해당 context를 사용하는 경우에
provider의 value로 넘겨주지 않았거나
또는 value를 찾지 못했을 떄 사용하게 될 기본값
*/
