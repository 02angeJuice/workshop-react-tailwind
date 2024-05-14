import React from "react"

export const Sidebar = () => {
  return (
    <nav className="transition-all  p-4">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <a href="" className="text-white text-2xl font-semibold">
          Logo
        </a>

        <ul className="container flex flex-col justify-between gap-4">
          <li className="w-full bg-purple-500">
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li className="bg-purple-500">
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li className="bg-purple-500">
            <a href="#" className="text-white">
              Feature
            </a>
          </li>
          <li className="bg-purple-500">
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>

        {/* <ul className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <li className="transition-all w-full md:w-1/2 bg-red-500 min-h-64">
            1
          </li>
          <li className="transition-all w-full md:w-1/2 bg-blue-500 min-h-64">
            2
          </li>
        </ul> */}
      </div>
    </nav>
  )
}
