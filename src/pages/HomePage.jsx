import React from "react";
import HeaderComponent from "./HeaderComponent";
import "./style.css";
import ProjectHistory from "./ProjectHistory";

export default function HomePage() {
  return (
    <div>
      <HeaderComponent />

      <ProjectHistory />
    </div>
  );
}
