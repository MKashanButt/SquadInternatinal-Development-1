import React from "react";

import loader from "./components/loader";

const ContactUs = () => {
  return (
    <>
      {Object.values(loader).map((Component, index) => (
        <Component key={index} />
      ))}
    </>
  );
};

export default ContactUs;
