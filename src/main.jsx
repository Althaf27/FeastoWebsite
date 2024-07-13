import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // TODO : Declare other paths here for future pages like features,resources
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
