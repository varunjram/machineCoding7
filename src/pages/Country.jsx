import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import DisplayCard from "../components/DisplayCard";

const Country = () => {
  const { countryName } = useParams();
  const { SelectedContinent, SelectedCountry, dispatch } = useAppContext();
  console.log("SelectedCountry: ", SelectedCountry);

  const destinations = SelectedCountry?.destinations;
  console.log("SelectedContinent?.countries", SelectedContinent?.countries);
  useEffect(() => {
    dispatch({
      type: "UpdateState",
      payload: {
        key: "SelectedCountry",
        value: SelectedContinent?.countries.find((country) => country?.name === countryName),
      },
    });
  }, [countryName]);

  return (
    <div className="text-center">
      <h2 className="m-1 ">Top Destinations in {countryName} for your next holiday</h2>
      <div className="flex   justify-content-around  align-content-center  m-auto">
        {destinations?.map((ele, i) => (
          <DisplayCard
            data={ele}
            route="destination"
          />
        ))}
      </div>
    </div>
  );
};

export default Country;
