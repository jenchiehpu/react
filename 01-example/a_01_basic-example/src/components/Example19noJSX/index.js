import React from 'react';

// https://babeljs.io/repl/#?browsers=%3E%202%25%2C%20not%20dead%2C%20IE%20%3E%2011&build=&builtIns=false&corejs=false&spec=false&loose=true&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4AoctCAOwGd4BRADxXABsk4BeOACgCUPAHxwA3uThxq9eAG1qAVxowANHDpIYAYQjKYAXR6JiMAHSLNAZRgoYSPgAYBFKURiKoNfpKlwAPJoYwLRwACZ2KAC0NGxI3ABELGxgnACMABwJwr5-AQAWacL5wP4A9IU5eVL-AEaKMDC0udVo7Ch0dABycYkgAJ5RtTA0CS15tNrswGgA1txigiLi49WaOnoqfEoqcADUcGkuq1IAvqerVdVSAEIAKl2r5fWNtFc1ZUEwITRXx6cUchIZiQWDhJCYFCKdhMVgcJAUIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=true&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Ctypescript&prettier=true&targets=&version=7.17.5&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.5.5%2C%40babel%2Fplugin-proposal-optional-chaining%407.11.0&assumptions=%7B%7D
/* const Example = () => {
  const [count, setCount] = React.useState(0);
  return (
    <section data-name="Example18">
      <h1>hi</h1>
      <button
        className="my-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        BTN
      </button>
    </section>
  );
}; */
const Example = () => {
  const [count, setCount] = React.useState(0);

  return React.createElement(
    'section',
    {
      'data-name': 'Example19noJSX',
    },
    React.createElement('h1', null, 'hi, react no JSX'),
    React.createElement(
      'button',
      {
        className: 'my-btn',
        onClick: () => {
          setCount(count + 1);
        },
      },
      'BTN',
    ),
  );
};

export default Example;
