import { useState, useEffect } from "react";
import { RESTAURANTS_URL, CORSPROXY } from "../utils/constants";

const useRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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

  return {
    restaurants,
    filteredRestaurants,
    setRestaurants,
    setFilteredRestaurants,
  };
};

export default useRestaurant;
