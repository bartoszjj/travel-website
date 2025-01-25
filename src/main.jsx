import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import NotificationProvider from "./components/Notification/NotificationProvider";
import Destination from "./components/Destination/Destination";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      { path: ":destinationId", element: <Destination /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotificationProvider>
      <RouterProvider router={router} />
    </NotificationProvider>
  </StrictMode>
);
