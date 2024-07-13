import launch from "../assets/icons/launch.svg";
import response from "../assets/icons/response.svg";
import increase from "../assets/icons/increase.svg";
import control from "../assets/icons/control.svg";

import restaurant from "../assets/images/restaurant.png";
import groceryStore from "../assets/images/groceryStore.png";
import reatilStore from "../assets/images/retailStore.png";

export const exploreData = [
  {
    imgURL: launch,
    title: "Launch your store in 3 mins",
    content:
      "Easily launch your online store without coding and saving time. Just choose a domain, add products, and start selling. It's that simple!",
  },
  {
    imgURL: response,
    title: "Faster response time",
    content:
      "Quickly respond to customer queries and orders through WhatsApp, boosting customer satisfaction and loyalty.",
  },
  {
    imgURL: increase,
    title: "Increased visibility",
    content:
      "Expand your reach beyond physical locations with an online storefront that’s accessible 24/7.",
  },
  {
    imgURL: control,
    title: "Ultimate control over your storefront",
    content:
      "You can set your own opening hours, define delivery zones and charges, select payment methods and handle offers effortlessly.",
  },
];

export const customerResults = {
  orders: 124,
  deliveries: 85,
  totalCustomes: "10,456",
};

export const templateDetails = [
  {
    imgURL: restaurant,
    title: "Restaurants & Food Businesses",
    content:
      "Build an online store showcasing dishes with eye-catching images & easily update prices with our templates.",
    url: "#", // change the url to the page of the template
  },
  {
    imgURL: groceryStore,
    title: "Grocery Store",
    content:
      "Get your grocery store online with a user-friendly design that enhances your customers' shopping experience.",
    url: "#", // change the url to the page of the template
  },
  {
    imgURL: restaurant,
    title: "Fashion Store",
    content:
      "Create a stunning showcase for your latest collections with our stylish templates and user-friendly interface.",
    url: "#", // change the url to the page of the template
  },
];

export const proPlanFeatures = {
  available: [
    "Unlimited orders",
    "Unlimited products listing",
    "Unlimited offer creation",
    "Monthly 2 hrs Marketing support",
    "Premium customer care",
    "Custom domain",
  ],
  notAvailable: [],
};
export const freePlanFeatures = {
  available: [
    "Unlimited orders",
    "Unlimited products listing",
    "Unlimited offer creation",
  ],
  notAvailable: [
    "Monthly 2 hrs Marketing support",
    "Premium customer care",
    "Custom domain",
  ],
};
