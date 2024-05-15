import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
