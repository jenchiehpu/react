import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '@/components/App';
import reducer from './reducers';
import './css/app.scss';

// https://github.com/reduxjs/redux/blob/master/src/createStore.ts#L343-L350
// const store = createStore(reducer);
let preloadedState = null;
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
