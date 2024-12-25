import loadable from '@loadable/component';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';

const Videos = loadable(() => import('../Videos'));
const Overlay = loadable(() => import('../Overlay'));

export default function App() {
  return (
    <Router>
      <div className="app" id="top">
        <div className="container">
          <Menu />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Videos />} />
            <Route path="/video/:id" element={<Overlay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
