import React, { Suspense } from "react";
import routes from "./Routes";
import Landing from "./Landing";
import { Routes, Route } from "react-router-dom";

export default function index() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route path={path} element={component} key={key} />
  ));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeComponents}
        <Route path="/" element={<Landing />} />
      </Routes>
    </Suspense>
  );
}
