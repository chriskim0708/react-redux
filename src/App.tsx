import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Posts from "./pages/posts/Posts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="posts" element={<Posts />} />
      <Route index element={<Navigate to="/posts" replace />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Outlet />
    </>
  );
}

export default App;
