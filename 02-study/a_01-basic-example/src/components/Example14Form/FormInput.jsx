import React from 'react';

const FormInput = () => {
  const [name, setName] = React.useState('');
  const atChange = (e) => {
    setName(e.target.value);
  };
  return (
    <section data-name="FormInput">
      <h4>FormInput</h4>
      <p>
        name:
        {name}
      </p>
      {/* <input
        type="text"
        value={name}
        onChange={atChange}
      /> */}
    </section>
  );
};

export default FormInput;
