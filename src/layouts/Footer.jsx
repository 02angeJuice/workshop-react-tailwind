import React from "react"
import Element3D from "../components/Element3D"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        {/* <Element3D /> */}

        <span>Made with love. ❤️</span>
      </div>
    </footer>
  )
}
