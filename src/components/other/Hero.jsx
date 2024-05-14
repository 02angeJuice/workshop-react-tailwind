import React from "react"

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white p-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold">Welcome to Our Website</h1>
        <p className="text-lg mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <a
          href="#"
          className="bg-blue-500 text-white px-6 py-2 rounded-full my-8 inline-block hover:bg-blue-700"
        >
          Get Start
        </a>
      </div>
    </section>
  )
}

export default Hero
