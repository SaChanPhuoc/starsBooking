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
import PageAboutUs from "./user/page/aboutUs";
import PageDetails from "./user/page/details";
import PageBlog from "./user/page/blog";
import PageContact from "./user/page/contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<div></div>} />
        <Route path="/aboutUS" element={<PageAboutUs />} />
        <Route path="/details" element={<PageDetails />} />
        <Route path="/blog" element={<PageBlog />} />
        <Route path="/contact" element={<PageContact />} />
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
