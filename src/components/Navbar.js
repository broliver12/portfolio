import React, {useState} from 'react'
import './Navbar.css'
import './Socials.css'
import './Button.css'

/**
 * Top Navigation Bar & Drop down Menu
 *
 * @return {Navbar}
 */
function Navbar({...props}) {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const standardButtonText = [
    {
      title: 'About',
      callback: () => {
        document.getElementById('about').scrollIntoView()
      },
    },
    {
      title: 'Experience',
      callback: ( ) => {
        document.getElementById('experience' ).scrollIntoView()
      },
    },
    {
      title: 'Portfolio',
      callback: () => {
        document.getElementById('projects').scrollIntoView()
      },
    },
    {
      title: 'Contact',
      callback: () => {
        document.getElementById('contact').scrollIntoView()
      },
    },
  ]

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
          OS
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
                className="btn--outline innerItem resumeButton"
                onClick={() => {
                  closeMobileMenu()
                  window.open('ostraszynski_resume.pdf', '_blank')
                }}
              >
                Resume
              </div>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar
