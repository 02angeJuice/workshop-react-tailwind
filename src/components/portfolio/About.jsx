import React, { useState } from "react"
import Card from "./Card"
import { services } from "../../constants/dummy_data"

const randomImages = () => {
  return "https://source.unsplash.com/random?wallpapers"
}

let CardImage = randomImages()

const tech_stacks = [
  { name: "html", src: "my-self/stacks/html.png" },
  { name: "css", src: "my-self/stacks/css.png" },
  { name: "js", src: "my-self/stacks/js.png" },
  { name: "ts", src: "my-self/stacks/ts.svg" },
  { name: "node", src: "my-self/stacks/node.svg" },
  { name: "nestjs", src: "my-self/stacks/nestjs.png" },
  { name: "react", src: "my-self/stacks/react.png" },
  { name: "redux", src: "my-self/stacks/redux.png" },
  { name: "prisma", src: "my-self/stacks/prisma.svg" },

  { name: "sql", src: "my-self/stacks/sql.png" },
  { name: "mui", src: "my-self/stacks/mui.svg" },
  { name: "tailwind", src: "my-self/stacks/tailwind.png" },
]

const hobbies = [
  { name: "Travel for food and relax", src: "my-self/html.png" },
  { name: "Learn and listen to dhamma", src: "my-self/css.png" },
  {
    name: "Go to the countryside (Visit my mother if it's possible)",
    src: "my-self/js.png",
  },
]

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const skills = services?.map((item, idx) => (
    <Card key={idx} title={item.title} image={item.image} />
  ))

  return (
    <section id="about" className="p-16">
      <div className="container mx-auto">
        <div className="text-3xl font-semibold">About my self</div>

        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">Overview</h2>
          <div className="text-xl">
            Passionate about coding and continuously seeking out opportunities
            to learn and develop new skills. Dedicated and committed to
            delivering high-quality work, always striving for perfection in
            every task.
          </div>
        </div>

        {/* Ohter */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">My stacks used</h2>
          {/* <div className="flex flex-wrap gap-10">{skills}</div> */}
        </div>

        {/* Tech Stacks */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">My stacks used</h2>
          <div className="flex flex-wrap gap-10 mt-5">
            {tech_stacks?.map((item, idx) => (
              <img key={idx} className="h-16 w-auto" src={item?.src} />
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

              {/* <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="mb-0" id="headingTwo">
                  <button
                    className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
                    type="button"
                  >
                    Accordion Item #2
                    <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div id="collapseTwo" className="!visible ">
                  <div className="px-5 py-4">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>



              <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
                <h2 className="accordion-header mb-0" id="headingThree">
                  <button
                    className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
                    type="button"
                  >
                    Accordion Item #3
                    <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </button>
                </h2>
                <div id="collapseThree" className="!visible hidden">
                  <div className="px-5 py-4">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
