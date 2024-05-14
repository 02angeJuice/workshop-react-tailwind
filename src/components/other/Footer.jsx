import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-500 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {currentYear} Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
