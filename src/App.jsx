import React from "react"
import { Routes, Route, Outlet } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import PortfolioPage from "./pages/PortfolioPage"
import OtherPage from "./pages/OtherPage"
// import NavbarLayout from "./layouts/NavbarLayout"

const App = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
  </Routes>
)

export default App
