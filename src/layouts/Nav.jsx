import React from "react"

const Nav = ({ children }) => {
  return (
    <nav className="flex items-center justify-between px-24 py-4">
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

      {/* <div>
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Button
        </button>
      </div> */}
    </nav>
  )
}

export default Nav
