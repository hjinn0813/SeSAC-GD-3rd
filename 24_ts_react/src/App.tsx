import PropsTypes from './components/PropsTypes';
import UseStateCompo from './components/UseStateCompo';
import UseRef from './components/UseRef';
import EventObj from './components/EventObj';

function App() {
  return (
    <div className="App">
      <PropsTypes name="layla" age={20} />
      <PropsTypes name="layla" />
      <hr />
      <UseStateCompo />
      <UseRef />
      <EventObj />
    </div>
  );
}

export default App;
