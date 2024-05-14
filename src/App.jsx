import React from "react"
import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import PortfolioPage from "./pages/PortfolioPage"
import { OtherPage } from "./pages/OtherPage"

const App = () => {
  return (
    <>
      {/* <div className="container min-h-screen bg-[url('images/image.png')] bg-center bg-cover"> */}
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <Nav /> */}

      {/* <Content3D>
          <Greeting />
        </Content3D>

        <About />
        <Experience /> */}
      {/* </div> */}

      {/* <OtherPage /> */}

      {/* <LandingPage /> */}

      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
