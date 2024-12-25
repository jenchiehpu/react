import ReactDOM from 'react-dom/client'; // TODO
import App from '@/components/App';
import './css/app.scss';
import './css/style.scss';

// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
/* 
// Before
import { render } from 'react-dom';
const container = document.getElementById('app');
render(<App tab="home" />, container);
 */
// TODO
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
