import React from 'react'
import './WorkSection.css'
import ct from '../../content/JobContent'
import IconCalendarMonth from '../../icon/IconCalendarMonth'
import IconLocationOn from '../../icon/IconLocationOn'
import CardSurface from '../../components/card_surface/CardSurface'

/**
 * Professional Experience Widget
 *
 * @return {WorkSection}
 */
function WorkSection() {
  const content = ct()
  const jobs = content.jobs

  return (
    <div id="experience" className="workContainer">
      <div className="workTitleBar">
        <div>{content.title}</div>
      </div>
      <div className="workSubtitle">
        From enterprise consulting to product ownership, I&apos;ve led teams
        and built scalable mobile experiences across high-impact platforms.
      </div>

      <div className="jobCardsContainer">
        {jobs.map((job, index) => (
          <div key={index} className="jobCardRow">
            <CardSurface
              as="a"
              className="jobCard"
              href={job.companyUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={job.company + ' website'}
            >
              <div className="jobHeader">
                <div className="jobCompanyBlock">
                  <div className="logoFrame">
                    {job.logo ?
                      <img
                        className="companyLogo"
                        src={job.logo}
                        alt={job.company + ' logo'}
                      /> :
                      <span className="logoPlaceholder">Logo</span>}
                  </div>
                  <div className="companyMeta">
                    <div className="companyName">{job.company}</div>
                    <div className="jobRole">{job.title}</div>
                    {job.previously && job.previously.length > 0 ? (
                      <div className="previouslyInlineList">
                        {job.previously.map((entry, i) => (
                          <div key={i} className="previouslyInlineItem">
                            {'Previously: ' +
                              entry.title +
                              ' (' +
                              entry.dates +
                              ')'}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="jobMeta">
                  <div className="metaRow">
                    <span className="metaIcon">
                      <span className="metaIconImage" aria-hidden="true">
                        <IconCalendarMonth />
                      </span>
                    </span>
                    <span className="centeredText">
                      {job.start + ' - ' + job.end}
                    </span>
                  </div>
                  <div className="metaRow">
                    <span className="metaIcon">
                      <span className="metaIconImage" aria-hidden="true">
                        <IconLocationOn />
                      </span>
                    </span>
                    <span className="centeredText">
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="jobBullets">
                {job.description.map((item, i) => (
                  <div key={i} className="bulletRow">
                    <span className="bulletPoint" aria-hidden="true">●</span>
                    <span className="descLineSpace">{item.body}</span>
                  </div>
                ))}
              </div>

              <div className="techStackContainer">
                {job.stack.map((item, i) => (
                  <span key={i} className="stackItem">{item}</span>
                ))}
              </div>
            </CardSurface>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkSection
