import React from "react";
import ProcessCard from "./ProcessCard";

const Process = () => {
  return (
    <section className="process">
      <h3>Lets get to the fun part - here is when you come in.</h3>
      <div className="process-cards">
        <ProcessCard
          icon="visibility"
          title="View"
          description="Our best of the best is below for you to view."
        />
        <ProcessCard
          icon="receipt_long"
          title="Vet"
          description="Detailed descriptions provided to allow for the best decision possible."
        />
        <ProcessCard
          icon="favorite_border"
          title="Decide"
          description="Select your favorite STARs and save them for easy contact."
        />
      </div>
    </section>
  );
};

export default Process;
