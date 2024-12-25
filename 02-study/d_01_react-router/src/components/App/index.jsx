import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../Home';
import Menu from '../Menu';
import Videos from '../Videos';
import Overlay from '../Overlay';

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Menu />
          <Routes>
            {/* TODO */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/video" element={<Videos />}>
              <Route path="/video/:id" element={<Overlay />} />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
