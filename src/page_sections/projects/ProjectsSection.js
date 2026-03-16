import {useState} from 'react'
import ProjectTile from '../../components/portfolio_tile/ProjectTile'
import li from '../../content/ExternalLinks.js'
import ct from '../../content/PortfolioContent.js'
import {trackProjectClick} from '../../analytics/google_analytics'


/**
 * Personal Projects Widget
 *
 * @return {WorkSection}
 */
function ProjectsSection() {
  const openInNewTab = (url, projectName, ctaLocation) => {
    trackProjectClick({
      project_name: projectName,
      cta_location: ctaLocation,
      destination_url: url,
    })
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
          openInNewTab(
            links.github_url + item.gh_ext,
            item.title,
            'project_github_icon'
          )
        },
        externalIconAction: () => {
          openInNewTab(
            links.github_url + item.gh_ext,
            item.title,
            'project_external_icon'
          )
        },
      }
    }
  }
  )

  const [shown, setShown] = useState(2)

  return (
    <div id="projects">
      <div className="projectsSectionContainer">
        <div className="projectsTitleBar">
          <h2 className="portfolioText">Personal Projects</h2>
        </div>
        <p className="projectsSubtitle">
          Experiments with various technologies to expand my capabilities as a
          software engineer.
        </p>
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
