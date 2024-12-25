import React, { useRef, useCallback, useEffect } from 'react';
import './MemoButton.scss';

type MemoButtonProps = {
  children: React.ReactNode,
  onClick: () => void,
  className: string,
};
const MemoButton: React.FC<MemoButtonProps> = (props) => {
  const { children, onClick, className } = props;

  const refCount = useRef(0);
  const refMemoTipEl = useRef(null);
  useEffect(() => {
    refCount.current += 1;
    const { current } = refMemoTipEl;
    if (current) {
      current.classList.remove('style-animate');
      current.classList.add('style-animate');
    }
  });
  const atAnimationEnd = useCallback(() => {
    refMemoTipEl.current.classList.remove('style-animate');
  }, []);
  return (
    <div className="memo-btn">
      <span className="memo-btn__redner-tip" onAnimationEnd={atAnimationEnd} ref={refMemoTipEl}>
        {refCount.current}
      </span>
      <button className={`my-btn ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default React.memo(MemoButton);
