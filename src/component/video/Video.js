import React from 'react';
import ReactPlayer from 'react-player';

function Video() {
  
  const interneVid = 'assets/videos/video.mp4';
  return (
    <div>
      <ReactPlayer 
      url={interneVid} 
      controls
      playing
      muted
      />
  
      
    </div>
   
  );
}

export default Video;