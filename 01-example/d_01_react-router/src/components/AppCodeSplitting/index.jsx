import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';

const Videos = loadable(() => import('../Videos'));
const Overlay = loadable(() => import('../Overlay'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Videos />}>
              <Route path="/video/:id" element={<Overlay />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
