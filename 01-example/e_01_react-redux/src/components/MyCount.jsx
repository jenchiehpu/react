import { useSelector } from 'react-redux';

const MyCount = () => {
  const count = useSelector((state) => state.count);
  return (
    <section data-name="MyCount">
      <h3>Count: {count}</h3>
    </section>
  );
};

export default MyCount;
