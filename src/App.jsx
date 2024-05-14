import React from "react"
import { Hero, Navbar, About, Experience, Content3D } from "./components"
import Greeting from "./components/Greeting"

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}

      <Content3D>
        <Greeting />
      </Content3D>

      <About />
      <Experience />
    </>
  )
}

export default App
