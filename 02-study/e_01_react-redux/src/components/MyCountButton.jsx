import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionIncrease, actionDecrease } from '@/actions';
import { StoreTypes } from '@/reducers';

const MyCountButton = () => {
  const count = useSelector((state) => state.count);
  /* // TODO
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => {
    dispatch(actionIncrease());
  }, [dispatch]);
  const onDecrease = useCallback(() => {
    dispatch(actionDecrease());
  }, [dispatch]);
  // */
  return (
    <section data-name="MyCountButton">
      <h3>Count: {count}</h3>
      <button className="btn btn-primary me-2" onClick={onIncrease}>
        +
      </button>
      <button className="btn btn-warning" onClick={onDecrease}>
        -
      </button>
    </section>
  );
};
export default MyCountButton;
