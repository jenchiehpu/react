/* eslint-disable no-alert */
import { useRef, useState, useEffect } from 'react';
import style from './Example5UseLayoutEffect.module.scss';

const HooksUseLayoutEffectExample = () => {
  const [show, setShow] = useState(false);
  /**
   * @type React.MutableRefObject<HTMLButtonElement>
   */
  const btnRef = useRef(null);

  /**
   * @type React.MutableRefObject<HTMLDivElement>
   */
  const popopRef = useRef(null);

  useEffect(() => {
    if (btnRef.current && popopRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      alert('stop');
      popopRef.current.style.top = `${rect.height + 25}px`;
      popopRef.current.style.left = `${rect.width * 0.5}px`;
    }
  }, [show]);

  return (
    <section
      data-name="HooksUseLayoutEffectExample"
      className="text-center"
      style={{ paddingBottom: 160 }}
    >
      <div className="position-relative d-inline-block">
        <button className="my-btn" ref={btnRef} onClick={() => setShow((prev) => !prev)}>
          Click me
        </button>
        {show && (
          <div ref={popopRef} className={style.message}>
            React useLayoutEffect.
          </div>
        )}
      </div>
    </section>
  );
};

export default HooksUseLayoutEffectExample;
