import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../context/AppContext";
import DisplayCard from "../components/DisplayCard";

const Continents = () => {
  const { continents } = useAppContext();

  return (
    <div className="text-center">
      <h1 className="m-1">Welcome to Trip Advisor</h1>
      <h2 className="m-1 text-blue-600">Top Continents for your next holiday</h2>
      <div className="flex   justify-content-around  align-content-center  m-auto">
        {continents.map((ele, i) => (
          <DisplayCard data={ele} route="continent" />
        ))}
      </div>
    </div>
  );
};

export default Continents;
