import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionIncrease, actionDecrease } from '@/actions';

const MyCountButton = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const atIncrease = useCallback(() => {
    dispatch(actionIncrease());
  }, [dispatch]);
  const atDecrease = useCallback(() => {
    dispatch(actionDecrease());
  }, [dispatch]);
  return (
    <section data-name="MyCountButton">
      <h3>Count: {count}</h3>
      <button className="btn btn-primary me-2" onClick={atIncrease}>
        +
      </button>
      <button className="btn btn-warning" onClick={atDecrease}>
        -
      </button>
    </section>
  );
};
export default MyCountButton;
