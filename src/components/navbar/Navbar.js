import React, {useState} from 'react'
import '../navbar/Navbar.css'
import '../socials/Socials.css'
import '../button/Button.css'
import '../../icon/IconLoading'
import IconLoading from '../../icon/IconLoading'
import li from '../../content/ExternalLinks.js'
import ct from '../../content/NavbarContent'

/**
 * Top Navigation Bar & Drop down Menu
 *
 * @return {Navbar}
 */
function Navbar({...props}) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const links = li()
  const content = ct()

  const standardButtonText = content.buttons.map((item) => {
    return {
      title: item,
      callback: () => {
        document.getElementById(item.toLowerCase()).scrollIntoView()
      },
    }
  })

  // useEffect(() => {
  //   async function sl() {
  //     var lastScrollTop = 0;

  //     // element should be replaced with the actual target element
  // on which you have applied scroll, use window in case of no target element.
  //     window.addEventListener("scroll", function(){
  //       var st = window.pageYOffset || document.documentElement.scrollTop;
  //       if (st > lastScrollTop){
  //           // downscroll code
  //           setHideNavBar(true)
  //           // For Mobile or negative scrolling
  //           lastScrollTop = st <= 0 ? 0 : st;
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
      <li className="nav-item" onClick={() => {
        callback()
        closeMobileMenu()
      }}>
        <div className="nav-links">
          <div
            className={click ? 'innerItem' : 'innerItem active'}
          >
            {title}
          </div>
        </div>
      </li>
    )
  }

  return (
    (false) ? <div></div> :
      <nav className={click ? 'navbar active' : 'navbar'}>
        <span
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu()
            // For Safari
            document.body.scrollTop = 0
            // For Chrome, Firefox, IE and Opera
            document.documentElement.scrollTop = 0
          }}
        >
          <IconLoading />
        </span>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {standardButtonText.map((item) =>
              getStandardButton(item.title, item.callback)
            )}
            <li className="nav-item">
              <div
                className="outlinedButtonComponent innerItem resumeButton"
                onClick={() => {
                  closeMobileMenu()
                  window.open(links.resume_url, '_blank')
                }}
              >
                {content.resume_cta}
              </div>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
