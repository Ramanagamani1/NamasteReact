import { CDN_URL } from "../utils/constants";
import starIcon from "./../images/star-icon.png";

const RestaurantCard = ({ restaurant }) => {
  const {
    name,
    cuisines,
    sla: { slaString },
    avgRating,
    cloudinaryImageId,
    areaName,
  } = restaurant.info;

  console.log(restaurant);

  return (
    <div className="w-[330px] flex-shrink-0">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        className="w-[300px] h-[180px] object-cover rounded-3xl"
      />
      <div className="flex flex-col gap-1">
        <h3 className="mx-4 mt-2 text-lg font-bold text-black">{name}</h3>
        <div className="mx-4">
          <img src={starIcon} alt="star-rating-icon" className="inline mr-1" />
          <span className="mr-1 text-base font-medium">
            {avgRating} • {slaString}
          </span>
        </div>
        <div className="mx-4 text-gray-700">
          {cuisines.splice(0,3).join(", ")}
        </div>
        <div className="mx-4 text-gray-700">{areaName}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
