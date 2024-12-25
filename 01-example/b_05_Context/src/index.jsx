import ReactDOM from 'react-dom';
import 'css/app.scss';

const render = () => {
  const NextApp = require('./components/App').default;
  ReactDOM.render(
    <NextApp />,
    document.getElementById('root'),
  );
};

render();

// Hot Reloading
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
