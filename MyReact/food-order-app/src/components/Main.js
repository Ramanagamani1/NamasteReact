import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANTS_URL, CORSPROXY } from "../utils/constants";
import { Link } from "react-router-dom";

const Main = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(CORSPROXY + RESTAURANTS_URL);
      const jsondata = await response.json();

      const toprestaurants = jsondata?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants !==
          undefined
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      /*const restaurants =
        jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;*/

      setRestaurants(toprestaurants);
      setFilteredRestaurants(toprestaurants);
    }
    fetchData();
  }, []);

  const handleFilterClick = () => {
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setRestaurants(filteredRestaurants);
  };

  const handleSearchClick = () => {
    const filteredRestaurants = restaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="main">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterClick}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurants/${restaurant.info.id}`}>
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Main;
