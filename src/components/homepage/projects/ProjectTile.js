import React from 'react'
import './ProjectTile.css'
import IconFolder from '../../../images/icon/IconFolder'
import IconGithub from '../../../images/icon/IconGithub'

/**
 * Tile that displays Personal Project Information
 *
 * @arg {any} props
 *
 * @return {ProjectTile}
 */
function ProjectTile(props) {
  return (
    <div
      className={
        props.selected === true ?
          'projectTileContainer' :
          'projectTileContainer'
      }
      onClick={() => props.clickAction()}
    >
      <div className="linkBar">
        <div className="folderIcon" alt="Folder">
          <IconFolder />
        </div>
        <div className="linkBarSocials">
          <div className="githubIcon" alt="Link to project github" onClick={() => props.githubIconAction()}>
            <IconGithub />
          </div>
        </div>
      </div>
      <div
        className={props.selected === true ? 'projectTitle' : 'projectTitle'}
      >
        {props.title}
      </div>
      <div
        className={
          props.selected === true ? 'projectDescription' : 'projectDescription'
        }
      >
        {props.description}
      </div>
      <div className="languageContainer">
        {props.skills.map((item, index) => (
          <div key={index} className="languageItem">{item}</div>
        ))}
      </div>
    </div>
  )
}

export default ProjectTile
