import React from "react"

const Content = () => {
  return (
    <div className="flex justify-between">
      <div className="text-white mt-48 max-w-xl">
        <h1 className="text-6xl font-semibold leading-normal">
          Groceries <br />
          delivery in <span className="font-light">15 mins</span>
        </h1>

        <p>
          Grocify offer a wide range of products, including fresh products,
          meats, daity, baked goods and non-perishable items.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="cursor-pointer transition-all bg-yellow-500 text-white px-6 py-3 rounded-lg
          border-yellow-600 inline-block mr-4 
          border-b-[4px] 
          hover:brightness-110
          hover:-translate-y-[1px]
          hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Order Now
          </a>

          <a
            href="#"
            className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-3 rounded-lg
          border-blue-600 inline-block mr-4 
          border-b-[4px] 
          hover:brightness-110
          hover:-translate-y-[1px]
          hover:border-b-[6px]
          active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
          >
            Download App
            <span className="text-base inline-block rotate-90">&#10148;</span>
          </a>
        </div>
      </div>

      <div className="">
        <img
          className="w-full max-h-3"
          src="images/grocery-image.png"
          alt="cover"
        />
      </div>
    </div>
  )
}

export default Content
