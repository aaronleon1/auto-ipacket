import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import StartupContext from "../Components/context";
import StartUpCard from "../Components/StartUpCard";

const Liked = () => {
  const { likes, setLikes } = useContext(StartupContext);
  let nonFilteredLikes = [...likes];
  let sortParams = [...likes];
  // let maxTime = [...likes];
  //Grab a startup idea. This idea will change when loaded on the liked screen - could bbe due to a number of reasons, but I could avoid this if the ThisforThat API had a number of results parameter.
  useEffect(() => {
    let startups = localStorage.getItem("likedStartups");
    startups = JSON.parse(startups);
    setLikes(startups);
  }, []);

  //Purge likes
  const handleReject = () => {
    let tempLikes = [...likes];
    tempLikes = [];
    setLikes(tempLikes);
    localStorage.setItem("likedStartups", JSON.stringify(tempLikes));
  };

  //This could be held in state as opposed to changing the variable.
  const handleSort = (event) => {
    if (event.target.value === "Lowest Cost") {
      sortParams.sort((a, b) => {
        return a.cost - b.cost;
      });
      setLikes(sortParams);
    }
    if (event.target.value === "Highest Cost") {
      sortParams.sort((a, b) => {
        return b.cost - a.cost;
      });
      setLikes(sortParams);
    }
    if (event.target.value === "Nearest Date") {
      sortParams.sort((a, b) => {
        return a.time - b.time;
      });
      setLikes(sortParams);
    }
    if (event.target.value === "Farthest Date") {
      sortParams.sort((a, b) => {
        return b.time - a.time;
      });
      setLikes(sortParams);
    }
  };
  //Leftover Time range logic to give an idea.
  // const handleTimeChange = (event) => {
  //   console.log(event.target.value);

  //   if (typeof sortParams == [] || sortParams.length < 1) {
  //     setLikes(handleClear());
  //   } else {
  //     sortParams = maxTime.filter((like) => {
  //       return like.time <= event.target.value;
  //     });
  //     setLikes(sortParams);
  //   }
  // };
  //Leftover cost range logic to give an idea.
  // const handleCostChange = (event) => {
  //   sortParams.filter((like) => {
  //     return like.cost <= event.target.value;
  //   });
  // };

  return (
    <div className="liked">
      <div className="liked-container">
        <h1 className="liked-header">The Best of the Best.</h1>
        <h2 className="liked-subheader">
          Give everyone a call, or filter through and think it over.
        </h2>
        <form className="liked-sort">
          <select
            onChange={handleSort}
            name="sortBy"
            id="sortBy"
            className="sort-by-select"
          >
            <option value="Sort By" disabled selected>
              Sort By
            </option>
            <option value="Lowest Cost">Lowest Cost</option>
            <option value="Highest Cost">Highest Cost</option>
            <option value="Nearest Date">Nearest Date</option>
            <option value="Farthest Date">Farthest Date</option>
          </select>
          {/* Leftover time range logic to give an idea. */}
          {/* <div>
            <label className="time-label">Time Range</label>
            <select
              className="time-range"
              id="sortByTime"
              name="sortByTime"
              onChange={handleTimeChange}
            >
              <option value="" disabled selected placeholder=""></option>
              <option value={1}>1</option>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            <button onClick={() => handleClear()}>Clear</button>
          </div> */}
          {/* Leftover cost range logic to give an idea. */}
          {/* <div>
            <label className="cost-label">Cost Range</label>
            <input
              type="number"
              placeholder="0"
              className="cost-range"
              onChange={(e) => handleCostChange(e)}
              value={maxCost}
            />
          </div> */}

          <button className="reject-all-button" onClick={() => handleReject()}>
            Reject All
          </button>
        </form>

        <div className="liked-startups-container">
          {sortParams.length >= 1 ? (
            sortParams.map((liked) => {
              return (
                <StartUpCard
                  key={liked.id}
                  id={liked.id}
                  image={liked.image}
                  name={liked.name}
                  phoneNumber={liked.phoneNumber}
                  email={liked.email}
                  time={liked.time}
                  cost={liked.cost}
                />
              );
            })
          ) : (
            <div className="no-likes">
              <h3 className="no-likes-header">
                You have not added any STARs to your likes.
              </h3>
              <span className="no-likes-home">
                Head back <Link to="/">Home</Link> and add a STAR to your likes.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Liked;
