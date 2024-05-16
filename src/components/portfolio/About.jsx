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
  { name: "Travel for food and relax", src: "my-self/hobbies/1.jpg" },
  { name: "Learn and listen to dhamma", src: "my-self/hobbies/2.jpg" },
  { name: "Read some favorite books", src: "my-self/hobbies/3.jpg" },
  {
    name: "Practice cooking at home with family",
    src: "my-self/hobbies/4.jpg",
  },
  {
    name: "Go to the countryside (Visit my mother if it's possible)",
    src: "my-self/hobbies/5.jpg",
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
              <p>
                Passionate about coding and continuously seeking out
                opportunities to learn and develop new skills. Dedicated and
                committed to delivering high-quality work, always striving for
                perfection in every task.
              </p>
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
