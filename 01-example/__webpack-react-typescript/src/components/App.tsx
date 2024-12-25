import MyHooks from './MyHooks';

const App: React.FC = () => (
  <div className="app container">
    <h1>hi, react</h1>
    <MyHooks count={9527} onClick={() => console.log(123)} />
  </div>
);

export default App;
