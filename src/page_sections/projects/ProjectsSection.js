import React, {useState} from 'react'
import './ProjectsSection.css'
import '../../components/button/Button.css'
import ProjectTile from '../../components/portfolio_tile/ProjectTile'
import li from '../../content/ExternalLinks.js'
import ct from '../../content/PortfolioContent.js'


/**
 * Personal Projects Widget
 *
 * @return {WorkSection}
 */
function ProjectsSection() {
  const openInNewTab = (url) => {
    window.open(url, '_blank')
  }

  const links = li()
  const content = ct()

  const projects = content.projects.map((item) => {
    return {
      ...item,
      ...{
        selected: false,
        clickAction: () => {
          // noop
        },
        githubIconAction: () => {
          openInNewTab(links.github_url + item.gh_ext)
        },
        externalIconAction: () => {
          openInNewTab(links.github_url + item.gh_ext)
        },
      }
    }
  }
  )

  const [shown, setShown] = useState(2)

  return (
    <div id="portfolio">
      <div className="projectsSectionContainer">
        <div className="projectsTitleBar">
          <div className="projectsTitleDecoration" />
          <div className="portfolioText">Personal Projects</div>
          <div className="projectsTitleDecoration" />
        </div>
        <div className="projectTileListContainer reveal fade-bottom">
          {projects
            .filter((item, index) => index <= shown)
            .map((proj, index) => (
              <ProjectTile
                key={index}
                title={proj.title}
                description={proj.description}
                selected={proj.selected}
                skills={proj.skills}
                clickAction={proj.clickAction}
                githubIconAction={proj.githubIconAction}
                externalIconAction={proj.externalIconAction}
              />
            ))}
        </div>
        <div
          className="outlinedButtonComponent showHideButton reveal fade-bottom"
          onClick={() => {
            if (shown > 2) {
              setShown(2)
            } else {
              setShown(projects.length - 1)
            }
          }}
        >
          {shown > 2 ? <div> Show Less</div> : <div> Show More</div>}
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
