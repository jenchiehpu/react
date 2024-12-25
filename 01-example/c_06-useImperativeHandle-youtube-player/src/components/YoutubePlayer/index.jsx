/* eslint-disable no-plusplus */
import React, { useRef, useState, useEffect } from 'react';
import YouTubePlayer from 'youtube-player';

let elementIdx = 0;

type YoutubePlayerProps = {
  videoId: string,
  onStateChange?: (state: number) => void,
};
const YoutubePlayerComponent: React.FC<YoutubePlayerProps> = (props) => {
  const { videoId, onStateChange } = props;

  const onStateChangeRef = useRef();
  onStateChangeRef.current = onStateChange;

  const playerRef = useRef(null);
  const [elementId] = useState(() => `youtube-player-${elementIdx++}`);

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
};

export default YoutubePlayerComponent;
