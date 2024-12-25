/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useCallback } from 'react';
import {
  // Link,
  useParams,
  useNavigate,
} from 'react-router-dom';
import './Overlay.scss';

const Overlay = () => {
  // TODO
  const params = useParams();
  const navigate = useNavigate();
  // 

  const atCloseClick = useCallback(() => {
    navigate('/video');
  }, [navigate]);

  const atContainerClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        navigate('/video');
      }
    },
    [navigate],
  );

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="video-container" onClick={atContainerClick}>
          <iframe
            src={`http://www.youtube.com/embed/${params.id}`}
            title="vid"
            frameBorder="0"
            width="720"
            height="480"
          />
        </div>
        {/* <Link to="/video" className="closer">×</Link> */}
        <button onClick={atCloseClick} className="closer">
          x
        </button>
      </div>
    </div>
  );
};

export default Overlay;
