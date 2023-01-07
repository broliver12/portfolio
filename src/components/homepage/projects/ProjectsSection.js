import React, {useState} from 'react'
import './ProjectsSection.css'
import '../../Button.css'
import ProjectTile from './ProjectTile'

function ProjectsSection() {
  const openInNewTab = (url) => {
    window.open(url, '_blank')
  }

  const projects = [
    {
      title: 'Iris',
      description:
        'An Android app for designers & creatives on the go. Users can select (or capture) an image, then zoom in down to the pixel level, and save specific color samples.',
      selected: false,
      skills: ['Kotlin', 'Android'],
      clickAction: () => {
        // noop
      },
      githubIconAction: () => {
        openInNewTab('https://github.com/broliver12/iris')
      },
      externalIconAction: () => {
        openInNewTab('https://github.com/broliver12/iris')
      },
    },
    {
      title: 'NFT(ools)',
      description:
        'Collection of utility files for batch editing .json & .png files. Automation for every step of the NFT image generation & metadata creation proccess.',
      selected: false,
      skills: ['Javascript', 'Node'],
      clickAction: () => {
        // noop
      },
      githubIconAction: () => {
        openInNewTab('https://github.com/broliver12/nftools')
      },
      externalIconAction: () => {
        openInNewTab('https://github.com/broliver12/nftools')
      },
    },
    {
      title: 'Portfolio V1',
      description: 'This website! A lightweight portfolio project.',
      selected: false,
      skills: ['React', 'Javscript', 'Node'],
      githubIconAction: () => {
        openInNewTab('https://github.com/broliver12/portfolio')
      },
    },
    {
      title: 'Raytracer',
      description:
        'Realistic 3D image generator program. Phong shading and optimized raytracing, implemented from scratch.',
      selected: false,
      skills: ['C++', 'UofT'],
      clickAction: () => {
        // noop
      },
      githubIconAction: () => {
        openInNewTab('https://github.com/broliver12/raytracer')
      },
      externalIconAction: () => {
        openInNewTab('https://github.com/broliver12/raytracer')
      },
    },
    {
      title: 'ERC721 Template',
      description:
        'Multiple complete, extensible implementations of the ERC721 (NFT) Standard Smart Contract. Includes unit tests. ',
      selected: false,
      skills: ['Solidity', 'Ethereum', 'Blockchain'],
      clickAction: () => {
        // noop
      },
      githubIconAction: () => {
        openInNewTab('https://github.com/broliver12/foundry_erc721')
      },
      externalIconAction: () => {
        openInNewTab('https://github.com/broliver12/foundry_erc721')
      },
    },
  ]

  const [shown, setShown] = useState(2)

  return (
    <div id="projects">
      <div className="projectsSectionContainer">
        <div className="projectsTitleBar">
          <div className="projectsTitleDecoration" />
          <div className="portfolioText">Portfolio</div>
          <div className="projectsTitleDecoration" />
        </div>
        <div className="projectTileListContainer">
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
          className="btn--outline showHideButton"
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
