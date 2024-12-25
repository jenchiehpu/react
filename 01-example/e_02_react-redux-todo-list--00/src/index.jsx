import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './components/App';
import 'css/app.scss';

let preloadedState;
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  preloadedState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}
const store = createStore(reducer, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
