import React from "react"
import Content3D from "./Content3D"

const Hero = () => (
  <section
    style={{
      position: "relative",
    }}
    className="relative w-full h-screen mx-auto bg-lufy"
  >
    <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5">
      <div>
        <h1 className="heroHeadText">
          Hello, I'm <span className="text-[#16c734]">02angeJuice</span>
        </h1>
        <p className="heroSubText mt-2 text-white-100">
          I'm web developer <br />
          MERN Stack, Python
        </p>
      </div>
    </div>
  </section>
)

export default Hero
