import React from 'react'
import './ProjectTile.css'
import IconFolder from '../../../images/icon/folder'
import IconGithub from '../../../images/icon/github'

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
          {/* <div className="hyperlinkIcon" alt="Link to deployed project" onClick={() => props.externalIconAction()}>
            <IconExternal />
          </div> */}
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
