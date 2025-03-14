import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videooutput.css";

const VideoOutput = () => {
    const [videoUrl, setVideoUrl] = useState(null); // Define video URL

    return (
      <div className="video-output-container">
        <h1>Video Output</h1>
        <div className="video-container">
            <ReactPlayer 
                url={videoUrl||"/videos/encrypted_video.mp4"}
                controls 
                width="100%"
                height="550px"
            />
        </div>
      </div>
    );
};

export default VideoOutput;

  