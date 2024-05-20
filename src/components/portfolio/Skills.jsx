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
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/burger.png",
    catgory: ["React", "Redux"],
    link_github: "https://github.com/02angeJuice/the-burger-remake",
    link_web: "https://the-burger-remake.netlify.app",
  },
  {
    title: "Grocify Homepage",
    description: "Homepage design for a grocery store",
    thumbnail: "works/grocify-home.png",
    catgory: ["React", "Tailwind"],
    link_github: "https://github.com/02angeJuice/workshop-grocery-tailwind",
    link_web: "https://grocery-hompage.netlify.app",
  },
  {
    title: "Landing Homepage",
    description: "Starter template for landing page",
    thumbnail: "works/starter-landing.png",
    catgory: ["React", "Tailwind"],
    link_github: "https://github.com/02angeJuice/workshop-landing-tailwind",
    link_web: "https://starter-landing-homepage.netlify.app",
  },
  {
    title: "Booking Resort & Ticket",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/resort.png",
    catgory: ["React", "Zustand", "MUI", "NestJS", "SQL"],
    // link_github: "https://github.com/02angeJuice/todo-list",
    link_web: "https://www.nongnooch.io/nongnooch-resort/home",
  },
  {
    title: "Digital Assets",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/digital-assets.png",
    catgory: ["React", "Redux", "MUI", "NestJS", "SQL"],
    // link_github: "https://github.com/02angeJuice/todo-list",
    link_web: "https://www.nongnooch.io/Nongnooch(NDA)/home",
  },
  {
    title: "Pics Search",
    description: "Search picteures from unsplash",
    thumbnail: "works/pics-search.png",
    catgory: ["React"],
    link_github: "https://github.com/02angeJuice/pics-search",
    link_web: "https://pics-search-api.netlify.app/",
  },
  {
    title: "Auto Delete Todo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/todo.png",
    catgory: ["React", "Zustand", "MUI"],
    link_github: "https://github.com/02angeJuice/todo-list",
    link_web: "https://auto-todo-list.netlify.app",
  },

  {
    title: "Form Validation",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    thumbnail: "works/form-validation.png",
    catgory: ["React", "Redux", "Tailwind"],
    link_github: "https://github.com/02angeJuice/practice_2",
    link_web: "https://demo-form-validation.netlify.app/",
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
        <div className="flex justify-between">
          <div className="text-3xl font-semibold">
            <span className="text-lime-300 font-extrabold">Skills</span> and
            other
          </div>

          <div className="text-3xl font-semibold hover:text-yellow-300">
            <DynamicFAIcon name="FaTrophy" />
          </div>
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
                    className="p-4 bg-n-6 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between
                    h-full
                    hover:ring-4
                    hover:ring-lime-300"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="h-48 rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-contain hover:scale-110 transition-all duration-200"
                          src={item?.thumbnail}
                          alt={item?.title}
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="my-2 text-center md:text-left">
                        <blockquote>
                          <p className="text-lg font-medium">{item?.title}</p>
                        </blockquote>
                        <p className="text-base text-n-3 font-mono">
                          {item?.description}
                        </p>
                      </div>
                    </div>

                    {/* Catgories */}
                    <div>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm leading-8">#Tags</p>
                        </div>
                        <div>
                          <div className="flex space-x-2">
                            {item?.link_github && (
                              <a
                                className="bg-white rounded-full p-1 text-n-10
                              hover:scale-95
                              hover:text-n-8
                              hover:bg-lime-200"
                                href={item?.link_github}
                                target="_blank"
                              >
                                <DynamicFAIcon name="FaGithubAlt" size={18} />
                              </a>
                            )}

                            {item?.link_web && (
                              <a
                                className="bg-white rounded-full p-1 text-n-10
                              hover:scale-95
                              hover:text-n-8 
                              hover:bg-sky-200"
                                href={item?.link_web}
                                target="_blank"
                              >
                                <DynamicFAIcon name="FaGlobe" size={18} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-1 flex-wrap">
                        {item?.catgory?.map((cate) => (
                          <span className="text-xs px-3 py-1 bg-n-5 rounded-md">
                            {cate}
                          </span>
                        ))}
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
