import Example1 from './Example1';
import MyComponentRender from './MyComponentRender';

const App = () => {
  return (
    <div className="app container">
      <Example1>
        {(name) => (
          <section data-name="inner">
            <h1>children:{name}</h1>
          </section>
        )}
      </Example1>

      <MyComponentRender
        render={(name) => (
          <section data-name="inner">
            <h1>render:{name}</h1>
          </section>
        )}
      />
    </div>
  );
};

export default App;
