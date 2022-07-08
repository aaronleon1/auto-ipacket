import React from "react";
import Video from "./Video";

const Videos = () => {
  return (
    <section className="video-section">
      <Video image="/images/how-it-works.jpg" title="Who We Are" />
      <Video image="/images/who-we-are.jpg" title="How We Work" />
    </section>
  );
};

export default Videos;
