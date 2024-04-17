import { useState } from 'react';
import { AgeContext } from '../../contexts/AgeContext';

export default function AgeProvider(props) {
  const [age, setAge] = useState(0);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {props.children}
    </AgeContext.Provider>
  );
}

/* App.js에서 state를 선언하는 것이 아니라 
provider 컴포넌트를 따로 만들어 해당하는 state를 각자 provider에서 관리 */
