import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { Home } from "./app/home";
import { routenames } from "./lib/constants";
import DashboardLayout from "./app/dashboard/layout";
import { DashboardHome } from "./app/dashboard";
import { QRcode } from "./app/dashboard/apps";
import ErrorPage from "./components/error-page";

const router = createBrowserRouter([
  {
    path: routenames.home,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: routenames.apps,
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: routenames.qrCodeApp,
        element: <QRcode />,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
