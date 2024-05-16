import React from "react"
import DynamicFAIcon from "../utils/DynamicFAIcon"

export default function Arrow({ isScrolled }) {
  return (
    <a
      href="#"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 5,
      }}
    >
      <div
        style={{
          display: isScrolled ? "flex" : "none",
          transition: "all .2s ease",
          flexDirection: "row",
          alignItems: "center",
          //   backgroundColor: "bg-lime-300",
          color: "#FFF",
          //   padding: "2px 3px",
        }}
        className="bg-lime-300 p-2"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(0px,-5px)"
          e.currentTarget.style.cursor = "pointer"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)"
        }}
      >
        <DynamicFAIcon name="FaArrowUp" size={30} />
      </div>
    </a>
  )
}
