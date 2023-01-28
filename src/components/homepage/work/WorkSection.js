import React, {useState} from 'react'
import JobTile from './JobTile'
import './WorkSection.css'
import ct from '../../../content/JobContent'

/**
 * Professional Experience Widget
 *
 * @return {WorkSection}
 */
function WorkSection() {
  const [selectedJobId, setSelectedJobId] = useState(0)
  const [show, setShow] = useState(0)

  const content = ct()
  const jobs = content.jobs

  const dataRow = (dKey, value, separator) => {
    return (
      <div className="dataRow">
        <div className="dataKey">{dKey}</div>
        <div className="dataSeparator">
          {(separator === false) ? <></> : <>:</>}
        </div>
        <div className="dataValue">{value}</div>
      </div>
    )
  }

  return (
    <div id="experience" className="workContainer">
      <div className="workTitleBar">
        <div>{content.title}</div>
        <div className="workTitleDecoration" />
      </div>

      <div className="jobTableContainer reveal fade-right">
        <div className="jobListContainer scrollMenu">
          {jobs.map((job, index) => (
            <JobTile
              key={index}
              selected={index === selectedJobId}
              title={job.title}
              company={job.company}
              clickAction={() => {
                setSelectedJobId(index)
              }}
            />
          ))}
        </div>
        <div className={'jobInfoContainer ' + jobs[selectedJobId].bgClass}>
          <div className="jobDetailsContainer">
            {jobs[selectedJobId].description.map((item, index) => {
              return <div
                key={index}
                className="descLineSpace">
                {item.body}
              </div>
            })}
          </div>
          <div className="jobDates">
            {dataRow('Start', jobs[selectedJobId].start)}
            {dataRow('End', jobs[selectedJobId].end)}
            {dataRow('Location', jobs[selectedJobId].location)}
            {dataRow('Skills', '')}
            {
              <div className="techStackContainer">
                {jobs[selectedJobId].stack.map((item, index) => (
                  <span key={index} className="stackItem">{item}</span>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
