const portfolioContent = () => {
  return {
    'projects': [
      {
        'title': 'Screen Scaffold',
        'description':
                    'A lightweight, reusable screen wrapper for jetpack compose apps',
        'skills': ['Compose', 'SDK', 'Android', 'Kotlin'],
        'gh_ext': 'screen-scaffold'
      },
      {
        'title': 'Iris',
        'description':
                    'Android app for designers & creatives. Users can select (or capture) an image, zoom in down to the pixel level, and store their favorite color samples.',
        'skills': ['Kotlin', 'Android', 'XML', 'MVVM'],
        'gh_ext': 'iris'
      },
      {
        'title': 'Portfolio V1',
        'description': 'This website! A lightweight portfolio project.',
        'skills': ['React', 'Javscript', 'Next.js', 'Node'],
        'gh_ext': 'portfolio'
      },
      {
        'title': 'NFTools',
        'description':
                    'Collection of utility files for batch editing .json & .png files. Automation for every step of the NFT image generation & metadata creation proccess.',
        'skills': ['Javascript', 'Node'],
        'gh_ext': 'nftools'
      },
      {
        'title': 'Raytracer',
        'description':
                    'Realistic 3D image generator program. Phong shading and optimized raytracing, implemented from scratch.',
        'skills': ['C++', 'OpenGL', 'Graphics'],
        'gh_ext': 'raytracer'
      },
      {
        'title': 'ERC721 Template',
        'description':
                    'Multiple complete, extensible implementations of the ERC721 (NFT) Standard Smart Contract. Includes unit tests.',
        'skills': ['Solidity', 'Ethereum', 'Blockchain'],
        'gh_ext': 'foundry_erc721'
      },
    ],
    'resume_cta': 'Resume'
  }
}
export default portfolioContent
