import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resMenu } = useRestaurantMenu(resId);

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
