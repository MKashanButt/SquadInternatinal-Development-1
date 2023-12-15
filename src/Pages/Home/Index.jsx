import React from "react";

import loader from "./components/loader";

const Home = () => {
  return (
    <>
      {Object.values(loader).map((Component, index) => (
        <Component key={index} />
      ))}
    </>
  );
};

export default Home;
