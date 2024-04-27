import { CORSPROXY, MENU_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resMenu, setRestMenu] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      const response = await fetch(MENU_URL + resId);
      const jsondata = await response.json();
      const RestaurantType =
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
      const menu = jsondata?.data?.cards
        .find((x) => x?.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (item) => item?.card?.card["@type"] === RestaurantType
        );
      setRestMenu(menu);
    }
    fetchMenu();
  }, []);

  return { resMenu };
};

export default useRestaurantMenu;
