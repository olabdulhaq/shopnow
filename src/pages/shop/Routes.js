import React from "react";
const LazyShopCollection = React.lazy(() => import("./shopCollection"));
const LazyShopHome = React.lazy(() => import("./shopHome"));
const LazyShopProduct = React.lazy(()=> import("./shopProduct"))

const base = "/shop";
const routes = [
  {
    path: base,
    component: <LazyShopHome />,
  },
  {
    path: base + "/collections/:id",
    component: <LazyShopCollection />,
  },
  {
    path: base + "/collections/:id/product/:id",
    component: <LazyShopProduct />,
  },
];

export default routes;
