import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center flex space-x-3 justify-center items-center">
        <span className="inline-block">Made with love. ❤️ {currentYear}</span>
        <span>|</span>
        <div className="flex space-x-2">
          <img className="h-5 w-auto" src="my-self/stacks/react.png" alt="" />
          <img
            className="h-5 w-auto"
            src="my-self/stacks/tailwind.png"
            alt=""
          />
          <img className="h-5 w-auto" src="my-self/stacks/github.png" alt="" />
          <img className="h-5 w-auto" src="my-self/stacks/netlify.png" alt="" />
        </div>
      </div>
    </footer>
  )
}
