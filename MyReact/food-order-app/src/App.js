import React, { Suspense } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import AboutPage from "./pages/AboutPage";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const ContactPage = React.lazy(() => import("./pages/ContactPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ContactPage />
          </Suspense>
        ),
      },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

export default AppLayout;
