import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurant";

const Main = () => {
  const {
    restaurants,
    filteredRestaurants,
    setFilteredRestaurants,
    setRestaurants,
  } = useRestaurant();

  const [searchText, setSearchText] = useState("");

  console.log(restaurants);

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
    <div className="m-4">
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
