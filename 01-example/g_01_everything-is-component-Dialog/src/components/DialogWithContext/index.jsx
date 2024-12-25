// @flow
import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { DialogContext } from './DialogContext';
import './Dialog.scss';

const modalRoot = document.getElementById('modal-root');

type DialogProps = {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode,
};

const Dialog: React.FC<DialogProps> = ({ show, onClose, children }) => {
  const eleRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(eleRef.current);
    return () => {
      modalRoot.removeChild(eleRef.current);
    };
  }, []);

  const atKeydownHandler = useCallback(
    ({ keyCode }) => {
      if (keyCode === 27) {
        // ESC
        onClose();
      }
    },
    [onClose],
  );

  const atBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (show) {
      window.addEventListener('keydown', atKeydownHandler);
    } else {
      window.removeEventListener('keydown', atKeydownHandler);
    }
  }, [show, atKeydownHandler]);

  const dialogStyle = {
    display: show ? 'block' : 'none',
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    const childProps = { onClose };
    return React.cloneElement(child, childProps);
  });

  // TODO
  const dialogContextProvider = React.useMemo(() => {
    return {
      onClose() {
        onClose();
        console.log('onClose');
      },
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <DialogContext.Provider value={dialogContextProvider}>
      <dialog className="modal-backdrop" onClick={atBackdropClick} style={dialogStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <button className="modal-close" onClick={onClose}>
              X
            </button>
            {childrenWithProps}
          </div>
        </div>
      </dialog>
    </DialogContext.Provider>,
    eleRef.current,
  );
};
export default Dialog;
