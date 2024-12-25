/* eslint-disable no-plusplus */
import React, { useMemo, useState, useCallback } from 'react';

import { RadioGroupContext } from './context';

let i = 0;

type RadioGroupProps = {
  name?: string,
  children: React.ReactNode,
  defaultValue?: string,
  onChange?: (value: string) => void,
};
const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  children,
  defaultValue,
  onChange,
}) => {
  const radioGroupName = useMemo(() => name || `radio-group-${++i}`, [name]);
  const [selectValue, setSelectValue] = useState(defaultValue);

  const atChange = useCallback(
    (value: string) => {
      setSelectValue(value);
      // babel https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
      // compile
      // https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PYOwwgFghiDmCmB-AdACgC5QE4PQNSgBsBXeASgG4g&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact&prettier=false&targets=&version=7.11.1&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.5.5%2C%40babel%2Fplugin-proposal-optional-chaining%407.11.0
      onChange?.(value);
      // 上面這行等於下面這行
      /* if (onChange) {
      onChange(targetValue)
    } */
    },
    [onChange],
  );

  const providerValue = useMemo(
    () => ({
      groupName: radioGroupName,
      selectValue,
      setSelectValue: atChange,
    }),
    [atChange, radioGroupName, selectValue],
  );

  return (
    <RadioGroupContext.Provider value={providerValue}>
      {children}
    </RadioGroupContext.Provider>
  );
};
export default RadioGroup;
