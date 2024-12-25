import React from 'react';
import style from './Radio.module.scss';

import { useRadioGroupContext } from './context';

type RadioProps = {
  label: string,
  name: string,
  value?: string,
  selectValue?: string,
  disabled?: string,
  onChange: () => void,
};

/*
 ?? 是 babel 的 babel-plugin-proposal-nullish-coalescing-operator
 https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator
 */
const Radio: React.FC<RadioProps> = ({ label, value, disabled }) => {
  const innerValue = value ?? label;

  // TODO
  const { groupName, selectValue, setSelectValue } = useRadioGroupContext();

  const atChange = () => {
    setSelectValue(innerValue);
  };

  return (
    <label className={style.root} data-disabled={disabled}>
      <h3>{disabled}</h3>
      <input
        disabled={disabled}
        type="radio"
        name={groupName}
        onChange={atChange}
        value={innerValue}
        defaultChecked={innerValue === selectValue}
      />
      <span className={style.decorate} />
      <span>{label}</span>
    </label>
  );
};
export default Radio;
