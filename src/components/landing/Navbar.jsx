import React from "react"

export default function Navbar({ children }) {
  return (
    <nav className="flex items-center justify-between">
      <img
        onClick={() => console.log("logo clicked!")}
        className="w-40 cursor-pointer"
        src="images/logo.png"
        alt=""
      />
      <ul className="flex-1 text-center text-white">
        <li className="list-none inline-block px-5">
          <a className="no-underline px-2" href="#">
            Home
          </a>
        </li>
        <li className="list-none inline-block px-5">
          <a className="no-underline px-2" href="#">
            About
          </a>
        </li>
        <li className="list-none inline-block px-5">
          <a className="no-underline px-2" href="#">
            Features
          </a>
        </li>
        <li className="list-none inline-block px-5">
          <a className="no-underline px-2" href="#">
            Contact
          </a>
        </li>
      </ul>
      <img className="w-8" src="images/cart.png" alt="" />
    </nav>
  )
}
