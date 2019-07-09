import React from "react";
// import Planet from "../Planet/Planet";
import "./PlanetList.scss";

const PlanetList = ({ planets, isLoading }) => {
  if (isLoading) {
    return <div>Loading Data...</div>;
  }

  return (
    <div className="planet-list">
      {planets.map(planet => {
        return (
          <div key={planet.name} className="planet">
            <h1>{planet.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default PlanetList;
