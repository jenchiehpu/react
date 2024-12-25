import React from 'react';
import RenderTip from '@/components/RenderTip';
import { useMyContext } from './context';

const MyCountButton = () => {
  // TODO
  // const { count, setCount } = useMyContext();

  return (
    <section data-name="MyCountButton">
      <RenderTip />
      <h3>context.count:{count}</h3>
      <button type="button" className="my-btn" onClick={() => setCount(count + 1)}>
        increment
      </button>
    </section>
  );
};

export default React.memo(MyCountButton);
