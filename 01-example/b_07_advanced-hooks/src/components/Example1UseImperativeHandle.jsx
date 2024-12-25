import * as React from 'react';

const MyInput = React.forwardRef((props, ref) => {
  const [input, setInput] = React.useState('hi, 9527');
  // prettier-ignore
  React.useImperativeHandle(ref, () => {
  return {
    getCustomText() {
      return input;
    }
  };
  }, [input]);

  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
});

const Example1UseImperativeHandle = () => {
  const [name, setName] = React.useState('');
  const inputRef = React.useRef(null);

  const atShowInputClick = () => {
    setName(inputRef.current.getCustomText());
  };
  return (
    <section data-name="useImperativeHandle">
      <h1>{name}</h1>
      <button onClick={atShowInputClick}>getCustomText</button>
      <MyInput ref={inputRef} />
    </section>
  );
};
export default Example1UseImperativeHandle;
