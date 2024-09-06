import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home, Roms, Builds, About, Upload } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/roms",
    element: <Roms />,
  },
  {
    path: "/builds/:id",
    element: <Builds />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </StrictMode>,
);
