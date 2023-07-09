import React from "react";
import { Route, Routes } from "react-router-dom";
import Continents from "../pages/Continents";
import Continent from "../pages/Continent";
import Country from "../pages/Country";

export default function Routing() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Continents />}
        />
        <Route
          path="/continent/:continentName"
          element={<Continent />}
        />
        <Route
          path="/country/:countryName"
          element={<Country />}
        />
        <Route
          path="/destination/:destinationName"
          element={<Country />}
        />
      </Routes>
    </>
  );
}
