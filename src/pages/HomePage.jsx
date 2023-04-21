import React from "react";
import HeaderComponent from "./HeaderComponent";
import "./style.css";
import ProjectHistory from "./ProjectHistory";
import EducationHistory from "./EducationHistory";
import TechStack from "./TechStack";
import WorkHistory from "./WorkHistory";

export default function HomePage() {
  return (
    <div>
      <HeaderComponent />

      <ProjectHistory />
      <TechStack />
      <WorkHistory />
      <EducationHistory />
    </div>
  );
}
