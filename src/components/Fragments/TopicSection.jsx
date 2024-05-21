import React from "react"
import DynamicFAIcon from "../../utils/DynamicFAIcon"

export default function TopicSection({ id, obsName, iconName, children }) {
  return (
    <div className="flex justify-between">
      <div className="text-white text-3xl font-semibold">{children}</div>
      <div
        id={id}
        className={`${obsName} text-3xl font-semibold relative
          transition-all duration-500 ease-out
          opacity-0
          -translate-x-24

        hover:text-lime-300
          hover:before:content-['']
          hover:before:absolute
          hover:before:inset-0
          hover:before:bg-lime-300
          hover:before:opacity-50
          hover:before:rounded-full
          hover:before:blur-xl
          hover:-translate-y-1
          
          `}
      >
        <DynamicFAIcon name={iconName} />
      </div>
    </div>
  )
}
