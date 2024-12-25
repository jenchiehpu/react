// @flow
import { useRef, useCallback, useEffect } from 'react';
import './RenderTip.scss';

const RenderTip = () => {
  const refCount = useRef(0);
  const refMemoTipEl = useRef<HTMLElement>(null);
  useEffect(() => {
    refCount.current += 1;
    const { current } = refMemoTipEl;
    if (current) {
      current.classList.remove('style-animate');
      current.classList.add('style-animate');
    }
  });
  const atAnimationEnd = useCallback(() => {
    refMemoTipEl.current?.classList.remove('style-animate');
  }, []);
  return (
    <div className="rendertip-component">
      <span className="rendertip__display" ref={refMemoTipEl} onAnimationEnd={atAnimationEnd}>
        {refCount.current}
      </span>
    </div>
  );
};
export default RenderTip;
