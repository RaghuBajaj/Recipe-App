import Box from "./Box";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [item, setItem] = useState("");
  const [mealItem, setMealItem] = useState([]);
  const search = async (items) => {
    try {
      const url = `https://themealdb.com/api/json/v1/1/search.php?s=${items}`;
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      if (data.meals) {
        const menuItem = await data.meals.map((ite) => {
          return {
            icon: ite.strMealThumb,
            title: ite.strMeal,
            category: ite.strCategory,
            area: ite.strArea,
            tags: ite.strTags,
            videoLink: ite.strYoutube,
            instructions: ite.strInstructions,
          };
        });
        setMealItem(menuItem);
        // console.log(menuItem);
      } else {
        setMealItem([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  function handleChange(e) {
    setItem(e.target.value);
  }
  function handleSearch() {
    search(item);
  }

  useEffect(() => {
    search("");
  }, []);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search for recipe..."
          onChange={handleChange}
          className="input"
        ></input>
        <button onClick={handleSearch} className="btn">
          Search
        </button>
      </div>

      <div className="search-item1">
        {mealItem.length > 0 ? (
          mealItem.map((dish, index) => {
            return (
              <div key={index} className="box">
                <Box dish={dish} />
              </div>
            );
          })
        ) : (
          <p className="p">Nothing To Show</p>
        )}
      </div>
    </>
  );
}

export default Home;
