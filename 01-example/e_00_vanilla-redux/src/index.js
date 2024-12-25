import { createStore } from 'redux';
import { setValueAction } from '@/actions';
import reducers from './reducers';
import './css/app.scss';
import './css/style.scss';

const store = createStore(reducers);

const valueEl = document.getElementById('value');
function render() {
  valueEl.innerHTML = JSON.stringify(store.getState(), null, 2);
}

render();
store.subscribe(render);

const onClick = (selector, clickHandler) => {
  document.querySelector(selector).addEventListener('click', clickHandler);
};

onClick('#increment', () => {
  store.dispatch({ type: 'INCREMENT' });
});

onClick('#decrement', () => {
  store.dispatch({ type: 'DECREMENT' });
});

onClick('#setValue', () => {
  // store.dispatch({ type: 'SET_VALUE', value: 9527 }); // bad
  store.dispatch(setValueAction(9999)); // good
});

onClick('#setUserName', () => {
  store.dispatch({
    type: 'USER_INFO_NAME',
    value: '奶綠茶',
  });
});
