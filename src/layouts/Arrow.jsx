import React from "react"
import DynamicFAIcon from "../utils/DynamicFAIcon"

export default function Arrow({ isScrolled }) {
  return (
    <a
      href="#"
      className={`${
        isScrolled ? "fixed" : "hidden"
      } bottom-5 right-5 bg-transparent ring-2 ring-lime-300 text-white p-2 rounded-md opacity-50
      transition-all duration-100
      hover:-translate-y-1
      hover:ring-lime-400
      hover:text-black
      hover:bg-lime-300
      hover:opacity-100`}
    >
      <DynamicFAIcon name="FaArrowUp" size="20" />
    </a>
  )
}
