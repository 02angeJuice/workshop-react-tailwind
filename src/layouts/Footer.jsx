import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <p>Mad with love. ❤️</p>
      </div>
    </footer>
  )
}
