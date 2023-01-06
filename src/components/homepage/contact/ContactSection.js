import React from "react";
import "./ContactSection.css";
import IconGitHub from "../../../images/icon/github";
import IconLinkedIn from "../../../images/icon/linkedin";

function ContactSection() {
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
    <div id="contact" className="contactSectionContainer">
      <div className="contactTitleHeader">Want to get in touch?</div>
      <div className="contactParagraph">
        Even though I'm not currently looking for a new position, my inbox is
        always open!
      </div>

    <div className="wrap"><a href="mailto:oliver.strasz@gmail.com" rel="noopener noreferrer" target="_blank" className="btn--outline sendAnEmailButton">Send an email</a></div>
      <div className="bottomSocialsContainer">
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
      </div>
    </div>
  );
}

export default ContactSection;
