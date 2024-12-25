import React from 'react';

export const DialogContext = React.createContext();

type UseDialogContextType = {
  onClose: () => void,
};

export const useDialogContext = (): UseDialogContextType => {
  return React.useContext(DialogContext);
};
