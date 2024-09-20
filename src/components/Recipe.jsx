import "./Recipe.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Dish from "./Dish";
import React, { useEffect, useState } from "react";
import { pagesContext } from "../context/context";

function Recipe() {
  const [pages, setPages] = useState("home");
  const [select, setSelect] = useState([]);
  useEffect(() => {}, []);
  return (
    <pagesContext.Provider value={{ pages, setPages, select, setSelect }}>
      <div className="full1">
        <Navbar />
        <div className="content">
          {pages === "home" && <Home />}
          {pages === "dish" && <Dish itm={select} />}
        </div>
      </div>
    </pagesContext.Provider>
  );
}

export default Recipe;
