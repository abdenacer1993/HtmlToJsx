import React from 'react';
import ReactPlayer from 'react-player';

function Video() {
  const externeVid = 'https://www.youtube.com/watch?v=ac7KhViaVqc';
  
  return (
    <div>
      <ReactPlayer 
      url={externeVid} 
      controls
      playing
      muted
      />
  
      
    </div>
   
  );
}

export default Video;