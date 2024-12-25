import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

function render() {
  const App = require('./components/App').default;
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
}

render();
