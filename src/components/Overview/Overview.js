import React from "react";
import BubbleChart from "../BubbleChart/BubbleChart";
import Home from "../Home/Home";

const Overview = () => {
  // overview page or 2nd page and also imported bubblechart 
  return (
    <div className="overview">
      <BubbleChart />
      <Home />
    </div>
  );
};

export default Overview;