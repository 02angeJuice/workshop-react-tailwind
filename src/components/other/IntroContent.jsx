import React from "react"

export const IntroContent = () => {
  return (
    <section className="p-4 md:p-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <figure className="transition-all w-full md:w-1/2 bg-red-500 min-h-64">
          1
        </figure>
        <figure className="transition-all w-full md:w-1/2 bg-blue-500 min-h-64">
          2
        </figure>
      </div>
    </section>
  )
}
