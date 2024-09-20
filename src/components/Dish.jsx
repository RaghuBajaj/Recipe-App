import { useEffect } from "react";
import "./Dish.css";

function Dish({ itm }) {
  useEffect(() => {
    // console.log(itm);
  }, []);
  return (
    <div className="full_dish">
      <div className="item_dish">
        <img src={itm.icon} className="img_dish" alt=""></img>
        <div className="info_dish">
          <p className="p1_dish">{itm.title}</p>
          <div className="div_dish">
            <p className="p_title_dish">Category :</p>
            <p className="p2_dish">" {itm.category} "</p>
          </div>
          <div className="div_dish">
            <p className="p_title_dish">Origin :</p>
            <p className="p3_dish">{itm.area}</p>
          </div>
          <div className="div_dish">
            <p className="p_title_dish">Recipe :</p>
            <button className="ytb_dish" href="{itm.videoLink}">
              Youtube
            </button>
          </div>
          <div className="div_dish">
            <p className="p_title_dish">Tags :</p>
            <p className="p4_dish">{itm.tags}</p>
          </div>

          <div className="buttons_dish">
            <button className="btn_dish btn1">ADD TO CART</button>
            <button className="btn_dish btn2">ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dish;
