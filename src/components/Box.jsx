import "./Box.css";
import { useContext, useEffect } from "react";
import { pagesContext } from "../context/context";

function Box({ dish }) {
  const value = useContext(pagesContext);
  function handleClick() {
    value.setSelect(dish);
    value.setPages("dish");
  }
  useEffect(() => {}, []);
  return (
    <div className="div" onClick={handleClick}>
      <img src={dish.icon} className="icon" alt="loading.."></img>
      <p className="p">{dish.title}</p>
      <p className="p1">{dish.category}</p>
      <p className="p2">{dish.area}</p>
    </div>
  );
}

export default Box;
