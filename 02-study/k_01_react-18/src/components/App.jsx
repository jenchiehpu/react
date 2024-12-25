import Example0AutoBatching from './Example0AutoBatching';
import Example1Hooks from './Example1Hooks';
import Example2useDeferredValue from './Example2useDeferredValue';
import Example3StartTransition from './Example3StartTransition';
import UseSyncExternalStoreExample from './UseSyncExternalStoreExample';

const App = () => {
  return (
    <div className="app container">
      <Example0AutoBatching />
      <Example1Hooks />
      <Example2useDeferredValue />
      <Example3StartTransition />
      <UseSyncExternalStoreExample />
    </div>
  );
};

export default App;
