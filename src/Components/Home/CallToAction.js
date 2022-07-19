import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="call-to-action-container">
        <div className="call-to-action-header">
          <h4>Ready to view the best of the best?</h4>
          <Link to="/likes">View STARs</Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
