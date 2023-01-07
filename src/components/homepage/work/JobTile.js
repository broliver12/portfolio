import React from 'react'
import './JobTile.css'

function JobTile(props) {
  return (
    <div
      className={
        props.selected === true ?
          'jobTileContainer jobTileContainerSelected' :
          'jobTileContainer'
      }
      onClick={() => props.clickAction()}
    >
      <div
        className={
          props.selected === true ? 'jobTitle jobTitleSelected' : 'jobTitle'
        }
      >
        {props.title}
      </div>
      <div
        className={
          props.selected === true ?
            'companyTitle titleSelected' :
            'companyTitle'
        }
      >
        {props.company}
      </div>
    </div>
  )
}

export default JobTile
