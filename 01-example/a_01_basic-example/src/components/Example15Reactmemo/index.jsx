import React from 'react';

const RenderTip = ({ count }) => {
  const renderCountRef = React.useRef(0);
  React.useEffect(() => {
    renderCountRef.current += 1;
  });

  return (
    <section data-name="RenderTip">
      <h1>props.count:{count}</h1>
      <h2>renderCount:{renderCountRef.current}</h2>
    </section>
  );
};

// https://zh-hant.reactjs.org/docs/react-api.html#reactmemo
// https://github.com/facebook/react/blob/master/packages/shared/shallowEqual.js
const RenderTipMemo = React.memo(RenderTip);

function areEqual(prevProps, nextProps) {
  console.log(prevProps);
  console.log(nextProps);
  return true;
}
const RenderTipMemo2 = React.memo(RenderTip, areEqual);

const ReactMemoExample = () => {
  const [count, setCount] = React.useState(0);
  const [show, setShow] = React.useState(false);

  return (
    <section data-name="Example15Reactmemo">
      <h1>count:{count}</h1>
      <button className="my-btn" onClick={() => setCount(count + 1)}>
        count
      </button>
      <hr />
      <h1>show:{`${show}`}</h1>
      <button className="my-btn" onClick={() => setShow(!show)}>
        toggle show
      </button>
      <RenderTip count={count} />
      <RenderTipMemo count={count} />
      <RenderTipMemo2 count={count} />
    </section>
  );
};

export default ReactMemoExample;
