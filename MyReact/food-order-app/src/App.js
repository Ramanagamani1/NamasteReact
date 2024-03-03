import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default AppLayout;
