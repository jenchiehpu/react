import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-root">
      <div className="jumbotron">
        <h3 className="display-3">Hello React</h3>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
