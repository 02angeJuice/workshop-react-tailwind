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
      contentStyle={{
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        border: "1px solid white",
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: "10px solid rgba(255, 255, 255, 0.8" }}
      date={item?.date}
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      icon={<FaBook />}
    >
      <h3 className="vertical-timeline-element-title text-lg font-semibold">
        {item?.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {item?.company_name}
      </h4>
      <h5 className="text-xs text-gray-500">● {item?.location}</h5>
      <ul>
        {item?.points?.map((sub, idx) => {
          return (
            <li key={idx} className="text-zinc-400 text-sm pl-2">
              {sub}
            </li>
          )
        })}
      </ul>

      {/* <img
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
        className="rounded-t-lg"
        src={item?.icon}
        alt=""
      /> */}
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  //   className={`min-h-screen bg-center bg-cover px-24 py-4`}
  // >

  return (
    <section
      id="exp"
      className="bg-gray-900 p-16 bg-center bg-cover"
      style={{
        backgroundImage: "url(my-self/cover-1.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <div className="text-white text-3xl font-semibold">Experience</div>

        <VerticalTimeline>
          {experiences?.map((item, idx) => {
            return <TimelineCard key={idx} item={item} />
          })}
        </VerticalTimeline>
      </div>

      {/* <img
        src="https://ghchart.rshah.org/02angejuice"
        alt="Name Your Github chart"
      /> */}
    </section>
  )
}

export default Experience
