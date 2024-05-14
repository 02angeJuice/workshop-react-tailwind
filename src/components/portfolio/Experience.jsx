import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { experiences } from "../../constants/dummy_data"

import { FaBook } from "react-icons/fa"

const TimelineCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      contentArrowStyle={{ borderRight: "10px solid  rgb(33, 150, 243)" }}
      date={item?.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<FaBook />}
    >
      <h3 className="vertical-timeline-element-title">{item?.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        {item?.company_name}
      </h4>
      <ul>
        {item?.points?.map((sub, idx) => {
          return <li key={idx}>{sub}</li>
        })}
      </ul>

      <img
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
        className="rounded-t-lg"
        src={item?.icon}
        alt=""
      />
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <div href="exp">
      <VerticalTimeline>
        {experiences?.map((item, idx) => {
          return <TimelineCard key={idx} item={item} />
        })}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
