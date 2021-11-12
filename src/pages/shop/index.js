import React, { Suspense } from "react";
import routes from "./Routes";
import { Routes, Route } from "react-router-dom";

export default function index() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>{routeComponents}</Routes>
    </Suspense>
  );
}
