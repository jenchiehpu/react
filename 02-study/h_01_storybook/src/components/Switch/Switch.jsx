import React from 'react';
import style from './Switch.module.scss';

type SwitchProps = {
  checked: boolean,
  onChange: (checked: boolean) => {},
};
const Switch: React.FC<SwitchProps> = (props) => {
  const { checked = false, onChange } = props;

  const atInputChangeHandler = React.useCallback(
    (e) => {
      const targetChecked = e.target.checked;
      onChange?.(targetChecked);
    },
    [onChange],
  );

  return (
    <label className={style.root}>
      <input type="checkbox" checked={checked} onChange={atInputChangeHandler} />
      <span />
    </label>
  );
};
export default Switch;
