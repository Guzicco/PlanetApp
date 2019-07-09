require("babel-polyfill");
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PlanetList from "../PlanetList/PlanetList";
import Search from "../SideBar/Search/Search";
import Pagination from "../Pagination/Pagination";
import Axios from "axios";

import "./Root.scss";

const Root = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(10);
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlanets = (page, search) => {
    setIsLoading(true);
    Axios.get(`https://swapi.co/api/planets/?search=${search}&page=${page}`)
      .then(res => res.data)
      .then(data => {
        setPlanets(data.results);
        setCount(data.count);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPlanets(page, search);
  }, [page, search]);

  return (
    <div className="root">
      <header className="headline">
        <h1> StarWars Planets</h1>
      </header>
      <section className="main-content-container">
        <div className="sidebar">
          <Search setSearch={setSearch} />
        </div>
        <div className="planets-container">
          <Pagination count={count} setPage={setPage} page={page} />
          <PlanetList planets={planets} isLoading={isLoading} />
          <Pagination count={count} setPage={setPage} page={page} />
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
