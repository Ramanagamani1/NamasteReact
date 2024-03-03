import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CORSPROXY, MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
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

  if (!resMenu) {
    return <Shimmer />;
  }

  return (
    <>
      {resMenu.map((category, index) => (
        <RestaurantMenuCategory
          key={index}
          menuList={category?.card?.card?.itemCards}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;
