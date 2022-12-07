import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PreloadComments, {
  loader as CommentsLoader,
} from "./Components/PreloadComments";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Omos from "./Pages/Omos";
import Users from "./Pages/Users";
import Comments from "./Pages/Comments";
//funky syntax when using alias and named exports
import { Comments as CommentData } from "./Components/Comments";
import UserDetails from "./Pages/UserDetails";
import ErrorElement from "./Components/ErrorElement";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorElement />}>
      <Route index element={<Users />} />
      <Route path="/user/:id" element={<UserDetails />} />
      <Route path="/comments" element={<Comments />}>
        <Route index element={<CommentData />} />
      </Route>
      <Route
        path="/preload/comments"
        loader={CommentsLoader}
        element={<PreloadComments />}
      />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
