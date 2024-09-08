import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import AboutUs from "./user/about-us";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<div></div>} />
        <Route path="/aboutUS" element={<AboutUs />} />
      </Route>
    )
  );
  return (
    <>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </>
  );
}

export default App;
