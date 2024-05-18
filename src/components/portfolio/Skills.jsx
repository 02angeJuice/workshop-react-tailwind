import React from "react"

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
  // { name: "Travel for food and relax", src: "my-self/hobbies/1.jpg" },
  // { name: "Learn and listen to dhamma", src: "my-self/hobbies/2.jpg" },
  // { name: "Read some favorite books", src: "my-self/hobbies/3.jpg" },
  // {
  //   name: "Practice cooking at home with family",
  //   src: "my-self/hobbies/4.jpg",
  // },
  {
    name: "Hello, I'm Suea(Tiger)",
    src: "my-self/hobbies/5/5.jpg",
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

        {/* Hobbies */}
        <div className="mt-10">
          {/* <h2 className="sectionHeadText text-2xl">
            "go with the flow of nature"
          </h2> */}
          <div className="grid grid-cols-12 gap-5 mt-5">
            {hobbies?.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                  <div
                    className="bg-n-6 rounded-lg shadow-lg overflow-hidden flex flex-col  hover:ring-4
                hover:ring-lime-300"
                  >
                    <div className="h-60 overflow-hidden">
                      <img
                        className="w-full h-full object-cover hover:scale-110 transition-all duration-200"
                        src={item?.src}
                        alt={item?.name}
                      />
                    </div>
                    <div className="p-4 text-center md:text-left">
                      <blockquote>
                        <p className="text-lg font-medium">{item?.name}</p>
                      </blockquote>
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
