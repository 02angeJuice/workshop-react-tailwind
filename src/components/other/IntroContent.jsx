import React from "react"
import { contents } from "../../constants/other_content"

export const IntroContent = () => {
  return (
    <section className="p-4 md:p-16">
      <div className="container mx-auto flex flex-col gap-3">
        {contents?.map(({ src, title, description }, idx) => (
          <div
            key={idx}
            className={`container mx-auto flex flex-col md:flex-row items-center justify-between gap-5 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <figure className="transition-all w-full md:w-1/2 min-h-64">
              <img className="w-full h-auto rounded-xl" src={src} alt="" />
            </figure>
            <figure className="transition-all w-full md:w-1/2 h-auto">
              <h2 className="text-3xl font-semibold">{title}</h2>
              <p className="text-gray-600 mt-4">{description}</p>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}
