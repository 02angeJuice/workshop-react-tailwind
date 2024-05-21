import React, { useContext } from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import { experiences } from "../../constants/dummy_data"

import DynamicFAIcon from "../../utils/DynamicFAIcon"
import TopicSection from "../Fragments/TopicSection"

const TimelineCard = ({ item }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0, 0, 0, 0.8)",
        color: "#FFF",
        border: `3px solid ${item?.iconBg}`,
        borderRadius: "10px",
      }}
      contentArrowStyle={{ borderRight: `20px solid ${item?.iconBg}` }}
      date={item?.date}
      iconStyle={{ background: item?.iconBg, color: "#FFF" }}
      icon={<DynamicFAIcon name={item?.icon} />}
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
    </VerticalTimelineElement>
  )
}

export default function Experience() {
  return (
    <section
      id="exp"
      className="py-16 bg-gray-900 bg-center bg-cover"
      style={{
        backgroundImage: "url(my-self/cover-1.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto">
        <TopicSection id="exp" obsName="observe" iconName="FaRocket">
          <span className="text-lime-200 font-extrabold">Exp</span>
          erience timeline
        </TopicSection>

        <div className="mt-10">
          <VerticalTimeline>
            {experiences?.map((item, idx) => {
              return <TimelineCard key={idx} item={item} />
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
