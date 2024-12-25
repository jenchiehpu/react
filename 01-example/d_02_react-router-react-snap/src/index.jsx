import ReactDOM from 'react-dom';
import './css/style.scss';
import App from './components/App';

const rootEl = document.getElementById('root');

if (rootEl.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootEl);
} else {
  ReactDOM.render(<App />, rootEl);
}
