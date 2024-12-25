/* eslint-disable react/button-has-type */
import { useState } from 'react';
import style from './app.module.scss';

const App = () => {
  const [idx, setIdx] = useState(0);
  return (
    <div className="container mx-auto border p-4 space-y-5">
      <section data-name="jit">
        <h1 className="text-3xl">hi, Tailwind</h1>
        <div className="w-[100px] h-[100px] bg-gray-400">Box</div>
      </section>
      <section data-name="BTNStyle">
        <button className="my-btn">MyButton</button>
        <button className={style.btn}>StyleBTN</button>
      </section>

      <section data-name="apply">
        <h2 className="text-5xl">{idx}</h2>
        <div className="space-x-3">
          <button
            className="border bg-white p-2 rounded data-active:bg-primary"
            data-active={idx === 0}
            onClick={() => setIdx(0)}
          >
            MyButton0
          </button>
          <button
            className="border bg-white p-2 rounded data-active:bg-primary"
            data-active={idx === 1}
            onClick={() => setIdx(1)}
          >
            MyButton1
          </button>
          <button
            className={style.myBTN}
            data-active={idx === 2}
            onClick={() => setIdx(2)}
          >
            MyButton2
          </button>
        </div>
      </section>

      <section data-name="important">
        <h1 className="!text-primary">important</h1>
      </section>
    </div>
  );
};

export default App;
