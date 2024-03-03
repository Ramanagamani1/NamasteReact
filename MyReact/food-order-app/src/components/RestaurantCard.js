import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, sla, avgRating, cloudinaryImageId, costForTwo } =
    restaurant.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="food"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Rating: {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>Delivery Time:{sla?.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
