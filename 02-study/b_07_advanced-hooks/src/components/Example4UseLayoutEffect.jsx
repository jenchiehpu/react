import React from 'react';
/**
 * useEffect
 * 1 dependency Array 有更新
 * 2 React render
 * 3 Browser 更新畫面
 * 4 useEffect 執行
 */

/**
 * useLayoutEffect 當畫面遇到閃爍問題才需要使用
 * 1 dependency Array 有更新 (同 useEffect)
 * 2 React render (同 useEffect)
 * 3 useLayoutEffect 執行, 然後 React 會等他結束
 * 4 Browser 更新畫面
 */

// https://github.com/donavon/hook-flow

const log1 = (msg) => console.log(`%c${msg}`, 'background: #27ae60; color: white');
const log2 = (msg) => console.log(`%c${msg}`, 'background: #3498db; color: white');

const HooksUseLayoutEffect = (props) => {
  const { isLayoutEffect } = props;
  const [count, setCount] = React.useState(0);

  const prefix = isLayoutEffect ? 'useLayoutEffect' : 'useEffect';
  const log = isLayoutEffect ? log2 : log1;

  log('1 render');

  const useAlias = isLayoutEffect ? React.useLayoutEffect : React.useEffect;

  useAlias(() => {
    if (count === 1) {
      setCount(10 + Math.random() * 200);
      alert(1);
    } else {
      setCount(0);
    }
  }, [count]);

  React.useLayoutEffect(() => {
    log('2 useLayoutEffect');
  });
  React.useEffect(() => {
    log('3 useEffect');
  });

  return (
    <section data-name="UseLayoutEffectExample" className={isLayoutEffect ? 'style-1' : ''}>
      <h1>{prefix}</h1>
      <h2>count:{count}</h2>
      <button className="my-btn" onClick={() => setCount(1)}>
        Click me
      </button>
    </section>
  );
};

export default HooksUseLayoutEffect;
