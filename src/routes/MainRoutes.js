import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PrivacyPage from "../pages/PrivacyPage";

const routes = [
  { path: "/", component: HomePage },
  { path: "/privacy", component: PrivacyPage },
];
function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((c, i) => (
          <Route key={i} path={c.path} element={<c.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
