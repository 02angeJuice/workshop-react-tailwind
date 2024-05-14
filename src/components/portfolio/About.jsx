import React from "react"
import Card from "./Card"
import { services } from "../../constants/dummy_data"

const randomImages = () => {
  return "https://source.unsplash.com/random?wallpapers"
}

let CardImage = randomImages()

const About = () => {
  const skills = services?.map((item, idx) => (
    <Card key={idx} title={item.title} image={item.image} />
  ))

  return (
    <div className="about-head">
      <div className="sectionSubText">Introduction</div>
      <h2 className="sectionHeadText">Overview</h2>
      <div className="about-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        cumque nobis, libero earum quasi excepturi maiores, voluptates quisquam
        nihil doloribus atque sunt dolorem animi eveniet culpa dolores sequi
        iusto ipsa!
      </div>
      <div className="mt-10">
        <div className="sectionSubText">Skills</div>
        <div className="flex flex-wrap gap-10">{skills}</div>
      </div>
      <div className="mt-10">
        <div className="sectionSubText">Experience</div>
        <div className="grid grid-cols-1 gap-4"></div>
      </div>
    </div>
  )
}

export default About
