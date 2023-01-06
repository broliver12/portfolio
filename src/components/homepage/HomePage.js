import React, { useState, useEffect } from "react";
import "./HomePage.css";
import IntroSection from "./intro/IntroSection";
import AboutSection from "./about/AboutSection";
import WorkSection from "./work/WorkSection";
import ProjectsSection from "./projects/ProjectsSection";
import ContactSection from "./contact/ContactSection";

function HomePage() {
  return (
    <div>
      <div className="homeScreenContainer">
        <IntroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default HomePage;
