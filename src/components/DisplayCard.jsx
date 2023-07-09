import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayCard = ({ data, clickHandler, route }) => {
  const Navigation = useNavigate();

  const { name, image } = data || {};
  let path;
  if (route === "continent") {
    path = `/continent/${name}`;
  } else if (route === "country") {
    path = `/country/${name}`;
  } else if (route === "destination") {
    path = `/destination/${name}`;
  }
  return (
    <div
      className="w-18rem h-18rem col-4 border-1 border-round-lg border-transparent relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
      onClick={() => Navigation(path)}>
      <div className="text-white flex absolute bottom-0 mb-4">
        <i className="bi bi-geo-alt-fill mr-2"></i>
        <h4 className="m-0">{name}</h4>
      </div>
    </div>
  );
};

export default DisplayCard;
