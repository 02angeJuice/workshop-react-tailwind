import React from "react"
import { tech_stacks } from "../../constants/dummy_data"
import DynamicFAIcon from "../../utils/DynamicFAIcon"

const hobbies = [
  { name: "Travel for food and relax", src: "my-self/hobbies/1.jpg" },
  { name: "Learn and listen to dhamma", src: "my-self/hobbies/2.jpg" },
  { name: "Read some favorite books", src: "my-self/hobbies/3.jpg" },
  {
    name: "Practice cooking at home with family",
    src: "my-self/hobbies/4.jpg",
  },
  {
    name: "Hello, I'm Suea(Tiger)",
    src: "my-self/hobbies/5/5.jpg",
  },
]

const filter = [
  { title: "ALL", catgory: "ALL" },
  { title: "Mobile App", catgory: "ALL" },
  { title: "React", catgory: "ALL" },
]

const works = [
  {
    title: "The Burger",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/burger.png",
    catgory: ["React", "Redux"],
    link_github: "https://github.com/02angeJuice/the-burger-remake",
    link_web: "https://the-burger-remake.netlify.app/",
  },
  {
    title: "The Burger",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/burger.png",
    catgory: ["React", "Redux"],
    link_github: "https://github.com/02angeJuice/the-burger-remake",
    link_web: "https://the-burger-remake.netlify.app/",
  },
  {
    title: "The Burger",
    description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/burger.png",
    catgory: ["React", "Redux"],
    link_github: "https://github.com/02angeJuice/the-burger-remake",
    link_web: "https://the-burger-remake.netlify.app/",
  },
  {
    title: "Auto Delete Todo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/todo.png",
    catgory: ["React", "Zustand"],
    link_github: "https://github.com/02angeJuice/todo-list",
    link_web: "https://auto-todo-list.netlify.app",
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16"
      // style={{
      //   backgroundImage: "url(my-self/cover-1.jpg)",
      //   backgroundAttachment: "fixed",
      // }}
    >
      <div className="container mx-auto">
        <div className="text-3xl font-semibold">
          <span className="text-lime-300 font-extrabold">Skills</span> and other
        </div>

        {/* Works */}
        <div className="mt-10">
          {/* <h2 className="sectionHeadText text-2xl">
            "go with the flow of nature"
          </h2> */}
          <div className="grid grid-cols-12 gap-5 mt-5">
            {works?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
                >
                  <div
                    className="p-4 bg-n-6 rounded-lg shadow-lg overflow-hidden flex flex-col
                    h-full
                    hover:ring-4
                    hover:ring-lime-300"
                  >
                    <div className="h-60 rounded-md overflow-hidden">
                      <img
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-200"
                        src={item?.thumbnail}
                        alt={item?.title}
                      />
                    </div>
                    <div className="my-2 text-center md:text-left">
                      <blockquote>
                        <p className="text-lg font-medium">{item?.title}</p>
                      </blockquote>
                      <p className="text-base text-n-3 font-mono">
                        {item?.description}
                      </p>
                    </div>

                    <div className="my-2 flex justify-between gap-2">
                      {/* Catgories */}
                      <div>
                        <p className="text-sm leading-loose">Categories</p>
                        <div className="flex gap-1 flex-wrap">
                          {item?.catgory?.map((cate) => (
                            <span className="text-xs px-3 py-1 bg-n-5 rounded-md">
                              {cate}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Source */}

                      <div>
                        <p className="text-sm leading-loose">Source</p>
                        <div className="flex space-x-2 items-center">
                          {item?.link_github && (
                            <a
                              className="hover:opacity-50"
                              href={item?.link_github}
                              target="_blank"
                            >
                              <img
                                className="h-6 w-auto  object-cover rounded-full"
                                src="my-self/stacks/github.png"
                                alt="github"
                              />
                            </a>
                          )}

                          {item?.link_web && (
                            <a
                              className="hover:opacity-50 bg-white rounded-full p-1"
                              href={item?.link_web}
                              target="_blank"
                            >
                              <DynamicFAIcon
                                name="FaCode"
                                color="black"
                                size={18}
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">My stacks used</h2>
          <div className="flex flex-wrap gap-2 mt-5">
            {tech_stacks?.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-n-5 rounded-md hover:scale-110 transition-transform duration-100 hover:ring-4 ring-lime-300 hover:bg-n-3"
              >
                <img className="h-12 w-auto " src={item?.src} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
