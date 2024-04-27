export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const CORSPROXY = "https://proxy.cors.sh/";

export const RESTAURANTS_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.702126&lng=83.154487&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

export const MENU_URL =
  CORSPROXY +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.702126&lng=83.154487&restaurantId=";

export const LOCATION_URL =
  CORSPROXY + "https://www.swiggy.com/dapi/misc/place-autocomplete?input=";

export const ADDRESS_URL =
  CORSPROXY + "https://www.swiggy.com/dapi/misc/address-recommend?place_id=";
