import React, { useState } from "react"
import Card from "./Card"
import { services } from "../../constants/dummy_data"

const randomImages = () => {
  return "https://source.unsplash.com/random?wallpapers"
}

let CardImage = randomImages()

const tech_stacks = [
  { name: "HTML", src: "my-self/stacks/html.png" },
  { name: "CSS", src: "my-self/stacks/css.png" },
  { name: "JavaScript", src: "my-self/stacks/js.png" },
  { name: "TypeScript", src: "my-self/stacks/ts.svg" },
  { name: "NodeJS", src: "my-self/stacks/node.svg" },
  { name: "NestJS", src: "my-self/stacks/nestjs.png" },
  { name: "React", src: "my-self/stacks/react.png" },
  { name: "Redux", src: "my-self/stacks/redux.png" },
  { name: "Prisma", src: "my-self/stacks/prisma.svg" },
  { name: "SQL", src: "my-self/stacks/sql.png" },
  { name: "MUI", src: "my-self/stacks/mui.svg" },
  { name: "Tailwind", src: "my-self/stacks/tailwind.png" },
]

const hobbies = [
  { name: "Travel for food and relax", src: "my-self/html.png" },
  { name: "Learn and listen to dhamma", src: "my-self/css.png" },
  {
    name: "Go to the countryside (Visit my mother if it's possible)",
    src: "my-self/js.png",
  },
]

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
    <section id="about" className="p-16">
      <div className="container mx-auto">
        <div className="text-3xl font-semibold">About my self</div>

        {/* Overview */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">Overview</h2>

          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6 col-span-12 text-xl">
              Passionate about coding and continuously seeking out opportunities
              to learn and develop new skills. Dedicated and committed to
              delivering high-quality work, always striving for perfection in
              every task.
            </div>

            <div className="md:col-span-6 col-span-12">
              {/* <div className="w-full md:w-auto"> */}
              {/* <div className="flex">
                <img className="object-contain" src="my-self/profile.jpg" />
              </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">My stacks used</h2>
          <div className="flex flex-wrap gap-10 mt-5">
            {tech_stacks?.map((item, idx) => (
              <div key={idx} className="tooltip">
                <img
                  key={idx}
                  className="h-12 w-auto hover:scale-125 transition-transform duration-3000"
                  src={item?.src}
                />
                <span className="tooltiptext">{item?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">Hobbies and interest</h2>
          <div className="flex flex-wrap gap-10 mt-5">
            <div id="accordionExample">
              {hobbies?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full inline-block border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark"
                  >
                    <h2 className="mb-0" id="headingOne">
                      <button
                        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-black [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                        type="button"
                      >
                        {item?.name}
                        <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div id="collapseOne" className="!visible">
                      <div className="px-5 py-4">{item?.src}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
