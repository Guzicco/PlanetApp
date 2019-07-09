import React from "react";
// import "./PlanetList.scss";

const Planet = ({ name, isLoading }) => {
  if (isLoading) {
    return (
      <div className="planet">
        <h1> Loading Data...</h1>
      </div>
    );
  }

  return <div>hi</div>;
};

export default Planet;
