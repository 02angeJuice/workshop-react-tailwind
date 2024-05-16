import React from "react"

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

export const Hobbies = () => {
  return (
    <section id="hobbies" className="py-16">
      <div className="container mx-auto">
        <div className="text-3xl font-semibold">
          <span className="text-lime-300 font-extrabold">Hobbies</span> and
          interests
        </div>

        {/* Hobbies */}
        <div className="mt-10">
          <h2 className="sectionHeadText text-2xl">
            "go with the flow of nature"
          </h2>
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
      </div>
    </section>
  )
}
