import React from "react";

const RestaurantMenuCategory = ({ menuList }) => {
  return (
    <div>
      {menuList.map((menu) => (
        <p>{menu?.card?.info?.name}</p>
      ))}
    </div>
  );
};

export default RestaurantMenuCategory;
