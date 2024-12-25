import React, { useContext } from 'react';

export const RadioGroupContext = React.createContext(null);

interface IRadioGroupContext {
  groupName: string;
  selectValue: string;
  setSelectValue: (value: string) => void;
}

export function useRadioGroupContext(): IRadioGroupContext {
  return useContext(RadioGroupContext);
}
