import { useState, useEffect } from "react";
import { RESTAURANTS_URL, CORSPROXY } from "../utils/constants";

const useRestaurant = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(CORSPROXY + RESTAURANTS_URL);
        const jsondata = await response.json();

        console.log(jsondata);

        const bannerMenu =
          jsondata?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
            ?.info;

        const topRestaurants = jsondata?.data?.cards
          ?.map((x) => {
            return x?.card?.card;
          })
          ?.filter((x) => {
            return x["id"] === "top_brands_for_you";
          })
          ?.map((x) => {
            return x?.gridElements?.infoWithStyle?.restaurants;
          })?.[0];

        console.log(topRestaurants);

        const restaurants = jsondata?.data?.cards
          ?.map((x) => {
            return x?.card?.card;
          })
          ?.filter((x) => {
            return x["id"] === "restaurant_grid_listing";
          })
          ?.map((x) => {
            return x?.gridElements?.infoWithStyle?.restaurants;
          });

        setBannerData(bannerMenu);
        setTopRestaurants(topRestaurants);
        setRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
      }
    }
    fetchData();
  }, []);

  return {
    restaurants,
    filteredRestaurants,
    topRestaurants,
    bannerData,
    setRestaurants,
    setFilteredRestaurants,
    setTopRestaurants,
    isLoading,
  };
};

export default useRestaurant;
