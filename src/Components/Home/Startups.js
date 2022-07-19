import React, { useState, useEffect } from "react";
import StartUpCard from "../StartUpCard";

const Startups = () => {
  const [people, setPeople] = useState(null);
  // Produce a random cost for completion
  function getRandomCost() {
    return ((Math.floor(Math.random() * 36.5) + 6.5) / 10).toFixed(2);
  }
  //Produce a random time to completion
  function getRandomTime() {
    return Math.floor(Math.random() * 36) + 6;
  }
  // Have tried multiple ways to call ThisforThat API in here to persist the startup idea, but these ways have caused multiple rerenders/would not persist. Would love to talk this part over.
  //Request 20 startups. If this were dynamic, request would be held in state and inserted through template string. Same with nationality.
  useEffect(() => {
    const getPeople = async () => {
      await fetch("https://randomuser.me/api/?results=20&nat=us", {
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          setPeople(data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getPeople();
  }, []);

  return (
    <section className="startups">
      {people
        ? people.results.map((person, index) => {
            return (
              <StartUpCard
                key={person.login.uuid + index}
                id={person.login.uuid + index}
                image={person.picture.large}
                name={person.name}
                phoneNumber={person.cell}
                email={person.email}
                cost={getRandomCost()}
                time={getRandomTime()}
              />
            );
          })
        : null}
    </section>
  );
};

export default Startups;
