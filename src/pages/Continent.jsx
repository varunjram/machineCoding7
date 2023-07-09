import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import DisplayCard from "../components/DisplayCard";

const Continent = () => {
  const { continentName } = useParams();
  const { continents, SelectedContinent, dispatch } = useAppContext();
  console.log("SelectedContinent: ", SelectedContinent);

  const countries = SelectedContinent?.countries;

  useEffect(() => {
    dispatch({
      type: "UpdateState",
      payload: {
        key: "SelectedContinent",
        value: continents?.find((continent) => continent?.name === continentName),
      },
    });
  }, [continentName]);

  return (
    <div className="text-center">
      <h2 className="m-1 ">Top Countries in {continentName} for your next holiday</h2>
      <div className="flex   justify-content-around  align-content-center  m-auto">
        {countries?.map((ele, i) => (
          <DisplayCard
            data={ele}
            route="country"
          />
        ))}
      </div>
    </div>
  );
};

export default Continent;
