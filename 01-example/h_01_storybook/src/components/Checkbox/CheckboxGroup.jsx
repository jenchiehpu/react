import React, { useEffect, useState, useCallback } from 'react';

import { CheckboxContext } from './CheckboxContext';

type CheckboxGroupProps = {
  children: React.ReactNode,
  defaultValue?: string[],
  onChange?: (value: string[]) => void,
};
const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  defaultValue = [],
  onChange,
}) => {
  const [values, setValues] = useState(defaultValue);

  const atChange = useCallback((value: string, checked: boolean) => {
    setValues((prev: string[]) => {
      const idxOf: number = prev.indexOf(value);
      if (checked && idxOf < 0) {
        return prev.concat(value);
      }
      if (idxOf > -1) {
        return prev.slice(0, idxOf).concat(prev.slice(idxOf + 1));
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    onChange?.(values);
  }, [values, onChange]);

  const providerValue = React.useMemo(() => {
    return {
      values,
      setSelectValue: atChange,
    };
  }, [values, atChange]);

  return (
    <CheckboxContext.Provider value={providerValue}>{children}</CheckboxContext.Provider>
  );
};
export default CheckboxGroup;
