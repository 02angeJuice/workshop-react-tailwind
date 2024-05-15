import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"

export default function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}