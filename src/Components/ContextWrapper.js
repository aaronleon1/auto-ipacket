import React, { useState } from "react";
import StartupContext from "./context";
const ContextWrapper = ({ children }) => {
  //Liked startups need to be accessed by both pages.
  const [likes, setLikes] = useState([]);

  return (
    <StartupContext.Provider value={{ likes, setLikes }}>
      {children}
    </StartupContext.Provider>
  );
};

export default ContextWrapper;
