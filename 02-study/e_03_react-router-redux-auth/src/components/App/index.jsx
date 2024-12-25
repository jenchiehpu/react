import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Home';
import HomeInner from '../Home/HomeInner';
import Menu from '../Menu';
import Videos from '../Videos';
import Login from '../Login';

import ProtectedRoute from '../../containers/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <Menu />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/inner" element={<HomeInner />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route
              path="/video"
              element={
                <ProtectedRoute>
                  <Videos />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
