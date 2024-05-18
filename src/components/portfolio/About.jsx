import React, { useState } from "react"
import Card from "./Card"
import { services } from "../../constants/dummy_data"

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
        <div className="text-3xl font-semibold">
          About <span className="text-lime-300 font-extrabold">my-self</span>
        </div>

        {/* Overview */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">Overview</h2>

          <div className="grid space-y-5 md:space-x-5 md:grid-cols-12 mt-5">
            <div className="md:col-span-6 lg:col-span-8 col-span-12 text-xl">
              <div
                className="flex flex-col justify-between"
                style={{ height: "100%" }}
              >
                <p>
                  Passionate about coding and continuously seeking out
                  opportunities to learn and develop new skills. Dedicated and
                  committed to delivering high-quality work, always striving for
                  perfection in every task.
                </p>

                <p>
                  I' Watcharaphong sayprang <br />
                  Jumbo
                </p>

                <div className="flex space-x-5">
                  <button className="bg-lime-300 text-black px-6 py-2 rounded-full mt-8">
                    Download CV
                  </button>

                  <button className="bg-sky-300 text-black px-6 py-2 rounded-full mt-8">
                    Download Resume
                  </button>
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
