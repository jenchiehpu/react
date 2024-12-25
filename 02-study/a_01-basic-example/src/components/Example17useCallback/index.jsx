import { useState, useCallback } from 'react';
import MemoButton from './MemoButton';

const HooksUseCallback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const atClick1 = () => {
    setCount(count + 1);
  };
  /* // TODO
  const atClick2 = useCallback(() => {
    setCount(count + 1);
  }); // 這樣寫和上面的 atClick1 結果是一樣的

  const atClick3 = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 當 count 有變時，會回傳新的 function

  const atClick4 = useCallback(() => {
    setCount(count + 1); // wrong
  }, []);

  const atClick5 = useCallback(() => {
    setCount((prev) => prev + 1); // correct
  }, []);
  // */

  return (
    <section data-name="Example17useCallback">
      <h2>
        count:{count}, count2:{count2}
      </h2>
      <MemoButton className="bg-warning" onClick={atClick1}>
        atClick1
      </MemoButton>
      {/* <MemoButton className="bg-warning" onClick={atClick2}>
        atClick2
      </MemoButton> */}
      {/* <MemoButton className="bg-info" onClick={atClick3}>
        atClick3
      </MemoButton> */}
      {/* <MemoButton className="bg-danger" onClick={atClick4}>
        atClick4
      </MemoButton> */}
      {/* <MemoButton className="bg-success" onClick={atClick5}>
        atClick5
      </MemoButton> */}
      <button className="my-btn mt-2" onClick={() => setCount2(count2 + 1)}>
        setCount2
      </button>
    </section>
  );
};

export default HooksUseCallback;
