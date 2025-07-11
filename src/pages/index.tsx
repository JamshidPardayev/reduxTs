import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
const Layout = lazy(() => import("./layout/Layout"));
const Posts = lazy(() => import("./posts/Posts"));
const Comments = lazy(() => import("./comments/Comments"));
const Albums = lazy(() => import("./albums/Albums"));
const Todos = lazy(() => import("./todos/Todos"));
const Users = lazy(() => import("./users/Users"));
const Wishlist = lazy(() => import("./wishlist/Wishlist"));

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
