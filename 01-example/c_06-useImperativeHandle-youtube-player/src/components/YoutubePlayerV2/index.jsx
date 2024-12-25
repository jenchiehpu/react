/* eslint-disable react/prefer-exact-props */
/* eslint-disable no-plusplus */
import React, { useRef, useState, useEffect } from 'react';
import YouTubePlayer from 'youtube-player';

let elementIdx = 0;

type YoutubePlayerProps = {
  videoId: string,
  onStateChange?: (state: number) => void,
};

// TODO
const YoutubePlayerComponent = React.forwardRef((props: YoutubePlayerProps, ref) => {
  const { videoId, onStateChange } = props;

  const onStateChangeRef = useRef();
  onStateChangeRef.current = onStateChange;

  const playerRef = useRef(null);
  const [elementId] = useState(() => `youtube-player-${elementIdx++}`);

  //* // TODO start
  React.useImperativeHandle(
    ref,
    () => ({
      playVideo() {
        playerRef.current.playVideo();
      },
      stopVideo() {
        playerRef.current.stopVideo();
      },
    }),
    [],
  );
  // TODO end */

  useEffect(() => {
    const player = YouTubePlayer(elementId);
    playerRef.current = player;
    player.on('stateChange', (event) => {
      console.log('stateChange', event.data);
      onStateChangeRef.current?.(event.data);
    });
    return () => {
      playerRef.current.destroy();
    };
  }, []); // eslint-disable-line

  useEffect(() => {
    playerRef.current.loadVideoById(videoId);
  }, [videoId]);

  /* 這裡有個小 bug, 要多一層 div 包起來 */
  /* https://stackoverflow.com/questions/54880669/react-domexception-failed-to-execute-removechild-on-node-the-node-to-be-re */
  return (
    <div className="its-empty-but-i-cant-remove-it">
      <div id={elementId} />
    </div>
  );
});

export default YoutubePlayerComponent;
