import Example1UseImperativeHandle from './Example1UseImperativeHandle';
// import Example2MemoryLeaksExample from './Example2MemoryLeaksExample';
// import Example3UseFetch from './Example3UseFetch';
// import Example4UseLayoutEffect from './Example4UseLayoutEffect';
// import Example5UseLayoutEffect from './Example5UseLayoutEffect';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Example1UseImperativeHandle />
        {/* <Example2MemoryLeaksExample /> */}
        {/* <Example3UseFetch /> */}
        <div className="row">
          <div className="col-6">
            {/* <Example4UseLayoutEffect /> */}
          </div>
          <div className="col-6">
            {/* <Example4UseLayoutEffect isLayoutEffect /> */}
          </div>
        </div>
        {/* <Example5UseLayoutEffect /> */}
      </div>
    </div>
  );
};

export default App;
