/* eslint-disable no-bitwise */
import React, { useCallback } from 'react';
import { useCheckboxContext } from './CheckboxContext';
import style from './Checkbox.module.scss';

type CheckboxProps = {
  disabled: boolean,
  value?: string,
  text: string,
};
const Checkbox: React.FC<CheckboxProps> = ({ disabled = false, value, text }) => {
  const { values, setSelectValue } = useCheckboxContext();

  const atChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSelectValue(e.target.value, e.target.checked);
    },
    [setSelectValue],
  );

  const inputValue = value ?? text;

  return (
    <div className={style.root} data-disabled={disabled}>
      <label className={style.label}>
        <input
          type="checkbox"
          value={inputValue}
          checked={~values.indexOf(inputValue)}
          onChange={atChangeHandler}
        />
        <i className={style.i} />
        <span className={style.span}>{text}</span>
      </label>
    </div>
  );
};
export default Checkbox;
