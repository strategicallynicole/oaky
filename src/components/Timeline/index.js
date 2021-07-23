import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Title from '../Titles/h2.js'
import "./index.scss"
const Timeline = () => (
    <>
        <div className="bg-fixed bg-wallpaper">
            <Title bgtext="Evolution" titletext="How We Work With You"
            />
            <VerticalTimeline>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: `rgb(33, 150, 243)`, color: `#fff` }}
                >

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: `rgb(233, 30, 99)`, color: `#fff` }}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
      Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: `rgb(233, 30, 99)`, color: `#fff` }}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
      Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: `rgb(233, 30, 99)`, color: `#fff` }}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
      Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: `rgb(16, 204, 82)`, color: `#fff` }}
                />
            </VerticalTimeline></div>

    </>)
export default Timeline
