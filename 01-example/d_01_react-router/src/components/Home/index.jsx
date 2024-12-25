import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section data-name="Home">
      <h3 className="display-3">Hello React</h3>
      <Link to="/video">video</Link>
    </section>
  );
};
export default Home;
