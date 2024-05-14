import React from "react"
import { testimotials } from "../../constants/other_content"

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Testimonails</h2>

        <div className="flex flex-wrap justify-center mt-8">
          {testimotials?.map(({ author, text }, idx) => (
            <div key={idx} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-3">
              <div className="bg-white p-6 rounded-md shadow-md">
                <p className="text-gray-600">{text}</p>
                <p className="text-gray-800 font-semibold mt-4">{author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
