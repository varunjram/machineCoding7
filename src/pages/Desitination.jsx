import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import DisplayCard from "../components/DisplayCard";

const Destination = () => {
  const { destinationName } = useParams();
  const { SelectedContinent, SelectedCountry, SelectedDestination, dispatch } = useAppContext();
  console.log("SelectedCountry: ", SelectedCountry);

  const {
    id,
    name,
    description,
    image,
    ratings,
    reviews,
    location,
    openingHours,
    ticketPrice,
    website,
  } = SelectedDestination || {};

  console.log("SelectedContinent?.countries", SelectedContinent?.countries);
  useEffect(() => {
    dispatch({
      type: "UpdateState",
      payload: {
        key: "SelectedDestination",
        value: SelectedCountry?.destinations.find(
          (destination) => destination?.name === destinationName
        ),
      },
    });
  }, [destinationName]);

  return (
    <div className="text-center">
      <h2 className="m-1 ">{name}</h2>
      <div className="flex">
        <div className="w-10rem">
          <img
            src={image}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div>
          <p>id:{id}</p>
          <p>name:{name}</p>
          <p>description:{description}</p>
          <p>image:{image}</p>
          <p>ratings:{ratings}</p>
          <p>reviews:{reviews}</p>
          <p>location:{location}</p>
          <p>openingHours:{openingHours}</p>
          <p>ticketPrice:{ticketPrice}</p>
          <p>website:{website}</p>
        </div>
      </div>
    </div>
  );
};

export default Destination;
