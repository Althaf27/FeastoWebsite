import launch from "../assets/icons/launch.svg";
import response from "../assets/icons/response.svg";
import increase from "../assets/icons/increase.svg";
import control from "../assets/icons/control.svg";

import restaurant from "../assets/images/restaurant.png";
import groceryStore from "../assets/images/groceryStore.png";
import reatilStore from "../assets/images/retailStore.png";

/**
 * @file This file contains the data needed for the components
 */

/**
 * @typedef {object} exploreDataObject
 * @property {object} imgURL
 * @property {string} title
 * @property {string} content
 */

/**
 * @type {exploreDataObject[]}
 */
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

/**
 * @typedef CustomerResult - stats about total number of customers
 * @property {number} orders
 * @property {number} deliveries
 * @property {string} totalCustomers
 */

/**
 * @type {CustomerResult}
 */
export const customerResults = {
  orders: 124,
  deliveries: 85,
  totalCustomers: "10,456",
};

/**
 * @typedef templateDetail - Details of the templates
 * @property {object} imgURL
 * @property {string} title
 * @property {string} content
 * @property {string} url - url of the template page
 */

/**
 * @type {templateDetail[]}
 */
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

/**
 * @typedef plan - Both the available and unavailable features included in plans
 * @property {Array} available - available featrues
 * @property {Array} notAvailable - unavailable features
 */

/**
 * @type {plan} proPlanFeatures
 */
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

/**
 * @type {plan} freePlanFeatures
 */
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

/**
 * @typedef faq - store the question and answers for frequently ask questions
 * @property {string} question
 * @property {string} answer
 */

/**
 * @type {faq[]} faqData
 */
export const faqData = [
  {
    question: "How can FEASTO help me get my shop online?",
    answer:
      "If you’re thinking about selling a product online, all you’ll need to do is visit our website, sign up, and follow our easy step-by-step guide. Once you've done these steps, your shop is ready to go online! You can edit your products anytime, add new ones, or update details, then publish your changes instantly.",
  },
  {
    question: "How secure is the FEASTO Ecommerce Website Builder?",
    answer:
      "We implement industry-standard security measures, including SSL encryption, secure payment gateways, and regular system updates, to ensure the protection of your online store and customer data.",
  },
  {
    question: "Can I connect FEASTO with other tools and services?",
    answer:
      "Yes, FEASTO allows you to integrate with popular tools and services to enhance your online store. Connect seamlessly with email marketing platforms, analytics tools, and more to optimize your e-commerce experience.",
  },
  {
    question: "To what extent can I customize the pre-designed template?",
    answer:
      "You can personalize the pre-designed template by adjusting the theme colors and layouts to match your store’s branding and style preferences.",
  },
  {
    question: "What kind of payment methods does Feasto support?",
    answer:
      "Currently, FEASTO supports cash payments and bank deposits only. However, if you need other payment methods, we’ll add them at minimal cost based on what you prefer.",
  },
  {
    question: "Do you offer a free trial for FEASTO?",
    answer:
      "Feasto simplifies creating a stunning, professional web store with its user-friendly templates and quick setup. Our powerful features ensure a seamless experience.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Absolutely! You can cancel your subscription at any time directly from your account settings. If you need assistance, please contact our customer support team at Hai@feasto.io.",
  },
];

/**
 * @typedef pageLinks
 * @property {string} title
 * @property {string} link - url of the pages provided in the footer section
 */

/**
 * @typedef dataFooter
 * @property {pageLinks[]} company
 * @property {pageLinks[]} template
 * @property {pageLinks[]} resources
 * @property {pageLinks[]} features
 */

/**
 * @type {dataFooter}
 */
export const dataForFooter = {
  company: [
    {
      title: "About us",
      link: "/",
    },
    {
      title: "Contact us",
      link: "/",
    },
    {
      title: "Careers",
      link: "/",
    },
    {
      title: "Privacy policy",
      link: "/",
    },
    {
      title: "Terms & service",
      link: "/",
    },
  ],
  templates: [
    {
      title: "Restaurants & Food Stalls",
      link: "/",
    },
    {
      title: "Retail stores",
      link: "/",
    },
    {
      title: "Fashion stores",
      link: "/",
    },
  ],
  resources: [
    {
      title: "Blogs",
      link: "/",
    },
    {
      title: "Knowledge base",
      link: "/",
    },
    {
      title: "Help center",
      link: "/",
    },
  ],

  features: [
    {
      title: "WhatsApp order management",
      link: "/",
    },
    {
      title: "Digital storefront",
      link: "/",
    },
    {
      title: "Insightful analytics",
      link: "/",
    },
    {
      title: "Effortless offer management",
      link: "/",
    },
  ],
};
