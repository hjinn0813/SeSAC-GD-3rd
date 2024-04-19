import BasicCss from './components/BasicCss';
import ModuleCss from './components/ModuleCss';
import StyledComp from './components/StyledComp';
import Sass from './components/Sass';

function App() {
  return (
    <div className="App">
      <ModuleCss />
      <BasicCss />
      <h3>리액트에서 스타일 적용하는 방법</h3>
      <ol>
        <li>인라인 스타일 적용 방법</li>
        <li>일반 CSS 파일 만들어 import</li>
        <li></li>
      </ol>
      <StyledComp />
      <Sass />
    </div>
  );
}

export default App;
