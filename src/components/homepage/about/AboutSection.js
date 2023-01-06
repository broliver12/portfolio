import React from "react";
import "./AboutSection.css";
import "../../Button.css";

function AboutSection(props) {
  return (
    <div id="about">
      <div className="aboutSectionTitleBar">
        About Me
        <div className="aboutSectionTitleDecoration" />
      </div>
      <div className="aboutSectionContainer">
        <div className="aboutSectionText">
          <div className="aboutSectionBody">
            Hello! My name is Oliver, and I'm a friendly and enthusiastic
            software developer. I started programming during my first year of
            university; I quickly became obsessed with computers, and focused my
            studies on software & robotics. My interest in Front-End development
            originates from my love for Art, and has developed into a passion
            for how intuitive UI makes complicated apps easy to use.
          </div>
          <div className="aboutSectionBody">
            I joined Konrad Group because I saw an opportunity to work with
            world class clients, and join a team of truly awesome people. Four
            years later, I love the team and I'm still learning every sprint.
          </div>
          <div className="aboutSectionBody">
            Outside of programming, I spend most of my time walking my dog,
            Indigo! She needs a LOT of exercise. I also like to listen to live
            music, and when possible, I travel internationally to learn more
            about other people and cultures.
          </div>
        </div>
        <div className="profilePicture" onClick={() => {}} />
      </div>
    </div>
  );
}

export default AboutSection;
