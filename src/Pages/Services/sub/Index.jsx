import React from "react";
import Marketing from "./Marketing/Index";
import DesignDevelopment from "./DesignDevelopment/Index";

const Index = ({ page }) => {
  switch (page) {
    case "marketing":
      return <Marketing />;
    case "design-and-development":
      return <DesignDevelopment />;
    default:
      return <></>;
  }
};

export default Index;
