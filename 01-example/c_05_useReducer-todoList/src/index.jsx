import ReactDOM from 'react-dom';
import './css/app.scss';
import './css/style.scss';

const rootEl = document.getElementById('root');

function render() {
  // const NextApp = require('./components/UserReducerExample').default;
  // TODO
  const NextApp = require('./components/App').default;
  ReactDOM.render(<NextApp />, rootEl);
}
render();
// Hot Reloading
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    render();
  }
}
