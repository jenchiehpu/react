import React from 'react';
import FlatPickrComponent from './FlatPickrComponent';
// https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/#conclusion

const App = () => {
  const [input, setInput] = React.useState('');

  const inputRef = React.useRef(null);
  const fileInputRef = React.useRef(null);
  const atSubmit = () => {
    console.log(input);
    console.log(inputRef.current.value);
    console.log(fileInputRef.current.value);
  };
  return (
    <div className="app container">
      <section data-name="Controlled">
        <h3>{input}</h3>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </section>

      <section data-name="Unontrolled">
        <input type="text" defaultValue="DefaultValue" ref={inputRef} />
      </section>

      <section data-name="Unontrolled">
        <input type="file" ref={fileInputRef} />
      </section>

      <FlatPickrComponent onChange={(selectedDate) => console.log(selectedDate)} />

      <button className="my-btn" onClick={atSubmit}>
        Submit
      </button>
    </div>
  );
};

export default App;
