import UseMemo from './components/UseMemo';
import UseCallback from './components/UseCallback';
import UseCallback2 from './components/UseCallback2';
import UseReducer from './components/UseReducer';
import CustomHook from './components/CustomHook';

function App() {
  return (
    <div className="App">
      <UseMemo />
      <UseCallback />
      <hr />
      <UseCallback2 />
      <hr />
      <UseReducer />
      <hr />
      <CustomHook />
    </div>
  );
}

export default App;
