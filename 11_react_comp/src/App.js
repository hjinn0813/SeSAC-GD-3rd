import './App.css';
import './components/ClassComponent';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';

function App() {
  return (
    <div className="App">
      {/* 불러와서 사용하는 방법 1 */}
      <ClassComponent />

      {/* 불러와서 사용하는 방법 2 */}
      <ClassComponent></ClassComponent>

      {/* 함수형 컴포넌트 불러오기 */}
      <FunctionComponent />
    </div>
  );
}

export default App;
