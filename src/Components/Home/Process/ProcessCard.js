import React from "react";

const ProcessCard = ({ icon, title, description }) => {
  return (
    <div className="process-card">
      <div className="process-icon">
        <span className="material-icons md-80">{icon}</span>
      </div>
      <div className="process-text">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default ProcessCard;
