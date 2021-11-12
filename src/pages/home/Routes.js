import React from "react";
const LazyFragrance = React.lazy(() => import("./Fragrance"));

const base = "/en";
const routes = [
  {
    path: base + "/fragrance/:id",
    component: <LazyFragrance />,
  },
];

export default routes;
