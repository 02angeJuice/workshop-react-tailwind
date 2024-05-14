import React from "react"

export const Navbar = () => {
  return (
    <nav className="transition-all bg-blue-500 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-white text-2xl font-semibold">
          Logo
        </a>

        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>{" "}
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>{" "}
          <li>
            <a href="#" className="text-white">
              Feature
            </a>
          </li>{" "}
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
