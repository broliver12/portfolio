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
        <h2>{content.title}</h2>
      </div>
      <p className="workSubtitle">
        From enterprise consulting to early stage startups, I&apos;ve led teams
        in building scalable, maintainable and beautiful mobile experiences.
      </p>

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
                  <div className={index == 0 ? "leagueFrame" : "logoFrame"}>
                    {job.logo ?
                      <img
                        className="companyLogo"
                        src={job.logo}
                        alt={job.company + ' logo'}
                      /> :
                      <span className="logoPlaceholder">Logo</span>}
                  </div>
                  <div className="companyMeta">
                    <h3 className="companyName">{job.company}</h3>
                    <p className="jobRole">{job.title}</p>
                    {job.previously && job.previously.length > 0 ? (
                      <div className="previouslyBlock">
                        <div className="previouslyLabel">Previously:</div>
                        <div className="previouslyInlineList">
                          {job.previously.map((entry, i) => (
                            <div key={i} className="previouslyInlineItem">
                              {entry.title + ' (' + entry.dates + ')'}
                            </div>
                          ))}
                        </div>
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
