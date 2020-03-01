import * as React from 'react'
import { VerticalTimeline, VerticalTimelineElement} from '../src/index'

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

export default { title: 'Vertical Timeline' }

export const main = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="element element--work element--blue"
      contentClassName="pane"
      date="2011 - present"
      iconClassName="icon"
      icon={<WorkIcon />}
    >
      <h3 className="inner-title">Creative Director</h3>
      <h4 className="inner-subtitle">Miami, FL</h4>
      <p className="inner-text">
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="element element--work"
      date="2010 - 2011"
      iconClassName="icon"
      icon={<WorkIcon />}
    >
      <h3 className="inner-title">Art Director</h3>
      <h4 className="inner-subtitle">San Francisco, CA</h4>
      <p className="inner-text">
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="element element--work"
      date="2008 - 2010"
      iconClassName="icon"
      icon={<WorkIcon />}
    >
      <h3 className="inner-title">Web Designer</h3>
      <h4 className="inner-subtitle">Los Angeles, CA</h4>
      <p className="inner-text">
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="element element--work"
      date="2006 - 2008"
      iconClassName="icon"
      icon={<WorkIcon />}
    >
      <h3 className="inner-title">Web Designer</h3>
      <h4 className="inner-subtitle">San Francisco, CA</h4>
      <p className="inner-text">
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="element element--education"
      date="April 2013"
      iconClassName="icon"
      icon={<SchoolIcon />}
    >
      <h3 className="inner-title">Content Marketing for Web, Mobile and Social Media</h3>
      <h4 className="inner-subtitle">Online Course</h4>
      <p className="inner-text">
        Strategy, Social Media
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="element element--education"
      date="November 2012"
      iconClassName="icon"
      icon={<SchoolIcon />}
    >
      <h3 className="inner-title">Agile Development Scrum Master</h3>
      <h4 className="inner-subtitle">Certification</h4>
      <p className="inner-text">
        Creative Direction, User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="element element--education"
      date="2002 - 2006"
      iconClassName="icon"
      icon={<SchoolIcon />}
    >
      <h3 className="inner-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
      <h4 className="inner-subtitle">Bachelor Degree</h4>
      <p className="inner-text">
        Creative Direction, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      iconClassName="icon"
      icon={<StarIcon />}
    />
  </VerticalTimeline>
)

export const noAnimationFirst = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRightColor: 'rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      animate={false}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <p>
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<StarIcon />}
    />
  </VerticalTimeline>
)

export const noAnimation = () => (
  <VerticalTimeline
      animate={false}
  >
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRightColor: 'rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <p>
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<StarIcon />}
    />
  </VerticalTimeline>
)

export const singleColumn = () => (
  <VerticalTimeline
      layout="1-column"
  >
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRightColor: 'rgb(33, 150, 243)' }}
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2011"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <p>
        User Experience, Visual Design
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<StarIcon />}
    />
  </VerticalTimeline>
)
