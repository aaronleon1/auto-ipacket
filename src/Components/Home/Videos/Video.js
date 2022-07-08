import React from "react";

const Video = ({ image, title }) => {
  return (
    <div className="video">
      <h2>{title}</h2>
      <div className="video-thumbnail-container">
        <img src={image} alt="hero video" />
        <div className="play-button-container">
          <span className="material-icons">
            <span class="material-icons md-60">play_circle</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Video;
