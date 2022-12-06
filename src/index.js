import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Kontakt from "./Pages/Kontakt";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Omos from "./Pages/Omos";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetails";
import Test from "./Components/Test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Users />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/kontakt" element={<Kontakt />}>
        <Route index element={<Test />} />
      </Route>
      <Route path="/omos" element={<Omos />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
