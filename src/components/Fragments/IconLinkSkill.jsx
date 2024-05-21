import React from "react"
import DynamicFAIcon from "../../utils/DynamicFAIcon"

export default function IconLinkSkill({ iconName, color, link, open }) {
  return (
    <a
      onClick={open}
      className={`bg-white rounded-full p-1 text-n-10 cursor-pointer
        hover:scale-95
        hover:text-n-8
        hover:bg-${color}-300
        relative
        hover:before:content-['']
        hover:before:absolute
        hover:before:inset-0
        hover:before:bg-${color}-300
        hover:before:opacity-50
        hover:before:rounded-full
        hover:before:blur-md`}
      href={link}
      target={link && `_blank`}
    >
      <DynamicFAIcon name={iconName} size="20" />
    </a>
  )
}
