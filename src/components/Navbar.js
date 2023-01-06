import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "./Socials.css";

import "./Button.css";
import pdf from '../images/img/resume.pdf';


function Navbar({...props}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const standardButtonText = [
    {
      title: "About",
      callback: () => {
        document.getElementById("about").scrollIntoView();
      },
    },
    {
      title: "Experience",
      callback: () => {
        document.getElementById("experience").scrollIntoView();
      },
    },
    {
      title: "Portfolio",
      callback: () => {
        document.getElementById("projects").scrollIntoView();
      },
    },
    {
      title: "Contact",
      callback: () => {
        document.getElementById("contact").scrollIntoView();
      },
    },
  ];

  // useEffect(() => {
  //   async function sl() {
  //     var lastScrollTop = 0;

  //     // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  //     window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
  //       var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //       if (st > lastScrollTop){
  //           // downscroll code
  //           setHideNavBar(true)
  //           lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  //       } else if(st < lastScrollTop){
  //           // upscroll code
  //           closeMobileMenu();
  //           setHideNavBar(false);
  //           lastScrollTop = st <= 0 ? 0 : st;
  //       }
  //     }, false);
  //   }
  //   sl();
  // }, []);

  const getStandardButton = (title, callback) => {
    return (
      <li className="nav-item">
        <div className="nav-links">
          <div
            className={click ? "innerItem" : "innerItem active"}
            onClick={() => {
              callback();
              closeMobileMenu();
            }}
          >
            {title}
          </div>
        </div>
      </li>
    );
  };

  return (
      (false) ? <div></div> :
      <nav className={click ? "navbar active" : "navbar"}>
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu();
            document.getElementById("home").scrollIntoView();
          }}
        >
          OS
        </Link>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {standardButtonText.map((item) =>
              getStandardButton(item.title, item.callback)
            )}
            <li className="nav-item">
              <div
                className="btn--outline innerItem resumeButton"
                onClick={() => {
                  closeMobileMenu();
                  window.open(pdf, '_blank');
                }}
              >
                Resume
              </div>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
