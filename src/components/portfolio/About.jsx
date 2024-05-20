import React, { useState } from "react"
import Card from "./Card"
import { services } from "../../constants/dummy_data"
import DynamicFAIcon from "../../utils/DynamicFAIcon"

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null)

  const [tooltipContent, setTooltipContent] = useState("")
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const handleShowTooltip = (content, event, index) => {
    setTooltipContent(content)
    setTooltipPosition({ x: event.clientX, y: event.clientY })
    setActiveIndex(index)
  }

  const handleHideTooltip = () => {
    setTooltipContent("")
    setActiveIndex(null)
  }

  const skills = services?.map((item, idx) => (
    <Card key={idx} title={item.title} image={item.image} />
  ))

  return (
    <section id="about" className="py-16 bg-n-7">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">
            About <span className="text-lime-300 font-extrabold">my-self</span>
          </div>

          <div className="text-3xl font-semibold hover:text-yellow-300">
            <DynamicFAIcon name="FaSeedling" />
          </div>
        </div>

        {/* Overview */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">Overview</h2>

          <div className="grid space-y-5 md:space-x-5 md:grid-cols-12 mt-5">
            <div className="md:col-span-6 lg:col-span-8 col-span-12 text-xl">
              <div
                className="flex flex-col justify-between gap-6"
                style={{ height: "100%" }}
              >
                <p>
                  Passionate about coding and continuously seeking out
                  opportunities to learn and develop new skills. Dedicated and
                  committed to delivering high-quality work, always striving for
                  perfection in every task.
                </p>

                <p className="text-5xl leading-tight">
                  Watcharaphong <br />
                  Sayprang
                </p>

                <div className="flex space-x-5">
                  <a
                    href="files/watcharaphong_cv.pdf"
                    download
                    className="inline-flex space-x-2 items-center text-lg text-nowrap px-6 py-2 rounded-full mt-8
                    transition-all duration-75
                    bg-lime-300 text-black
                    border-b-4 border-lime-700
                    hover:bg-lime-600
                    hover:text-white
                    hover:border-lime-900"
                  >
                    <DynamicFAIcon name="FaDownload" />
                    <span>CV</span>
                  </a>

                  <a
                    href="files/watcharaphong_resume.pdf"
                    download
                    className="inline-flex space-x-2 items-center text-lg text-nowrap px-6 py-2 rounded-full mt-8
                    transition-all duration-75
                    bg-sky-300 text-black
                    border-b-4 border-sky-700
                    hover:bg-sky-600
                    hover:text-white
                    hover:border-sky-900"
                  >
                    <DynamicFAIcon name="FaDownload" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 lg:col-span-4 col-span-12">
              <img
                className="
                w-screen
                h-[480px]
                object-cover
                rounded-2xl ring-4 ring-n-2
                hover:-translate-y-2
                hover:ring-4 
                hover:ring-lime-300
                hover:shadow-custom-white
                 transition-all duration-100"
                src="my-self/profile.jpg"
              />
            </div>
          </div>
        </div>

        {/* end */}
      </div>
    </section>
  )
}
