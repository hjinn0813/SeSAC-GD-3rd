import ClassState from './components/ClassState';
import FuncState from './components/FuncState';
import Prac1 from './components/Prac1';
import CharactorContainer from './components/CharactorContainer';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <ClassState />

      <FuncState />

      <Prac1 />

      <CharactorContainer />

      {/* ~~~ 4월 12일 학습내용 ~~~ */}
      <button onClick={() => setShow(true)}>모달 보여주기</button>
      {show && <modal msg="확인하시겠습니까?" setShow={setShow} />}
      {/* setter함수 자체를 props로 넘겨주는 중 */}

      {show && (
        <modal msg="확인하시겠습니까?" isInput={true} setShow={setShow} />
      )}
      {show && (
        <modal msg="확인하시겠습니까?" isCancelBtn={true} setShow={setShow} />
      )}
    </div>
  );
}

export default App;
