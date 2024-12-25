import React from 'react';
import YoutubePlayer from './YoutubePlayer';
import YoutubePlayerV2 from './YoutubePlayerV2';

const Example1 = () => {
  const [show, setShow] = React.useState(true);

  const [videoState, setVideoState] = React.useState(-1);
  return (
    <section data-name="Example1">
      <button className="my-btn" onClick={() => setShow(!show)}>
        show
      </button>
      <h1>videoState:{videoState}</h1>
      {show && <YoutubePlayer videoId="Pi-MRZBP91I" onStateChange={setVideoState} />}
    </section>
  );
};

const Example2 = () => {
  const videoRef = React.useRef();
  return (
    <section data-name="Example2">
      <button className="my-btn" onClick={() => videoRef.current.playVideo()}>
        playVideo
      </button>
      <button className="my-btn" onClick={() => videoRef.current.stopVideo()}>
        stopVideo
      </button>
      <YoutubePlayerV2 videoId="Pi-MRZBP91I" ref={videoRef} />
    </section>
  );
};

const App = () => {
  return (
    <div className="app container">
      <Example1 />
      <Example2 />
    </div>
  );
};

export default App;
