import React, { useState, useEffect, useContext } from "react";
import StartupContext from "./context";

const StartUpCard = ({ image, name, phoneNumber, email, id, cost, time }) => {
  const { likes, setLikes } = useContext(StartupContext);
  const [idea, setIdea] = useState(null);

  const startup = {
    image: image,
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    id: id,
    cost: cost,
    time: time,
    idea: idea,
  };

  const addToLikes = (startup) => {
    setLikes((prevState) => [...prevState, startup]);
    localStorage.setItem("likedStartups", JSON.stringify([...likes, startup]));
  };

  const removeFromLikes = (startup) => {
    let tempLikes = [...likes];
    tempLikes = tempLikes.filter((like) => like.id !== startup.id);
    if (tempLikes.length === 1) {
      setLikes([]);
      localStorage.setItem("likedStartups", JSON.stringify(tempLikes));
    }

    setLikes(tempLikes);
    localStorage.setItem("likedStartups", JSON.stringify(tempLikes));
  };
  const handleLikes = (startup) => {
    if (likes.some((like) => like.id === startup.id)) {
      removeFromLikes(startup);
    } else {
      addToLikes(startup);
    }
  };
  //We are making the call here, as I tried a few ways to specify how many results I wanted from the API.
  //Finding a way to persist the idea.
  useEffect(() => {
    if (idea === null) {
      const getIdea = async () => {
        await fetch("http://itsthisforthat.com/api.php?json")
          .then((response) => response.json())
          .then((data) => {
            return !idea ? setIdea(data) : null;
          })
          .catch((err) => {
            console.error(err);
          });
      };
      getIdea();
    }
  }, []);

  return (
    <div className="startup-card">
      <div className="startup-image">
        <img src={image} alt={name} />
      </div>
      <span className="name">
        {name?.first} {name?.last}
      </span>
      <span className="phone">{phoneNumber}</span>
      <span className="email">{email}</span>
      <div className="startup-information-container">
        <span className="pitch">
          It's like a {idea?.this} for {idea?.that}!
        </span>
        <div className="startup-details">
          <div className="startup-time-container">
            <span className="startup-time">{time} Months</span>
            <span className="startup-time-text">Timeline</span>
          </div>
          <div className="startup-cost-container">
            <span className="startup-cost">{cost}M</span>
            <span className="startup-cost-text">Cost</span>
          </div>
        </div>

        <div className="decision">
          <button
            onClick={() => handleLikes(startup)}
            className={` ${
              likes.some((like) => like.id === startup.id) ? "reject" : "like"
            }`}
          >
            {likes.some((like) => like.id === startup.id) ? "Reject" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartUpCard;
