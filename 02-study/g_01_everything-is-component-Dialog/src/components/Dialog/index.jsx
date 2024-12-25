import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './Dialog.scss';

const modalRoot = document.getElementById('modal-root');

type DialogProps = {
  show: boolean,
  onClose: () => void,
  children: React.ReactNode,
};

const Dialog: React.FC<DialogProps> = (props) => {
  const { show, onClose, children } = props;
  const eleRef = useRef(document.createElement('div'));

  useEffect(() => {
    modalRoot.appendChild(eleRef.current);
    return () => {
      modalRoot.removeChild(eleRef.current);
    };
  }, []);

  // TODO
  const atKeydownHandler = useCallback(
    ({ keyCode }) => {
      if (keyCode === 27) {
        // ESC
        onClose();
      }
    },
    [onClose],
  );

  // TODO
  const atBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  // TODO
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

  // TODO
  const childrenWithProps = React.Children.map(children, (child) => {
    const childProps = { onClose };
    return React.cloneElement(child, childProps);
  });

  return ReactDOM.createPortal(
    <dialog className="modal-backdrop" onClick={atBackdropClick} style={dialogStyle}>
      <div className="modal-dialog">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          {childrenWithProps}
        </div>
      </div>
    </dialog>,
    eleRef.current,
  );
};
export default Dialog;
