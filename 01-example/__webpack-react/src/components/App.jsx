import MyHooks from './MyHooks';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div className="app container">
      <MyHooks count={9527} onClick={() => alert('hi, webpack')} />
      <MyComponent name="milkmidi" />
    </div>
  );
};

export default App;
