import "./global.css";

import React, { lazy, Suspense } from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RoutesProvider } from "./context/RoutesContext";
import { ModalProvider } from "./context/ModalContext";

import Loading from "./components/Loading/Loading";

const App = lazy(() => import("./App"));
const Content = lazy(() => import("./components/content/Content"));
const Choose = lazy(() => import("./components/choose/Choose"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",

        element: (
          <Suspense fallback={<Loading />}>
            <Choose />
          </Suspense>
        ),
      },
      {
        path: "/home/:id",

        element: (
          <Suspense fallback={<Loading />}>
            <Content />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <RoutesProvider>
      <RouterProvider router={router} />
    </RoutesProvider>
  </ModalProvider>
);
