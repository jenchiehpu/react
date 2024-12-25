import React from 'react';

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Example9 = () => {
  const [input, setInput] = React.useState('');
  const [isValide, setIsValide] = React.useState(false);
  const atInputChange = (e) => {
    setInput(e.target.value);
  };
  /* React.useEffect(() => {
    console.log(input);
    setIsValide(validateEmail(input));
  }, [input]); */
  return (
    <section data-name="Example9">
      <input type="text" value={input} onChange={atInputChange} />
      {!isValide && <p>invalide email</p>}
    </section>
  );
};

export default Example9;
