import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";
import Albums from "./albums/Albums";
import Photos from "./photos/Photos";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import Wishlist from "./wishlist/Wishlist";

const MainLayout = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Posts />,
        },
        {
          path: "comments",
          element: <Comments />,
        },
        {
          path: "albums",
          element: <Albums />,
        },
        {
          path: "photos",
          element: <Photos />,
        },
        {
          path: "todos",
          element: <Todos />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);

  return routes;
};

export default React.memo(MainLayout);
