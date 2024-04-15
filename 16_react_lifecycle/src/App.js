import ClassLifecycle from './components/ClassLifecycle';
import FuncLifecycle from './components/FuncLifecycle';
import PracContainer from './components/PracContainer';
import PracFakePost from './components/PracFakePost';

function App() {
  return (
    <div className="App">
      <ClassLifecycle />
      <hr />
      <FuncLifecycle />
      <hr />
      <PracContainer>
        <PracFakePost />
      </PracContainer>
    </div>
  );
}

export default App;
