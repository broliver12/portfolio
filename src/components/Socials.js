import React from "react";
import "./Socials.css";
import IconGitHub from "./../images/icon/github";
import IconLinkedIn from "./../images/icon/linkedin";

function Socials() {
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const socials = [
    {
      name: "github",
      icon: () => {
        return <IconGitHub />;
      },
      clickAction: () => openInNewTab("https://www.github.com/broliver12/"),
    },
    {
      name: "linkedin",
      icon: () => {
        return <IconLinkedIn />;
      },
      clickAction: () =>
        openInNewTab("https://www.linkedin.com/in/ostraszynski/"),
    },
  ];

  return (
    <div className="socialsWrapper">
      {socials.map((item) => {
        return (
          <div
            className="socialsIcon"
            alt={"Navigate to " + item.name}
            onClick={item.clickAction}
          >
            {item.icon()}
          </div>
        );
      })}
      <div className="socialsBottomIcon" />
    </div>
  );
}

export default Socials;
