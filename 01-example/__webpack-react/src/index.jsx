// https://zh-hant.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
// React 17 support automatic import React
// import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/components/App';
import './css/app.scss';

const rootEl = document.getElementById('root');

ReactDOM.render(<App />, rootEl);
