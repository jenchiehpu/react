import React from 'react';

const KeyExample2 = () => {
  const [step, setStep] = React.useState(0);
  const atSwitchStep = () => {
    setStep(step === 0 ? 1 : 0);
  };
  return (
    <section data-name="KeyExample2">
      <button onClick={atSwitchStep} className="my-btn">
        Switch Step
      </button>
      {step === 0 ? (
        // 加個 key 可決解
        <div>
          <h1>Step1</h1>
          <label>name:</label>
          <input type="text" />
        </div>
      ) : (
        <div>
          <h1>Step2</h1>
          <label>email:</label>
          <input className="my-input" type="email" />
          <br />
          <label>address:</label>
          <input type="text" />
        </div>
      )}
    </section>
  );
};
export default KeyExample2;
